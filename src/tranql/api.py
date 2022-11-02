"""
Provide a standard protocol for asking graph oriented questions of Translator data sources.
"""
import argparse
import json
import logging
import os
import traceback
from pathlib import Path

import jsonschema
import requests
import yaml
from flasgger import Swagger
from flask import Flask, request, abort, Response, send_from_directory, render_template, make_response
from flask_cors import CORS
from flask_restx import Api as BaseApi, Resource

from tranql.concept import ConceptModel
from tranql.exception import TranQLException
from tranql.main import TranQL, TranQLIncompleteParser
from tranql.tranql_ast import SelectStatement
from tranql.tranql_schema import GraphTranslator, RedisAdapter
from tranql.exception import TranQLException
from tranql.config import Config as TranqlConfig
from tranql.util import title_case

logger = logging.getLogger(__name__)

template_folder_path = Path(__file__).parent / "web" / "build"
template_folder = str(template_folder_path)
static_folder_path = template_folder_path / "static"
static_folder = str(static_folder_path)

WEB_PREFIX = os.environ.get('WEB_PATH_PREFIX', '')
WEB_PREFIX = f"/{WEB_PREFIX.strip('/')}" if WEB_PREFIX else ''

app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)

# Due to a bug with Flask-RESTPlus/RESTX, even when doc generation is disabled on the root path, you still can't serve to it.
# This is a workaround to manually override the portion that causes the problem.
class Api(BaseApi):
  def _register_doc(self, app_or_blueprint):
    pass
  @property
  def base_path(self):
    return ""

api = Api(app)
CORS(app)

app.config['SWAGGER'] = {
    'title': 'TranQL API',
    'description': 'Translator Query Language (TranQL) API.'
                   '<div><a href="https://github.com/NCATS-Tangerine/tranql">'
                   'TranQL Source Code and Documentation.'
                   '</a></div>'
                   '<div><a href="https://researchsoftwareinstitute.github.io/data-translator/apps/tranql">'
                   'TranQL Web Page'
                   '</a></div>'
    ,
    'uiversion': 3,
    'openapi': '3.0.1'
}
filename = 'translator_interchange.yaml'
filename = os.path.join(os.path.dirname(__file__), 'backplane', filename)

definitions_filename = 'definitions.yaml'
definitions_filename = os.path.join(os.path.dirname(__file__), definitions_filename)
with open(filename, 'r') as file_obj:
    template = {
        "definitions": yaml.load(file_obj)["definitions"],
        "tags": [
            {"name": "query"},
            {"name": "schema"},
            {"name": "util"},
            {"name": "configuration"},
            {"name": "webapp"}
        ]
    }
    with open(definitions_filename, 'r') as definitions_file:
        template['definitions'].update(yaml.load(definitions_file))

swagger = Swagger(app, template=template, config={
    "headers": [
    ],
    "specs": [
        {
            "endpoint": 'apispec_1',
            "route": f'{WEB_PREFIX}/apispec_1.json',
            "rule_filter": lambda rule: True,  # ?
            "model_filter": lambda tag: True,  # ?
        }
    ],
    "swagger_ui": True,
    "specs_route": f"{WEB_PREFIX}/apidocs/",
    "openapi": "3.0.1",
    'swagger_ui_bundle_js': 'https://rawcdn.githack.com/swagger-api/swagger-ui/v3.23.1/dist/swagger-ui-bundle.js',
    'swagger_ui_standalone_preset_js': 'https://rawcdn.githack.com/swagger-api/swagger-ui/v3.23.1/dist/swagger-ui-standalone-preset.js',
    'swagger_ui_css': 'https://rawcdn.githack.com/swagger-api/swagger-ui/v3.23.1/dist/swagger-ui.css',
    'swagger_ui_js': 'https://rawcdn.githack.com/swagger-api/swagger-ui/v3.23.1/dist/swagger-ui.js'
})


class StandardAPIResource(Resource):
    @staticmethod
    def validate(request):
        with open(filename, 'r') as file_obj:
            specs = yaml.load(file_obj)
        to_validate = specs["components"]["schemas"]["Message"]
        to_validate["components"] = specs["components"]
        to_validate["components"].pop("Message", None)
        try:
            jsonschema.validate(request.json, to_validate)
        except jsonschema.exceptions.ValidationError as error:
            logging.error(f"ERROR: {str(error)}")
            abort(Response(str(error), 400))

    @staticmethod
    def handle_exception(e, warning=False):
        result = {"errors": []}
        if isinstance(e, list):
            [result["errors"].extend(StandardAPIResource.handle_exception(exception)["errors"]) for exception in e]
        elif isinstance(e, TranQLException):
            result["errors"].append({
                "message": str(e),
                "details": str(e.details) if e.details else ''
            })
        elif isinstance(e, Exception):
            result["errors"].append({
                "message": str(e),
                "details": ''
            })
        elif isinstance(e, str):
            result["errors"].extend(StandardAPIResource.handle_exception(Exception(e))["errors"])

        traceback.print_exc()

        if warning:
            result["status"] = "Warning"
        else:
            result["status"] = "Error"

        return result

    @staticmethod
    def response(data):
        status_code = 200
        if isinstance(data, dict):
            status = data.get('status', None)
            if status == "Error":
                status_code = 500
        return (data, status_code)


class WebAppRoot(Resource):
    def get(self):
        """
        Web app root
        ---
        tags: [webapp]
        consumes': [ 'text/plain' ]
        """
        return send_from_directory(template_folder, 'index.html')


# api.add_resource(WebAppRoot, '/', endpoint='webapp_root')

class WebAppPath(Resource):
    def get(self, path, web_prefix):
        """
        Web app path
        ---
        tags: [webapp]
        parameters:
            - in: path
              name: path
              schema:
                type: string
              required: true
              description: Resource path.
        """
        logger.debug(f"........................PATH: {path}")
        if path.endswith('index.html'):
            return make_response(render_template(path, web_prefix=web_prefix), 200)
        if path != "" and os.path.exists(template_folder + "/" + path):
            return send_from_directory(template_folder, filename=path)
        else:
            abort(404)


# api.add_resource(WebAppPath, '/<path:path>', endpoint='webapp_path')
# api.add_resource(WebAppPath, '/', endpoint='webapp_root', defaults={'path': 'index.html'})

@app.errorhandler(404)
def page_not_found(e):
    return request.path, 404


class Configuration(StandardAPIResource):
    """ Configuration """

    def get(self):
        """
        TranQL Configuration
        ---
        tags: [configuration]
        description: TranQL Configuration
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          type: object

        """
        return self.response({
            "api_url": config['API_URL'],
            "robokop_url": config['ROBOKOP_URL']
        })


class DecorateKG(StandardAPIResource):
    """ Exposes an endpoint that allows for the decoration of a KGS 0.1.0 knowledge graph with TranQL's decorate method. """
    def post(self):
        """
        Decorate a Knowledge Graph
        ---
        tags: [util]
        description: Decorates a knowledge graph's elements with given data using TranQL's decorate method.
        requestBody:
          name: knowledge_graph
          description: A KGS 0.1.0 compliant KGraph
          required: true
          content:
            application/json:
             schema:
               $ref: '#/definitions/KGraph'
             example:
               nodes:
                 - id: n0
                   type: chemical_substance
                 - id: n1
                   type: gene
               edges:
                 - id: e0
                   type: targets
                   source_id: n0
                   target_id: n1
        parameters:
            - in: query
              name: reasoners
              schema:
                type: array
                items:
                  type: string
              example:
                - rtx
                - robokop
              required: false
              description: The reasoner that the knowledge graph originates from.
        responses:
            '200':
                description: Knowledge Graph
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/KGraph'
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'
        """
        message = {"knowledge_graph": request.json}
        reasoners = request.args.getlist('reasoners', None)

        options = {}

        if reasoners != None:
            options["schema"] = reasoners

        SelectStatement.decorate_result(message, options)

        return self.response(message["knowledge_graph"])


class MergeMessages(StandardAPIResource):
    """ Exposes an endpoint that allows for the merging of an arbitrary amount of messages """
    def post(self):
        """
        Merge Messages
        ---
        tags: [util]
        description: Merge Message objects together using TranQL's merge_results method.
        requestBody:
          name: messages
          description: An array of KGS 0.1.0 compliant message objects
          required: true
          content:
            application/json:
             schema:
               type: array
               items:
                  $ref: '#/definitions/Message'
             example:
               - knowledge_graph:
                   nodes:
                     - id: TEST:CS1
                       type: chemical_substance
                     - id: TEST:G1
                       type: gene
                   edges:
                     - type: targets
                       source_id: TEST:CS1
                       target_id: TEST:G1
               - knowledge_graph:
                   nodes:
                     - id: TEST:merged
                       type:
                         - chemical_substance
                         - Drug
                       equivalent_identifiers:
                         - TEST:CS1
                     - id: TEST:CS2
                       type: chemical_substance
                     - id: TEST:G2
                       type: gene
                   edges:
                     - type: interacts_with
                       source_id: TEST:CS2
                       target_id: TEST:G2
        parameters:
            - in: query
              name: name_based_merging
              schema:
                type: boolean
                default: true
              required: false
              description: Tells the merger whether or not to merge elements with identical `name` properties.
            - in: query
              name: resolve_names
              schema:
                type: boolean
                default: false
              required: false
              description: >
                (Experimental) Tells the merger to invoke the Bionames API on nodes in order to get more equivalent identifiers.
                Ideally, this should result in a more thoroughly merged graph, as fewer equivalent nodes will fail to be detected.
                This currently should not be used on large queries (1000+ nodes), or it will end up flooding the Bionames API.
            - in: query
              name: question_graph
              schema:
                type: string
              description: The JSON serialized question graph that the result should retain
            - in: query
              name: root_order
              schema:
                type: array
                items:
                  type: string
              required: false
              description: >
                If merging messages with separate paths, e.g. population_of_individual_organisms->chemical_substance and chemical_substance->disease,
                the root order (["population_of_individual_organisms", "chemical_substance", "disease"]) of the two messages must be known in order to
                successfully merge their knowledge maps together. If every message has the same order, you don't care about their knowledge maps, or
                there is only one response, then this parameter is not required. If the parameter is not provided, then it will concatenate all each
                response's knowledge map.
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Message'
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'

        """
        messages = request.json
        return self.response(SelectStatement.merge_results(messages))


class TranQLQuery(StandardAPIResource):
    """ TranQL Resource. """
    def post(self):
        """
        Query TranQL
        ---
        tags: [query]
        description: Execute a TranQL query.
        requestBody:
          name: query
          description: A valid TranQL program
          required: true
          content:
            text/plain:
             schema:
               type: string
             example: >
               select chemical_substance->gene->disease
                 from \"/graph/gamma/quick\"
                where disease=\"asthma\"
        parameters:
            - in: query
              name: dynamic_id_resolution
              schema:
                type: boolean
              required: false
              default: false
              description: Specifies if dynamic id lookup of curies will be performed
            - in: query
              name: asynchronous
              schema:
                type: boolean
              required: false
              default: true
              description: Specifies if requests made by TranQL will be asynchronous.
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Message'
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'

        """
        # self.validate (request)
        result = {}

        logging.debug(request.data)
        query = request.data.decode('utf-8')
        dynamic_id_resolution = request.args.get('dynamic_id_resolution', 'False').upper() == 'TRUE'
        asynchronous = request.args.get('asynchronous', 'True').upper() == 'TRUE'
        logging.debug(f"--> query: {query}")
        tranql = TranQL(options={
            "dynamic_id_resolution": dynamic_id_resolution,
            "asynchronous": asynchronous,
            "registry": app.config.get('registry', False),
            # when testing new schema should be created as per the test case
            "recreate_schema": app.config.get('TESTING', True)
        })
        try:
            context = tranql.execute(query)  # , cache=True)
            result = context.mem.get('result', {})
            logger.debug(f" -- backplane: {context.mem.get('backplane', '')}")
            if len(context.mem.get('requestErrors', [])) > 0:
                errors = self.handle_exception(context.mem['requestErrors'], warning=True)
                result.update(errors)
        except Exception as e:
            traceback.print_exc()
            errors = [e, *tranql.context.mem.get('requestErrors', [])]
            result = self.handle_exception(errors)
        return self.response(result)

class AnnotateGraph(StandardAPIResource):
    """ Request the message object to be annotated by the backplane and return the annotated message """
    def post(self):
        """
        Annotate Graph
        ---
        tags: [query]
        description: Annotate a message's knowledge graph via the GNBR decorator.
        requestBody:
          name: message
          description: A KGS 0.1.0 compliant Message
          required: true
          content:
            application/json:
             schema:
               $ref: '#/definitions/Message'
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Message'
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'
        """
        tranql = TranQL()
        messageObject = request.json
        url = tranql.context.mem.get('backplane') + '/graph/gnbr/decorate'

        logger.info(url)

        resp = requests.post(
            url=url,
            json=messageObject,
            headers={
                'accept': 'text/plain'
            }
        )

        data = resp.json()

        for result in data['results']:
            type = result['result_type']
            if type in messageObject:
                messageObject[type] = result['result_graph']

        return self.response(messageObject)


class SchemaGraph(StandardAPIResource):
    """ Graph of schema to display to the client """
    def get(self):
        """
        TranQL Schema
        ---
        tags: [schema]
        description: Get TranQL's schema.
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Message'
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'
        parameters:
            - in: query
              name: force_update
              schema:
                type: boolean
              required: false
              default: false
              description: Specifies if dynamic id lookup of curies will be performed
        """
        force_update = request.args.get("force_update")
        tranql = TranQL (options={"registry": app.config.get('registry', False)})
        schemafactory = tranql.schema_factory
        schema = schemafactory.get_instance(force_update=force_update)
        schemaGraph = GraphTranslator(schema.schema_graph)

        # logger.info(schema.schema_graph.net.nodes)
        # logger.info(schemaGraph.graph_to_message())

        # return {"nodes":[],"links":[]}
        obj = {
            "schema": schemaGraph.graph_to_message(),
        }
        if len(schema.loadErrors) > 0:
            errors = self.handle_exception(schema.loadErrors, warning=True)
            for key in errors:
                obj[key] = errors[key]
        return self.response(obj)


class ModelConceptsQuery(StandardAPIResource):
    """ Query model concepts. """
    def post(self):
        """
        Biolink Model Concepts
        ---
        tags: [schema]
        description: Get valid concepts in the biolink model.
        responses:
            '200':
                description: Array of concepts
                content:
                    application/json:
                        schema:
                          type: array
                          items:
                            type: string

        """
        result = {}
        try:
            concept_model = ConceptModel("biolink-model")
            result = sorted(list(concept_model.get_all_elements()))
            logging.debug(result)
        except Exception as e:
            # traceback.print_exc (e)
            result = self.handle_exception(e)
        return self.response(result)


class ModelRelationsQuery(StandardAPIResource):
    """ Query model relations. """
    def post(self):
        """
        Biolink Model Relations
        ---
        tags: [schema]
        description: Get valid relations in the biolink model.
        responses:
            '200':
                description: Array of relations
                content:
                    application/json:
                        schema:
                          type: array
                          items:
                            type: string

        """
        result = {}
        try:
            concept_model = ConceptModel("biolink-model")
            result = sorted(list(concept_model.get_all_relations()))
            logging.debug(result)
        except Exception as e:
            # traceback.print_exc (e)
            result = self.handle_exception(e)
        return self.response(result)


class ReasonerURLs(StandardAPIResource):
    """ Returns the URLs corresponding to `reasoner` properties. """
    def get(self):
        """
        Retrieve Reasoner URLs
        ---
        tags: [util]
        description: Returns the corresponding schema URLs of each `reasoner` value.
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          type: object
        """
        tranql = TranQL()
        schema = tranql.schema
        return {schema[0]: schema[1]['url'] for schema in schema.schema.items()}


class AutocompleteTerm(StandardAPIResource):
  """ Get autocomplete suggestions for a search term using the TranQL redisgraph instance """
  def post(self):
    """
    Autocomplete Term
    ---
    tags: [util]
    description: Get autocomplete suggestions for a search term using the TranQL redisgraph instance
    requestBody:
      description: Search term
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              query:
                type: string
              allowed_concept_types:
                description: >
                  List of allowed biolink types to search against, e.g. biolink:Disease.
                  If null or empty, the search will execute against all supported types.
                  Note that if searching against all types, a very high `query_limit` should be specified
                  since it will be distributed evenly across every supported concept index in the redisgraph
                  (and many will not yield and results while a few will yield many results).
                type: array
                items:
                  type: string
                default: null
              fields:
                description: List of fields to search against, i.e. `name`, `equivalent_identifiers`, etc. Currently unimplemented.
                type: array
                items:
                  type: string
                default: []
              prefix_search:
                description: Perform a prefix search against the graph, i.e. a search as you type query. Only one of `prefix_search` or `levenshtein_distance` can be used in a query.
                type: boolean
                default: true
              levenshtein_distance:
                description: Perform a fuzzy search using levenshtein distance. Only one of `prefix_search` or `levenshtein_distance` can be used in a query.
                type: integer
                default: 0
              study_linked:
                description: Only return results that are associated with studies.
                type: bool
                default: true
              query_limit:
                description: Limit the number of results that the search can return.
                type: number
                default: 50
    responses:
      '200':
        description: Success
    """
    query = request.json["query"]
    # Indexes are equal to node labels in the redisgraph instance,
    # and each node label is simply a biolink concept type, e.g. biolink:Disease
    indexes = request.json.get("allowed_concept_types", None)
    fields = request.json.get("fields", None)
    prefix_search = request.json.get("prefix_search", True)
    levenshtein_distance = request.json.get("levenshtein_distance", 0)
    study_linked = request.json.get("study_linked", True)
    query_limit = request.json.get("query_limit", 50)

    # if prefix_search and levenshtein_distance > 0:
    #   return "`prefix_search` and `levenshtein_distance` cannot be used together.", 400


    tranql = TranQL (options={"registry": app.config.get('registry', False)})
    schema_factory = tranql.schema_factory
    schema = schema_factory.get_instance(force_update=False)

    redis_adapter = RedisAdapter()
    redis_schema_name = [schema_name for schema_name, metadata in schema.config['schema'].copy().items() if metadata.get('redis', False)][0]

    if indexes is None or len(indexes) == 0:
      concept_types = schema.schema[redis_schema_name]["schema"].keys()
      indexes = ["biolink:" + title_case(concept_type) for concept_type in concept_types]


    return redis_adapter.search(
      redis_schema_name,
      query,
      indexes,
      fields=fields,
      options={
        "prefix_search": prefix_search,
        # Ensure results are linked to studies
        "postprocessing_cypher": "MATCH (:`biolink:ClinicalModifier`)-[]-(node)" if study_linked else "",
        # "postprocessing_cypher": "MATCH ()-[:`biolink:Association`|`biolink:association`|`biolink:Mentions`|`biolink:mentions`]->(node)" if study_linked else "",
        "levenshtein_distance": levenshtein_distance,
        "query_limit": query_limit
      }
    )

class ParseIncomplete(StandardAPIResource):
    """ Tokenizes an incomplete query and returns the result """
    def parse(self, parser, query):
        if isinstance(query, str):
            parsed = parser.tokenize(query)
            result = parsed.asList()
        else:
            result = [self.parse(parser, q) for q in query]
        return result

    def post(self):
        """
        Parse Incomplete Query
        ---
        tags: [util]
        description: Tokenizes an incomplete query and returns the result
        requestBody:
          name: query
          description: A TranQL program
          content:
            text/plain:
              schema:
                type: string
              examples:
                Concept:
                  value: select chemical_substance->
                  summary: No concept provided
                Partial_concept:
                  value: select chemical_substance->dis
                  summary: Concept partially completed
                Predicate:
                  value: select chemical_substance-[
                  summary: No predicate provided
                Partial_predicate:
                  value: select chemical_substance-[direc
                  summary: Predicate partially completed
                Nothing:
                  value: select
                  summary: Nothing provided
            application/json:
              schema:
                type: array
                items:
                  type: string
              examples:
                Partial query:
                  value:
                    - select chemical_substance-[
                    - select chemical_substance-[]->gene
                  summary: Partial query
        responses:
            '200':
                description: Message
                content:
                    application/json:
                        schema:
                          type: array
                        example:
                          -  -  - "select"
                                - "chemical_substance"
                                -  - "-["
                                   - "predicate"
                                   - "]->"
                                - "incomplete_con"
                             - []
                             -  - ""
                             -  - ""
            '500':
                description: An error was encountered
                content:
                    application/json:
                        schema:
                          $ref: '#/definitions/Error'
        """
        if request.content_type == "text/plain":
            query = request.data.decode('utf-8')
        else:
            query = request.json

        config_path = "conf.yml"
        config = TranqlConfig(config_path)
        parser = TranQLIncompleteParser (config.get('BACKPLANE'))
        result = None
        try:
            result = self.parse(parser, query)
        except Exception as e:
            result = self.handle_exception(e)
        return self.response(result)


###############################################################################################
#
# Define routes.
#
###############################################################################################

api.add_resource(TranQLQuery, f'{WEB_PREFIX}/tranql/query')
api.add_resource(SchemaGraph, f'{WEB_PREFIX}/tranql/schema')
api.add_resource(AnnotateGraph, f'{WEB_PREFIX}/tranql/annotate')
api.add_resource(MergeMessages, f'{WEB_PREFIX}/tranql/merge_messages')
api.add_resource(DecorateKG, f'{WEB_PREFIX}/tranql/decorate_kg')
api.add_resource(ModelConceptsQuery, f'{WEB_PREFIX}/tranql/model/concepts')
api.add_resource(ModelRelationsQuery, f'{WEB_PREFIX}/tranql/model/relations')
api.add_resource(ParseIncomplete, f'{WEB_PREFIX}/tranql/parse_incomplete')
api.add_resource(AutocompleteTerm, f'{WEB_PREFIX}/tranql/autocomplete_term')
api.add_resource(ReasonerURLs, f'{WEB_PREFIX}/tranql/reasonerURLs')

api.add_resource(WebAppPath, f'{WEB_PREFIX}/<path:path>', endpoint='webapp_path', defaults={'web_prefix': WEB_PREFIX})
api.add_resource(WebAppPath, f'{WEB_PREFIX}/', endpoint='webapp_root',
                 defaults={'path': f'index.html', 'web_prefix': WEB_PREFIX})

if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Tranql web app')
    parser.add_argument('--host', action="store", dest="host", default='0.0.0.0')
    parser.add_argument('--port', action="store", dest="port", default=8001, type=int)
    parser.add_argument('-d', '--debug', help="Debug log level.", default=False, action='store_true')
    parser.add_argument('-r', '--reloader', help="Use reloader independent of debug.", default=False,
                        action='store_true')
    parser.add_argument('-R', '--registry', help="Use registries to get data", default=False, action='store_true')
    args = parser.parse_args()
    app.config['registry'] = args.registry
    if args.debug:
        logging.basicConfig(level=logging.DEBUG)
    app.run(
        host=args.host,
        port=args.port,
        debug=args.debug,
        use_reloader=args.debug or args.reloader
    )
