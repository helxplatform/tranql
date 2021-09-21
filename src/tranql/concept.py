
import os

from bmt import Toolkit
from tranql.util import snake_case


class ConceptModel:
    """ A grouping of concepts.
    Should ultimately be generalizable to different concept models. We begin with the biolink-model. """
    bl_toolkit = None
    def __init__(self, name):
        if not ConceptModel.bl_toolkit:
            ConceptModel.bl_toolkit = Toolkit(f"https://raw.githubusercontent.com/biolink/biolink-model"
                f"/{os.environ.get('BL_VERSION', '2.1.0')}/biolink-model.yaml")
        self.toolkit = ConceptModel.bl_toolkit
        self.all_entities = [snake_case(x) for x in self.toolkit.get_all_entities()]
        self.all_slots = [snake_case(x) for x in self.toolkit.get_all_slots()]

    def get_all_elements(self):
        return self.all_entities

    def get_all_relations(self):
        return self.all_slots

    def get(self, concept_name):
        for entity in self.all_entities:
            if concept_name == entity:
                return entity
        else:
            return None


    def __contains__ (self, name):
        return self.get(name) != None


class BiolinkModelWalker:
    def __init__(self):
        self.concept_map = {
            "drug_exposure" : {
                "chemical_substance" : lambda n, t: self.convert_direct(n, t)
            }
        }

    def get_transitions (self, source_type):
        return list(self.concept_map.get(source_type, {}).keys ())

    def convert_direct (self, node, target_type):
        return {
            'id' : node['curie'],
            'type' : target_type
        }

    def translate (self, node, target_type):
        result = None
        source_type = node['type']
        if source_type in self.concept_map:
            conversions = self.concept_map[source_type]
            if target_type in conversions:
                result = conversions[target_type] (node, target_type)
        return result
