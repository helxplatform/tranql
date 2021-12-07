import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/core';
import { Button } from 'reactstrap';
import { Modal, Form, Card, Container, Row, Col, ListGroup, Table, Tabs, Tab, InputGroup } from 'react-bootstrap';
import { ForceGraph3D, ForceGraph2D, ForceGraphVR } from 'react-force-graph';
import * as sizeof from 'object-sizeof';
import JSONTree from 'react-json-tree';
import * as JSON5 from 'json5';
import * as qs from 'qs';
// import logo from './static/images/tranql.png'; // Tell Webpack this JS file uses this image
import { contextMenu } from 'react-contexify';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle, IoIosSwap, IoMdBrowsers } from 'react-icons/io';
import {
  FaCog, FaDatabase, FaQuestionCircle, FaSearch, FaHighlighter, FaEye,
  FaSpinner, FaMousePointer, FaTimes, FaFolderOpen, FaFileImport, FaFileExport,
  FaArrowsAlt, FaTrash, FaPlayCircle, FaTable, FaCopy, FaPython, FaFrown
} from 'react-icons/fa';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip } from 'recharts';
import InlineEdit from 'react-edit-inline2';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
//import Tooltip from 'rc-tooltip';
import ReactTooltip from 'react-tooltip';
import { NotificationContainer , NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { GridLoader } from 'react-spinners';
import SplitPane from 'react-split-pane';
import Cache from './Cache.js';
import TranQLEmbedded, { EmbedMode } from './TranQLEmbedded.js';
import AnswerViewer from './AnswerViewer.js';
import GammaViewer from './GammaViewer.js';
import QueriesModal from './QueriesModal.js';
import HistoryViewer from './HistoryViewer.js';
import BrowseNodeInterface from './BrowseNodeInterface.js';
import Legend from './Legend.js';
import { AppTableViewer } from './TableViewer.js';
import HelpModal, { ToolbarHelpModal } from './HelpModal.js';
import ImportExportModal from './ImportExportModal.js';
import SettingsModal from './SettingsModal.js';
import confirmAlert from './confirmAlert.js';
import highlightTypes from './highlightTypes.js';
import { shadeColor, adjustTitle, hydrateState, formatBytes, debounce } from './Util.js';
import { AppToolbar, Tool, /*ToolGroup*/ } from './Toolbar.js';
import LinkExaminer from './LinkExaminer.js';
// import FindTool from './FindTool.js';
import FindTool2 from './FindTool2.js';
import Message from './Message.js';
import Chain from './Chain.js';
import autoComplete, { TooltipExtension } from './autocomplete.js';
import ContextMenu from './ContextMenu.js';
import GraphSerializer from './GraphSerializer.js';
import { RenderInit, RenderSchemaInit, IdFilter, LegendFilter, LinkFilter, NodeFilter, ReasonerFilter, SourceDatabaseFilter, CurvatureAdjuster } from './Render.js';
// import "react-tabs/style/react-tabs.css";
import 'rc-slider/assets/index.css';
import "react-table/react-table.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { getCurieFromCMToken } from './codemirror-tooltip-extension/text-hover.js';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.css'; // without this css hints won't show
import './App.css';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch.js';

/* Setup codemirror */
require('create-react-class');
require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/sql-hint');
require('codemirror/lib/codemirror.css');

// eslint-disable-next-line
String.prototype.unquoted = function (){return this.replace (/(^")|("$)/g, '')}
// eslint-disable-next-line
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

const spinnerStyleOverride = css`
    display: block;
    margin: 4 auto;
    border-color: red;
`;

/**
 * @desc The main TranQL application class.
 * Integrates the query editor, query executor, rendering pipeline, and visualization.
 * @author Steve Cox scox@renci.org
 */
class App extends Component {
  /**
   * A TranQL web app.
   */
  constructor(props) {
    /* Create state elements and initialize configuration. */
    super(props);
    //this.tranqlURL = window.location.origin;
    //this.tranqlURL = "http://localhost:8001"; // dev only
    this.robokop_url = "https://robokop.renci.org";
    this.nameResolutionURL = "https://name-resolution-sri.renci.org";
    this.nodeNormalizationURL = "https://nodenormalization-sri.renci.org/1.2";
    this._contextMenuId = "contextMenuId";

    // Query editor support.
    this._getConfiguration = this._getConfiguration.bind (this);
    this._getModelConcepts = this._getModelConcepts.bind (this);
    this._getModelRelations = this._getModelRelations.bind (this);
    this._getReasonerURLs = this._getReasonerURLs.bind (this);
    this._updateCode = this._updateCode.bind (this);
    this._executeQuery = this._executeQuery.bind(this);
    // For usage where the query is auto-executed on change (e.g., when embedded).
    this._debouncedExecuteQuery = debounce(this._executeQuery, 1000);
    this._abortQuery = this._abortQuery.bind(this);
    this._configureMessage = this._configureMessage.bind (this);
    this._translateGraph = this._translateGraph.bind (this);
    // Specifically for autocomplete
    this._codeAutoComplete = autoComplete.bind(this);
    this._resolveIdentifiersFromConcept = this._resolveIdentifiersFromConcept.bind(this);

    // Toolbar
    this._setNavMode = this._setNavMode.bind(this);
    this._setSelectMode = this._setSelectMode.bind(this);

    this._setHighlightTypesMode = this._setHighlightTypesMode.bind(this);
    this._highlightType = this._highlightType.bind(this);
    this.__highlightTypes = highlightTypes.bind(this);

    this._setConnectionExaminerActive = this._setConnectionExaminerActive.bind(this);

    // Non-visualization components
    this._renderCodemirror = this._renderCodemirror.bind (this);
    this._renderBanner = this._renderBanner.bind (this);
    this._renderAnswerViewer = this._renderAnswerViewer.bind (this);

    // The visualization
    this._renderForceGraph = this._renderForceGraph.bind (this);
    this._renderForceGraph2D = this._renderForceGraph2D.bind (this);
    this._renderForceGraph3D = this._renderForceGraph3D.bind (this);
    this._renderForceGraphVR = this._renderForceGraphVR.bind (this);
    this._updateGraphElementVisibility = this._updateGraphElementVisibility.bind(this);
    this._legendButtonRightClick = this._legendButtonRightClick.bind(this);
    this._updateFg = this._updateFg.bind(this);
    this._handleNodeClick = this._handleNodeClick.bind(this);
    this._handleNodeRightClick = this._handleNodeRightClick.bind(this);
    this._handleNodeHover = this._handleNodeHover.bind(this);
    this._fgAdjustCharge = this._fgAdjustCharge.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);
    this._handleLinkHover = this._handleLinkHover.bind(this);
    this._handleLinkRightClick = this._handleLinkRightClick.bind(this);
    this._handleContextMenu = this._handleContextMenu.bind(this);
    this._updateGraphSize = this._updateGraphSize.bind(this);
    this._updateGraphSplitPaneResize = this._updateGraphSplitPaneResize.bind(this);
    this._setSchemaViewerActive = this._setSchemaViewerActive.bind(this);

    // Notifications
    this._displayAllHiddenNotification = this._displayAllHiddenNotification.bind(this);

    // Fetch data for schema visualization
    this._getSchema = this._getSchema.bind(this);

    // Visualization filter state values
    this._onLinkWeightRangeChange = this._onLinkWeightRangeChange.bind (this);
    this._onNodeDegreeRangeChange = this._onNodeDegreeRangeChange.bind (this);
    this._onLegendDisplayLimitChange = this._onLegendDisplayLimitChange.bind (this);

    // Visualization modifiers
    this._onChargeChange = this._onChargeChange.bind (this);

    // Type chart
    this._renderTypeChart = this._renderTypeChart.bind (this);

    this._setActiveModal = this._setActiveModal.bind (this);

    // Annotate graph
    this._annotateGraph = this._annotateGraph.bind (this);

    // Browse node interface
    this._browseNodeResult = this._browseNodeResult.bind (this);

    // Settings management
    this._handleUpdateSettings = this._handleUpdateSettings.bind (this);
    this._toggleCheckbox = this._toggleCheckbox.bind (this);
    this._hydrateState = hydrateState.bind (this);
    this._handleQueryString = this._handleQueryString.bind (this);

    this._handleShowAnswerViewer = this._handleShowAnswerViewer.bind (this);
    this._handleMessageDialog = this._handleMessageDialog.bind (this);
    this._analyzeAnswer = this._analyzeAnswer.bind (this);
    this._cacheWrite = this._cacheWrite.bind (this);
    this._cacheFormat = this._cacheFormat.bind (this);
    this._cacheRead = this._cacheRead.bind (this);
    this._clearCache = this._clearCache.bind (this);
    this._updateCacheViewer = this._updateCacheViewer.bind (this);

    // Component rendering.
    this.render = this.render.bind(this);
    this._updateDimensions = this._updateDimensions.bind(this);
    this._openObjectViewer = this._openObjectViewer.bind(this);
    this._closeObjectViewer = this._closeObjectViewer.bind(this);
    this._openTableViewer = this._openTableViewer.bind(this);
    this._closeTableViewer = this._closeTableViewer.bind(this);

    // Create code mirror references.
    // this._codemirror = React.createRef ();
    this._contextMenu = React.createRef ();

    // Create modal references
    this._answerViewer = React.createRef ();
    this._messageDialog = React.createRef ();
    this._exampleQueriesModal = React.createRef ();
    this._cachedQueriesModal = React.createRef ();


    // Create the graph's GUI-related references
    this._graphSplitPane = React.createRef ();
    this._tableSplitPane = React.createRef ();
    this._tableViewer = React.createRef ();
    this._toolbar = React.createRef ();
    this._findTool = React.createRef ();
    this._browseNodeInterface = React.createRef ();
    this._linkExaminer = React.createRef ();

    // Create tool-related references (for selecting them to be active)
    this._selectToolRef = React.createRef ();

    // Cache graphs locally using IndexedDB web component.
    this._cache = new Cache ();

    /**
     * Specifies the way in which the embedded app should render (specified by the query string argument "embed").
     * 
     * Related: the property `embedded` is functionally equivalent to `this.embedMode !== EmbedMode.NONE`, which abstracts
     * away from the embed mode functionality.
     */
    this.embedMode = EmbedMode.NONE;

    // Configure initial state.
    this.state = {
      code : `select chemical_substance->gene->disease
  from \"/graph/gamma/quick\"
 where disease=\"asthma\"`,
      dynamicIdResolution: true,

      // Concept model concepts and relations.
      modelConcepts : [],
      modelRelations : [],

      // The graph; populated when a query's executed.
      loading: false,
      record : null,
      message : null,
      messageRecord : null,
      graph : {
        nodes : [],
        links : [],

        // Types that aren't rendered
        hiddenTypes: {
          "nodes": [],
          "links": []
        },
        // Graph reference before being filtered to pass to the Legend component (filtered graph results in element types being omitted)
        typeMappings: {}
      },
      // Filters.
      linkWeightRange : [0, 100],
      nodeDegreeMax : 0,
      nodeDegreeRange : [0, 1000],
      schemaLegendRenderAmount : {
        nodes: 20,
        links: 10
      },
      queryLegendRenderAmount : {
        nodes: 10,
        links: 10
      },
      dataSources : [],
      reasonerSources : [],

      charge : -100,

      // Manage node selection and navigation.
      contextNode : null,
      navigateMode: false,
      selectMode: false,

      // Set up CodeMirror settings.
      codeMirrorOptions : {
        lineNumbers: true,
        mode: 'text/x-mysql', //'text/x-pgsql',
        tabSize: 2,
        readOnly: false,
        extraKeys: {
          'Ctrl-Space': this._codeAutoComplete
        },
        textHover: true
      },
      showCodeMirror : true,

      // Configure the 3d force directed graph visualization.
      visMode : '3D',
      useCache : true,
      cachedQueries : [],
      databaseSize : '',
      colorGraph : true,
      forceGraphOpts : {
        nodeRelSize : 7,
        linkWidth: 2,
        enableNodeDrag : true
      },
      graphHeight : window.innerHeight,
      graphWidth : window.innerWidth,
      curvedLinks : false, // Can't change the width of curved links beyond 0 due to it using THREE.Line
      directionalParticles : false, // Huge performance tank - basically unusable when viewing an entire graph
      directionalArrows : false, // Large performance loss when used with highlight types tool. Also looks ugly. Should be made into an option in settings.

      // Object viewer
      objectViewerEnabled : true,
      // Portion of split pane that the object viewer takes up when it is opened (where the second figure is the object viewer's size)
      objectViewerSize : 1 - (1/3),
      objectViewerSelection : null,

      // Keep track of the tableView in the main state as well
      tableView : false,
      tableViewerSize : 1 - (2/7),

      // Keep track of table viewer/interactive shell plugins
      tableViewerComponents : {
        tableViewerCompActive : false,
      },

      // Schema viewer
      schema : {
        nodes : [],
        links : [],

        // Types that aren't rendered
        hiddenTypes: {
          "nodes": [],
          "links": []
        },
        // Graph reference before being filtered to pass to the Legend component (filtered graph results in element types being omitted)
        typeMappings: {}
      },
      schemaMessage : null,
      schemaViewerActive : true,
      schemaViewerEnabled : true, // Sandbox the feature
      schemaLoaded : false,


      toolbarEnabled : true,

      connectionExaminer : false, // Connection examiner tool state

      highlightTypes : false, // Highlight types tool state
      highlightedType : [], // Currently highlighted types

      browseNodeActive : false,

      // Tools for the toolbar component
      useToolCursor : false,

      // Type chart
      showTypeNodes : true, // When false, shows link types (prevents far too many types being shown at once)

      // Cached queries modal
      cachedQueriesModalTools: [
        <FaTrash data-tip="Delete from the cache"
                 onClick={() => {
                   // this._cachedQueriesModal.current.hide();
                   confirmAlert({
                     title:"Delete cached query",
                     message:"Are you sure you want to delete this query?",
                     buttons:[
                       {
                         label: 'Confirm',
                         onClick: () => {
                           const currentQuery = this._cachedQueriesModal.current.currentQuery;
                           // The `id` property is the cache's id of the query.
                           const cachedQueries = this.state.cachedQueries.filter((query) => query.id !== currentQuery.id);
                           this.setState({ cachedQueries : cachedQueries });
                           // Don't let the query go below 0
                           let newCurrentQueryIndex = Math.max(0, this._cachedQueriesModal.current.state.currentQueryIndex - 1);
                           this._cachedQueriesModal.current.setState({ currentQueryIndex : newCurrentQueryIndex });
                           this._cache.db.cache.delete(currentQuery.id);
                         }
                       },
                       {
                         label:'Cancel',
                         onClick: () => {}
                       }
                     ]
                   });
                 }}/>
      ],

      activeModal : null,

      exampleQueries : require("./static/app_data/example_queries.js"),

      //showAnswerViewer : true
      // showAnswerViewerOnLoad: false
      useLastUsedView: false
    };

    // This is a cache that stores results from `this._resolveIdentifiersFromConcept` for use in codemirror tooltips.
    this._autocompleteResolvedIdentifiers = {};

    /**
     * We want to reset the interval if user highlights again. Stores `id`:`interval` Structure was too complicated so it is now separated into two objects.
     */
    this._highlightTypeFadeIntervals = {
    };
    this._highlightTypeFadeTimeouts = {
    };

    /**
     * Create the rendering pipeline, a chain of responsibility.
     */
    this._renderChain = new Chain ([
      new RenderInit (),
      new ReasonerFilter (),
      new IdFilter (),
      new LinkFilter (),
      new NodeFilter (),
      new SourceDatabaseFilter (),
      new LegendFilter (),
      new CurvatureAdjuster ()
    ]);

    // Create rendering pipeline for schema
    this._schemaRenderChain = new Chain ([
      new RenderSchemaInit (),
      new RenderInit (),
      new ReasonerFilter(),
      new IdFilter (),
      new NodeFilter (),
      new LegendFilter (),
      new CurvatureAdjuster ()
    ]);

    // Fetch controllers
    this._queryController = new window.AbortController();
    this._autoCompleteController = new window.AbortController();
    // This is a tracking symbol used to detect if a new autocomplete call has been opened.
    // It it used to prevent stale autocompletion calls from writing to the codemirror state.
    this._autoCompleteInstance = Symbol();

    this._OVERLAY_X = 0;
    this._OVERLAY_Y = 0;

    // Get valid options in the `from` clause and their respective `reasoner` values.
    // Doesn't belong in state.
    this.reasonerURLs = this._getReasonerURLs ();

    // Promises
    this.schemaPromise = new Promise(()=>{});
  }
  get embedded() {
    return this.embedMode !== EmbedMode.NONE;
  }
  /**
   * Updates the queries contained within the cache viewer modal.
   *
   */
  _updateCacheViewer () {
    const updateQueryTitle = (query, queryTitle) => {
      if (!this._cachedQueriesModal.current) return;
      query.data.title = queryTitle;
      this._cache.db.cache.update(query.id,query);
      /* Gets a bit messy here but since it's directly modifying a property of the object, and these objects are all formatted and stored in the ref's state, we have to work around it a bit. */
      this.setState({ cachedQueries : this.state.cachedQueries });
      this._cachedQueriesModal.current.state.queries.forEach(q => {
        if (q.id === query.id) {
          q.title = query.data.title;
        }
      });
      this._cachedQueriesModal.current.setState({ queries : this._cachedQueriesModal.current.state.queries });
    }
    this._cache.db.cache.toArray().then((queries) => {
      queries = queries.map((query,i) => {
        let queryTitle;
        if (typeof query.data.title !== "undefined") {
          queryTitle = query.data.title;
        }
        else {
          queryTitle = "Query "+(i+1);
          updateQueryTitle(query,queryTitle);
        }
        // This is a function so that it is rerendered everytime the parent is rerendered, allowing it to update the `text` property.
        const editorTitle = () => (
            <InlineEdit validate={(text) => text.length > 0}
                        className="title-edit"
                        text={query.data.title}
                        paramName={'title'}
                        style={{}}
                        change={(data) => (updateQueryTitle(query,data.title))}></InlineEdit>
        );
        return {
          title: queryTitle,
          editorTitle: editorTitle,
          query:query.key,
          id: query.id
        };
      });
      this.setState({ cachedQueries : queries });
    });
  }
  /**
   * Read an object from the cache.
   *
   * @param {string} key - The object's unique key.
   * @private
   */
  _cacheRead (key) {
    var result = null;
    if (localStorage.hasOwnProperty(key)) {
      // get the key's value from localStorage
      let value = localStorage.getItem(key);
      try {
        result = JSON.parse(value);
      } catch (e) {
        // handle empty string.
        result = value;
      }
    }
    return result;
  }
  /**
   * Clear the cache.
   *
   * @private
   */
  _clearCache () {
    this._cache.clear ();
  }
  /**
   * Callback for the query editor to set the value of the code.
   *
   * @param {string} newCode - New value of the query in the editor.
   * @private
   */
  _updateCode (newCode) {
    this.setState({
      code: newCode
    });

    /**
     * Perform editor-related tasks upon query updating.
     * Perform this on the callback (updated) state, so that the codemirror state is updated.
     * 
     */
    this.setState({}, () => {
      const editor = this._codemirror;
      if (!editor) return;
      if (editor.state.completionActive) {
        this._codeAutoComplete();
      }
      /* Traverse through each token in the editor and perform identifier resolution on it if it's a string representing a curie */
      const lines = editor.lineCount();
      for (let lineNumber=0; lineNumber<lines; lineNumber++) {
        const tokens = editor.getLineTokens(lineNumber);
        for (let i=0; i<tokens.length; i++) {
          const currentToken = tokens[i];
          if (currentToken.type === "string" && currentToken.string.includes(":")) {
            // It really doesn't need to be a curie here, since it'll just return no results,
            // but might as well check if there's a colon to avoid making unnecessary API requests.
            // Also, enable returning cached results (from previous calls), since this will be run on every curie
            // each time the codemirror query is changed.
            this._resolveIdentifiersFromCurie(getCurieFromCMToken(currentToken.string)).catch(() => {}, false);
          }
        }
      }
    });
    /**
     * Note that the debounced query execution in embedded mode still occurs in the codemirror's `onChange` callback.
     * This is because initially loading the ?query param into the graph should execute *immediately*, not on a debounce,
     * (and there are a couple other issues other than the immediate execution that arise from having it here related the ?query loading). 
     */
  }
  
  /**
   * Sets the active force graph
   *
   * @private
   */
  _setSchemaViewerActive (active) {
    if (this._browseNodeInterface.current) this._browseNodeInterface.current.hide();
    if (this._linkExaminer.current) this._linkExaminer.current.hide();
    this._closeObjectViewer();

    // Don't set state, thereby reloading the graph, if the schema viewer isn't enabled
    this.setState({},() => {
      const msg = active ? this.state.schemaMessage : this.state.message;


      this._configureMessage(msg,false,active);
      this._translateGraph(msg,false,active);

      this.setState({ schemaViewerActive : active }, () => {
        this._fgAdjustCharge (this.state.charge);
        this._updateDimensions();
      });
      // this.setState({},()=>this._findTool.current.updateResults()); // old find tool
    });
  }
  /**
   * Highlight or unhighlight a given node or link type
   *
   * @param {String|String[]} - Type/Types which are highlighted or unhighlighted
   * @param {false|String|Number} highlight - Determines the new color.
   *    If false, it will be the original color.
   *    Otherwise, it must be a valid first argument for the Three.Color constructor.
   * @param {Boolean} [outline=true] - (NOT IMPLEMENTED) If true, the color will be an outline around the node. If false, it will directly modify the color of the node.
   *    NOTE: Does nothing currently. Only affects nodes.
   * @param {Object} [fade] - Determines the properties of the fading.
   *    NOTE: Opacity does not work with fade. The elements will retain their inital opacities.
   * @param {Number} [fade.duration=0] - If duration is greater than 0, it will take `duration` number of seconds for the old color to fade into the new color.
   * @param {Number} [fade.offset=0] - Amount of time it takes before the fade begins.
   * @param {String} [property="type"] - Overrides `type` as the default property (e.g. `id` will highlight based on the `id` property).
   *
   * @private
   *
   * @returns {Promise} - (Only when using fade) Returns promise that resolves when the fade completes.
   */
  _highlightType (type, highlight, outline, fade, property) {
    if (typeof fade === "undefined") fade = {duration:0,offset:0};
    if (typeof property === "undefined") property = "type";
    if (!Array.isArray(type)) {
      type = [type];
    }

    if (typeof outline !== "boolean") {
      outline = true;
    }

    let highlightElements = [];

    // CLone all materials that have been reused by the react-force-graph so that we can modify individual elements
    let materialCache = [];

    let graph = this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schema : this.state.graph;
    type.forEach(highlightType => {
      for (let graphElementType of ["nodes","links"]) {
        let elements = graph[graphElementType];
        for (let i=0;i<elements.length;i++) {
          let element = elements[i];
          let types = element[property];

          if (highlight !== false) {
            if (this.state.visMode !== "2D") {
              let obj = (element.__lineObj || element.__threeObj); //THREE.Mesh;
              if (obj === undefined) continue;
              let material = obj.material;
              if (materialCache.includes(material.uuid)) {
                obj.material = obj.material.clone();
                materialCache.push(obj.material.uuid);
              }
              else {
                materialCache.push(material.uuid);
              }
            }
          }

          if (!Array.isArray(types)) types = [types];
          if (types.includes(highlightType)) {
            highlightElements.push({
              graphElementType: graphElementType,
              element: element
            });
          }
        };
      }
    });
    return this.__highlightTypes(highlightElements, type, highlight, outline, fade);
  }
  /**
   * Set the state of the connection examiner tool. Resets the selected node when toggled.
   *
   * @param {boolean} bool - Sets whether the tool is becoming active or not
   *
   * @private
   */
  _setConnectionExaminerActive(bool) {
    this.setState({ connectionExaminer: bool });
  }
  /**
   * Set the state of the highlight types tool and let it clean up when it is turned off
   *
   * @param {boolean} bool - Sets whether or not the highlight types tool is active
   *
   * @private
   */
  _setHighlightTypesMode (bool) {
    if (!bool && this.state.highlightedType.length > 0) {
      this._highlightType(this.state.highlightedType, false);
    }
    this.setState({ highlightTypes : bool, highlightedType : [] });
  }
  /**
   * Set if the select mode tool is active.
   *
   * @param {boolean} select - Sets if active or not.
   * @private
   */
  _setSelectMode (select) {
    this.setState ({
      selectMode: select,
    });
  }
  /**
   * Set if the navigation mode tool is active.
   *
   * @param {boolean} navigate - Sets if active or not.
   * @private
   */
  _setNavMode (navigate) {
    this.setState ({
      navigateMode: navigate,
      selectedLink: {}
    });
  }
  /**
   * Render interface for depth analysis of an answer.
   *
   * @param {message} - A KGS message object to analyze.
   * @private
   */
  _analyzeAnswer (message) {
    // If we've already created the answer, use that.
    const displayAnswerViewer = (url) => {
      this._setActiveModal("AnswerViewerModal");
      this._answerViewer.current.handleShow (url);
    }
    if (this.state.record && this.state.record.data && this.state.record.data.hasOwnProperty ("viewURL")) {
      var url = this.state.record.data.viewURL;
      console.log ('--cached-view-url: ' + url);
      displayAnswerViewer(url);
      //var win = window.open (url, 'answerViewer');
      //win.focus ();
      return;
    }
    // Get it.
    fetch(this.robokop_url + '/api/simple/view/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (message)
    }).then(res => res.text())
      .then(
        (result) => {
          /* Convert the knowledge graph to a renderable form. */
          result = result.replace(/"/g, '');
          var url = this.robokop_url + "/simple/view/" + result;
          console.log ('--new ' + url);
          message.viewURL = url;
          message.knowledge_map = message.answers;
          delete message.answers;
          this._cacheWrite (message);
          displayAnswerViewer(url);
          //var win = window.open (message.viewURL, 'answerViewer');
          //win.focus ();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      );
  }
  /**
   * Abort a TranQL query. May be called even if a query isn't active, just in case.
   *
   * @private
   */
  _abortQuery () {
    this._queryController.abort();
    if (this.state.loading) this.setState({ loading : false });
  }
  /**
   * Execute a TranQL query.
   * Checks for the requested object in cache.
   * If not present, executes query and receives a KGS message object.
   *    Passes the message to the rendering pipeline.
   *    Writes the messge to cache.
   *
   * @private
   */
  _executeQuery () {
    // If a fetch is currently active, make sure to abort it.
    // This is a safeguard so that widgets or interfaces can call this method without having to cancel the query first.
    this._abortQuery();

    console.log ("--query: ", this.state.code);
    localStorage.setItem ('code', this.state.code);
    // Clear the visualization so it's obvious that data from the last query is gone
    // and we're fetching new data for the current query.
    this.setState ({
      message: null,
      graph : {
        nodes : [],
        links : [],

        hiddenTypes: {
          "nodes": [],
          "links": []
        },
        typeMappings: {}
      },
      dataSources: [],
      reasonerSources: [],
      loading : true
    });

    this.setState({},()=>console.log(this.state.graph));
    // Automatically switch from schema to graph view when query is run
    this._setSchemaViewerActive (false);
    //localStorage.setItem ("code", JSON.stringify (this.state.code));
    // First check if it's in the cache.
    //var cachePromise = this._cache.read (this.state.code);
    var cachePromise = this.state.useCache ? this._cache.read ('cache', 'key', this.state.code) : Promise.resolve ([]);
    cachePromise.then (
      function success (result) {
        if (result.length > 0) {
          // Translate the knowledge graph given current settings.
          this._configureMessage (result[0].data);
          this._translateGraph (result[0].data);
          this.setState({ loading : false });
          // If the query is run through the cache, then update it.
          // this._cache.read doesn't allow us to modify it, because
          // it converts the Dexie results into an array. Could probably?
          // also use cacheWrite before modifying the cache result above,
          // but this method is less prone to mysterious breakage.
          this._cache.db["cache"].where("key").equals(result[0].key).modify({ timestamp : Date.now() });
        } else {
          // We didn't find it in the cache. Run the query.
          // Create a new controller so that the query may be aborted if desired. Abort the old one just in case.
          this._queryController.abort();
          this._queryController = new window.AbortController();
          const args = {
            'dynamic_id_resolution' : this.state.dynamicIdResolution,
            'asynchronous' : true
          };
          fetch(this.tranqlURL + '/tranql/query?'+qs.stringify(args), {
            signal: this._queryController.signal,
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'text/plain',
            },
            body: this.state.code
          }).then(res => res.text())
            .then(
              (result) => {
                result = JSON5.parse(result);

                if (result.errors) {
                  this._handleMessageDialog (result.status, result.errors);
                  console.log ("--error:", result.errors);
                  this.setState ({
                    loading : false,
                    error : result.errors
                  });
                }
                if (result.status !== "Error") {
                  // If there was no error or if it's just a warning continue on as if nothing happened.
                  // Maybe remove caching on results with warnings?
                  //                if (!result.message || result.status === "Warning") {
                    /* Convert the knowledge graph to a renderable form. */
                    if (result.answers) {
                      // answers is not kgs 0.9 compliant. ... longer story.
                      delete result.answers;
                    }
                    this._configureMessage (result,false,false);
                    this._translateGraph (result,false,false);
                    this._cacheWrite (result);
                    this._setSchemaViewerActive(false);
                    this.setState({ loading : false });
                }
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                // If the error is because the fetch was aborted, we don't want to display a message.
                if (error.name !== "AbortError") {
                  this._handleMessageDialog ("Response Parsing Error", error.message, error.details);
                  this.setState ({
                    loading : false,
                    error : error
                  });
                }
              }
            );
        }
      }.bind(this),
      function error (result) {
        this._handleMessageDialog (result.status, result.message, result.details);
        //console.log ("-- error", result);
      }.bind(this));
  }
  _cacheFormat (message) {
    let {graph, hiddenTypes, ...cacheMessage} = message;

    var obj = {
      'key' : this.state.code,
      'data' : cacheMessage,
      'timestamp' : Date.now()
    };
    // if (this.state.record) {
    //   obj.id = this.state.record.id;
    // }
    return obj;
  }
  _cacheWrite (message) {
    //this._cache.write (this.state.code, result);
    // Clone message without bloat for storing inside the cache
    let obj = JSON.parse(JSON.stringify(this._cacheFormat(message)));

    // We don't want to cache any nodes from the browse node tool.
    obj.data.knowledge_graph.nodes = obj.data.knowledge_graph.nodes.filter((node) => {
      return !node.reasoner.includes('browse_nodes');
    });

    this._cache
      .write ('cache', obj)
      .then ((result) => {
        this._cache.get ('cache', result,
                         (result) => {
                           this.setState ({
                             record : result
                           });
                           this._updateCacheViewer ();
                         });
        }).catch ((error) => {
          this._handleMessageDialog ('Cache Error', error.message, error.stack);
        });
  }
  _configureMessageLogic (message) {
    var nodeDegrees = message.knowledge_graph.nodes.map ((node, index) => {
      return message.knowledge_graph.edges.reduce ((acc, cur) => {
        return cur.target_id === node.id ? acc + 1 : acc;
      }, 1);
    }).sort ((a,b) => a - b).reverse();
    // Configure data sources
    var dataSources = message.knowledge_graph.edges.flatMap ((edge, index) => {
      return edge.source_database;
    }).unique ().flatMap ((source, index) => {
      var result = [];
      if (typeof source == "string") {
        result.push ({ checked : true, label : source });
      } else if (Array.isArray(source)) {
        result = source.map ((s) => {
          return { checked : true, label : s };
        });
      }
      return result;
    });
    var reasonerSources = message.knowledge_graph.edges.flatMap ((edge, index) => {
      return edge.reasoner;
    }).unique ().flatMap ((reasoner, index) => {
      var result = [];
      if (typeof reasoner == "string") {
        result.push ({ checked : true, label : reasoner });
      } else if (Array.isArray(reasoner)) {
        result = reasoner.map ((r) => {
          return { checked : true, label : r };
        });
      }
      return result;
    });
    return [dataSources,nodeDegrees,reasonerSources];
  }
  /**
   * When noSetMessageRecord is false, it will not set the message and record on the app's state
   *
   */
  _configureMessage (message,noSetMessageRecord=false,schema) {
    if (message) {
      if (typeof schema === "undefined") schema = this.state.schemaViewerActive && this.state.schemaViewerEnabled;
      const isSchema = schema;

      if (!message.hasOwnProperty('knowledge_graph')) {
        message.knowledge_graph = {nodes:[],edges:[]};
      }
      // Configure node degree range.
      let [dataSources, nodeDegrees, reasonerSources] = this._configureMessageLogic(message);
      let cond = {};
      if (!noSetMessageRecord) {
        if (isSchema) {
          cond.schemaMessage = message;
        }
        else {
          cond.message = message;
          cond.record = this._cacheFormat(message);
        }
      }
      this.setState({
        dataSources : dataSources,
        reasonerSources : reasonerSources,
        nodeDegreeMax : nodeDegrees[0],
        nodeDegreeRange : [ 0, nodeDegrees[0] ],
        ...cond
      });
    }
  }

  /**
   * Convert a string from TRAPI 1.0 category to TRAPI 0.9 type.
   *
   * @param {String} value - String to convert.
   * @private
   */
   _categoryToType(value) {
    if (value) {
      const blStr = "biolink:";
      var typeVal = value.substring(blStr.length, value.length);
      return typeVal.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
             .map(x => x.toLowerCase())
             .join('_');
    }
  }

  /**
   * Render the graph via the rendering pipeline.
   *
   * @param {Object} message - A KGS message object.
   * @param {Boolean} [noRenderChain=false] - The message will not be handled by the render chain when true
   * @param {Boolean} [schema=undefined] - If the graph is the schema.
   * @private
   */
  _translateGraph (message,noRenderChain,schema) {
    if(message !== undefined && message !== null &&
      message.message !== undefined && message.message !== null &&
      message.message.knowledge_graph !== undefined && message.message.knowledge_graph !== null) {

      // Downcast message.nodes and message.links from TRAPI 1.0 to TRAPI 0.9
      let newNodeArray = [];
      for (const [id, node] of Object.entries(message.message.knowledge_graph.nodes)) {
        node["id"] = id;
        if (node["category"] !== undefined && node["category"] !== null) {
          const catArr = node["category"];
          // console.log(`CATEGORY=[${catArr}]`);
          let typeArr = catArr.map(this._categoryToType);
          node["type"] = typeArr;
        }
        if (node.attributes !== undefined ) {
          node.attributes.forEach((attr) => {
            const key = attr["name"];
            const val = attr["value"];
            node[key] = val;
          });
          delete node.attributes;
        }
        newNodeArray.push(node);
      };
      message.knowledge_graph.nodes = newNodeArray;

      let newLinkArray = [];
      for (const [id, link] of Object.entries(message.message.knowledge_graph.edges)) {
        link["source_id"] = link["subject"];
        link["target_id"] = link["object"];
        if (link["predicate"] !== undefined && link["predicate"] !== null) {
          const blStr = "biolink:";
          const predStr = link["predicate"];
          const typeVal = predStr.substring(blStr.length, predStr.length);
          link["type"] = typeVal;
        }
        if (link.attributes !== undefined) {
          link.attributes.forEach((attr) => {
            const key = attr["name"];
            const val = attr["value"];
            link[key] = val;
          });
          delete link.attributes;
        }
        newLinkArray.push(link);
      };
      message.knowledge_graph.edges = newLinkArray;
    };
    this._configureMessage (message,false,schema);
    this.setState({},() => {
      if (typeof noRenderChain === "undefined") noRenderChain = false;
      if (typeof schema === "undefined") schema = this.state.schemaViewerActive && this.state.schemaViewerEnabled;
      const isSchema = schema;
      message = message ? message : (isSchema ? this.state.schemaMessage : this.state.message);
      if (message) {
        if (!noRenderChain) {
          isSchema ? this._schemaRenderChain.handle (message, this.state) : this._renderChain.handle (message, this.state);
        }
        var worthShowing =
        !(
          message.knowledge_graph === undefined || (
            (
              message.knowledge_graph.nodes === undefined ||
              message.knowledge_graph.edges === undefined
            ) || (
              message.knowledge_graph.nodes.length +
              message.knowledge_graph.edges.length === 0
            )
          )
        );
        if (!worthShowing) {
          // We'll display a warning to make sure that the user knows that the query worked but had no results.
          NotificationManager.warning('The query returned no results', 'Warning', 4000);
        }
        let graphStateObj = isSchema ? { schema : message.graph } : { graph : message.graph };
        // this.setState(graphStateObj, () => this._findTool.current.updateResults()); // old find tool
        this.setState(graphStateObj);
      }
    });
  }
  /**
   * Fetch the schema data for visualization
   *
   * @private
   */
   _getSchema () {
     this.schemaPromise = new Promise((resolveSchemaPromise) => {
     this.setState(p => ({}),() => {
       var cachePromise = this.state.useCache ? this._cache.get ('schema', 0) : Promise.resolve (undefined);
       cachePromise.then (
         function success (result) {
           if (result !== undefined) {
             console.log("Got schema from cache");
             let msg = result.data;
             console.log(JSON.stringify(msg));
             const prevMsg = this.state.message;
             const prevRecord = this.state.record;
             this._configureMessage(msg,false,true);
             this._translateGraph(msg,false,true);
             this.setState(() => ({ schemaLoaded : true }));
             resolveSchemaPromise();
             this.state.schemaViewerActive && this._setSchemaViewerActive(true);
           } else {
             fetch(this.tranqlURL + '/tranql/schema', {
               method: "GET"
             })
             .then((res) => res.json())
             .then(
               (result) => {
                 if (result.errors) {
                   this._handleMessageDialog (result.status, result.errors);
                   console.log ("--error: " + result.errors);
                 }
                 if (result.answers) {
                   delete result.answers;
                 }

                 console.log("Fetched schema:", result);

                 const prevMsg = this.state.message;
                 const prevRecord = this.state.record;
                 this._configureMessage(result.schema,false,true);
                 this._translateGraph(result.schema,false,true);
                 result.schema.graph.links.forEach((link) => {
                   // Since opacity is based on weights and the schema lacks weighting, set it back to the default opacity.
                   delete link.linkOpacity;
                 });
                 // Reset the state to have this updated opacity
                 this.setState(() => ({ schemaLoaded : true, schema : result.schema.graph, schemaMessage : result.schema }));
                 resolveSchemaPromise();
                 this.state.schemaViewerActive && this._setSchemaViewerActive(true);

                 let { graph, hiddenTypes, ...schemaCachedMessage } = result.schema;

                 this._cache.write ('schema', {
                   'id' : 0,
                   'data' : schemaCachedMessage
                 });
               }
             );
           }
         }.bind(this),
         function error (result) {
           this._handleMessageDialog (result.status, result.message, result.details);
         }.bind(this));
     });
     });
   }
  /**
   * Get the configuration for this deployment.
   *
   * @private
   */
  _getConfiguration () {
    fetch(this.tranqlURL + '/tranql/configuration', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            configuration : result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  /**
   * Query name-resolution-sri to resolve ontological identifiers from concept names.
   * For example, go from "asthma" -> ["MONDO:XXX", "MONDO:YYY", "DOID:ZZZ"]
   * 
   * As a side-effect, it caches these values in `state.autocompleteResolvedIdentifiers`
   * for use in autocomplete tooltips.
   * 
   * @param {string} conceptValue - The value of the concept, e.g., "asthma" or "asth". If this param is a less than two characters, the method will return an empty object.
   * @param {string} conceptType - The concept itself, e.g., "disease" or "chemical_substance"
   * @param {number} [resultLimit=50] - Limit the number of identifiers that will be returned from a concept value. The actual number of results returned by the method will be equal to or less than this after type filtratiion.
   * 
   * @throws {TypeError} Failure to fetch from APIs. Should be handled properly by caller.
   * @private
   */
  async _resolveIdentifiersFromConcept(conceptValue, conceptType, resultLimit=50) {
    // Short strings are not well-supported by the name resolution API, so return no results.
    if (conceptValue.length <= 2) return {};
    const args = {
      limit: resultLimit,
      // offset: resultOffset,
      string: conceptValue
    };
    const res = await fetch(this.nameResolutionURL + '/lookup?' + qs.stringify(args), {
      method: "POST"
    });
    /*
    interface NameResolutions {
      [curie: string]: string[]
    }
    Where the strings in the array are names, i.e. {'MONDO:XXX': ["Asthma", "Asthmas", "Bronchial asthma", ...], ... }
    */
    const nameResolutions = await res.json();
    // Now that we have name resolutions, we need to go through and only take the ones that are the same type as conceptType.
    // For example, the conceptValue "a" could yield both "Asthma" (disease) and "Atrazine" (chemical_substance), but we only want diseases.
    const filtered = {};
    // The qs library does not seem to support the same type of qs list serialization as is expected by node norm, but URLSearchParams does.
    const nodeNormArgs = new URLSearchParams();
    Object.keys(nameResolutions).forEach((curie) => nodeNormArgs.append("curie", curie));
    // Not entirely sure what this argument does, but it sounds like it merges results which we might not want. Probably inconsequential either way.
    nodeNormArgs.append("conflate", false);
    const nodeNormResults = await (await fetch(
      this.nodeNormalizationURL + '/get_normalized_nodes?' + nodeNormArgs.toString()
    )).json();
    for (let i=0; i<Object.keys(nameResolutions).length; i++) {
      const curie = Object.keys(nameResolutions)[i];
      // nodeNormResults will return an object with only one key (`curie`) since we only query with one curie.
      const result = nodeNormResults[curie];
      if (result !== null) {
        // The node normalization API doesn't support all curies that can be returned by the name resolution API.
        // Unsupported curies will return a null object.
        const isSameType = result["type"].some(type => this._categoryToType(type) === conceptType);
        const includedCuries = Object.keys(filtered);
        const includedEquivalentIdentifiers = result["equivalent_identifiers"].filter(({ identifier }) => includedCuries.includes(identifier));
        if (includedEquivalentIdentifiers.length > 0) {
          includedEquivalentIdentifiers.forEach((equivIdent) => {
          });
        }
        else if (isSameType) filtered[curie] = {
          // Node normalization returns its "preferred" label for the curie
          preferredLabel: result["id"]["label"],
          // Node normalization returns its "preferred" curie for the term
          preferredCurie: result["id"]["identifier"],
          // Name resolutions also returns a whole bunch of synonyms for the same curie
          otherLabels: nameResolutions[curie],
          equivalentIdentifiers: result["equivalent_identifiers"]
        };
      }
    }
    this._updateResolvedIdentifiers(filtered);
    return filtered;
  }
  /**
   * Very similar to `_resolveIdentifiersFromConcept`, except that is designed for use with a curie instead of a name & biolink type.
   * This is made to be used so that whenever a user types a curie directly into the query, it can automatically resolve the English name for them.
   * 
   * @param {string} curie - A curie, e.g. "MONDO:0005240"
   * @param {boolean=false} ignoreCache - When false, this method returns previously cached results for `curie`.
   * 
   */
  async _resolveIdentifiersFromCurie(curie, ignoreCache=false) {
    /** If caching is enabled and the curie results are cached, return the cached results */
    if (!ignoreCache && this._autocompleteResolvedIdentifiers[curie]) {
      const results = {};
      results[curie] = this._autocompleteResolvedIdentifiers[curie];
      return results;
    }

    const nodeNormResult = await (await fetch(
      this.nodeNormalizationURL + '/get_normalized_nodes?' + qs.stringify({ curie })
    )).json();
    const result = nodeNormResult[curie];

    const results = {};
    if (result !== null) {
      results[curie] = {
        preferredLabel: result["id"]["label"],
        preferredCurie: result["id"]["identifier"],
        // Not really necessary to query name-resolution for this method's use case.
        otherLabels: [result["id"]["label"]],
        equivalentIdentifiers: result["equivalent_identifiers"]
      };
    }
    this._updateResolvedIdentifiers(results);
    return results;
  }
  _updateResolvedIdentifiers(results) {
    // Add results to the cache.
    this._autocompleteResolvedIdentifiers = { ...results, ...this._autocompleteResolvedIdentifiers };
    // Update codemirror tooltips with new cached results.
    this._codemirror.state.resolvedIdentifiers = this._autocompleteResolvedIdentifiers;
  }
  /**
   * Get the valid options in the `from` clause and their respective `reasoner` values
   *
   * @private
   */
  async _getReasonerURLs () {
    try {
      const res = await fetch(this.tranqlURL + '/tranql/reasonerURLs', {
        method: "GET",
      })
      const reasonerURLs = await res.json();

      return reasonerURLs;
    } catch {
      // Fetch failed.
      return [];
    }
  }
  /**
   * Get the concept model and stores as state.
   *
   * @private
   */
  _getModelConcepts () {
    fetch(this.tranqlURL + '/tranql/model/concepts', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        'query' : ''
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            modelConcepts: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  /**
   * Get the concept model relations and stores as state.
   */
  _getModelRelations () {
    fetch(this.tranqlURL + '/tranql/model/relations', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        'query' : ''
      })
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            modelRelations: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  /**
   * Handle a hover over a graph node
   *
   * @param {object} node - The node that is being hovered over in the graph
   * @param {object} prevNode - The node that was previously being hovered over in the graph
   *
   * @private
   */
  _handleNodeHover (node, prevNode) {
    if (this.state.highlightTypes) {
      let newType = [];
      if (prevNode !== null) {
        this._highlightType(prevNode.type, false);
      }
      if (node !== null) {
        this._highlightType(node.type, 0xff0000);
        newType = node.type;
      }
      this.setState({ highlightedType : newType });
    }
  }
  /**
   * Handle a hover over a graph link
   *
   * @param {object} link - The link that is being hovered over in the graph
   * @param {object} prevLink - The link that was previously being hovered over in the graph
   *
   * @private
   */
  _handleLinkHover (link, prevLink) {
    if (this.state.highlightTypes) {
      let newType = [];
      // Eliminate overhead by not deselecting all the types if going to reselect them immediately after
      // If new link is null don't bother trying to check
      if (prevLink !== null && (link === null || JSON.stringify(prevLink.type) !== JSON.stringify(link.type))) {
        if (true || !(prevLink.source === link.target && prevLink.target === link.source) || (prevLink.source === link.source && prevLink.target === link.target)) {
          this._highlightType(prevLink.type, false);
        }
        // If the source and targets are synonymous don't unhighlight.
      }
      // Same goes for here but with the previous link
      // We still want to set newType though
      if (link !== null) {
        if (prevLink === null || JSON.stringify(prevLink.type) !== JSON.stringify(link.type)) {
          this._highlightType(link.type, 0xff0000);
        }
        newType = link.type;
      }
      this.setState({ highlightedType : newType });
    }
  }
  /**
   * Handle a click on a graph link.
   *
   * @param {object} link - A link in the force directed graph visualization.
   * @param {boolean} [single=false] - If true, the method will only use the clicked link, rather than all links between the clicked link's source and target nodes.
   *    Only provided in non-force graph calls, such as when a link result in the table viewer is clicked.
   * @private
   */
  _handleLinkClick (link, single) {
    if (typeof single === "undefined") single = false;
    if (this.state.connectionExaminer) {
      this._linkExaminer.current.show(JSON.parse(JSON.stringify(link)), single);
    }
    else if (this.state.highlightTypes) {
      link !== null && this._updateGraphElementVisibility("links", link.type, true);
      this._displayAllHiddenNotification();
    }
    else if (link !== null &&
        this.state.selectedLink !== null &&
//        this.state.selectedLink.source !== link.source_id &&
//        this.state.selectedLink.target !== link.target_id &&
        this.state.selectMode)
    {
      const graph = this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schema : this.state.graph;
      const links = (single ? [link] : graph.links.filter((link_2) => {
        return (
          (link.origin.source_id === link_2.origin.source_id && link.origin.target_id === link_2.origin.target_id) ||
          (link.origin.source_id === link_2.origin.target_id && link.origin.target_id === link_2.origin.source_id)
        );
      })).map((link_2) => link_2.origin);
      this._openObjectViewer(JSON.parse(JSON.stringify(links)));
    }
  }
  _handleLinkRightClick (link) {
    if (this.state.highlightTypes && link !== null) {
      let linkType = Array.isArray(link.type) ? link.type : [link.type];
      let mappings;
      if (this.state.schemaViewerEnabled && this.state.schemaViewerActive) {
        mappings = this.state.schema.typeMappings.links;
      }
      else {
        mappings = this.state.graph.typeMappings.links;
      }
      if (mappings !== undefined) {
        let hideTypes = Object.keys(mappings).filter(t => !linkType.includes(t));
        this._updateGraphElementVisibility("links", hideTypes, true);
        this._displayAllHiddenNotification();
      }
    }
  }
  _handleNodeRightClick (node) {
    if (this.state.highlightTypes && node !== null) {
      let nodeType = Array.isArray(node.type) ? node.type : [node.type];
      let mappings;
      if (this.state.schemaViewerEnabled && this.state.schemaViewerActive) {
        mappings = this.state.schema.typeMappings.nodes;
      }
      else {
        mappings = this.state.graph.typeMappings.nodes;
      }
      if (mappings !== undefined) {
        let hideTypes = Object.keys(mappings).filter(t => !nodeType.includes(t));
        this._updateGraphElementVisibility("nodes", hideTypes, true);
        this._displayAllHiddenNotification();
      }
    }
    this.setState ({
      contextNode : node
    });
  }
  /**
   * Displays a notification indicating if all nodes or links have been hidden.
   */
  _displayAllHiddenNotification() {
    this.setState({}, () => {
      let graph = this.state.schemaViewerEnabled && this.state.schemaViewerActive ? this.state.schema : this.state.graph;
      // Mutually inclusive
      if (graph.nodes.length === 0 || graph.links.length === 0) {
        NotificationManager.warning('All nodes or links have been filtered', 'Warning', 3250);
      }
    });
  }
  _handleContextMenu (e) {
    e.preventDefault();
    contextMenu.show({
      id: this._contextMenuId,
      event: e,
      props: {
        foo: 'bar'
      }
    });
  }

  /**
   * Update graph size on split pane resize
   *
   * @private
   */
   _updateGraphSplitPaneResize () {
     this._updateGraphSize (this._graphSplitPane.current.pane1.offsetWidth,this._tableSplitPane.current.pane1.offsetHeight);
   }

 /**
  * Update graph size
  *
  * @param {Number} width - New width of the graph
  * @param {Number} height - New height of the graph
  * @private
  */
  _updateGraphSize (width, height) {
    const obj = {};
    if (typeof width !== "undefined") obj.graphWidth = width;
    if (typeof height !== "undefined") obj.graphHeight = height;
    this.setState (prevState => obj);
  }

  /**
   * Update fg when it is changed or rerendered
   *
   * @private
   */
  _updateFg () {
    if (this.fg) {
      // Performing actions such as dragging a node will reset fg.controls().enabled back to true automatically,
      // thus it's necessary to hook into the TrackballControls and make sure that they're immediately re-disabled.
      // *Currently disabled always.* 
      if (this.embedded && false) {
        const controls = this.fg.controls();
        controls.enabled = false;
        const _update = controls.update.bind(controls);
        controls.update = (...args) => {
          _update(...args);
          if (controls.enabled === true) controls.enabled = false;
        }
      }
    }
    // let graph = this.state.schemaViewerEnabled && this.state.schemaViewerActive ? this.state.schema : this.state.graph;
  }
  /**
   * Callback for when a legend button is right clicked
   *
   * @param {MouseEvent} e - The mouse event emited when the contextmenu event is fired (can be prevented),
   * @param {Boolean} active - If the button is active or not.
   * @param {String} type - The type that the button represents.
   *
   * @private
   */
  _legendButtonRightClick(e, active, type) {
    e.preventDefault();
    this._highlightType(type, 0xff0000, undefined, {duration:0, offset:0});
    setTimeout(()=>this._highlightType(type, false, undefined),2000);
  }
  /**
   * Handle Legend callback on toggling of element type
   *
   * @param {string} graphElementType - Graph element type ("nodes" or "links")
   * @param {string|string[]} type - Type of element (e.g. "gene" or "affects_response_to")
   * @param {boolean} hidden - Determines the new visibility of the elements
   *
   * @private
   */
  _updateGraphElementVisibility(graphElementType, type, hidden) {
    let graph = this.state.schemaViewerEnabled && this.state.schemaViewerActive ? this.state.schema : this.state.graph;
    if (!Array.isArray(type)) type = [type];

    if (hidden) {
      graph.hiddenTypes[graphElementType].push(...type);
    } else {
      type.forEach(t => {
        graph.hiddenTypes[graphElementType].splice(graph.hiddenTypes[graphElementType].indexOf(t),1);
      });
    }
    let newMessage;
    if (this.state.schemaViewerEnabled && this.state.schemaViewerActive) {
      newMessage = this.state.schemaMessage;
      this.setState({},() => {
        this._translateGraph(newMessage,false,true);
      });
      // console.log(message);
    }
    else {
      newMessage = this.state.message;
      this.setState({}, () => {
        this._translateGraph(newMessage,false,false);
      });
    }
  }
  /**
   * Handle a click on a graph node.
   *
   * @param {object} - A node in the force directed graph visualization.
   * @private
   */
  _handleNodeClick (node) {
    console.log (node);
    if (this.state.browseNodeActive) {
      this._browseNodeInterface.current.selectNode(node,this._OVERLAY_X,this._OVERLAY_Y);
    }
    else if (this.state.highlightTypes) {
      node !== null && this._updateGraphElementVisibility("nodes", node.type, true);
      this._displayAllHiddenNotification();
    }
    else if (this.state.navigateMode && this.state.visMode === '3D') {
      // Navigate camera to selected node.
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      this.fg.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      );
    } else if (this.state.selectMode && node !== null && node.id !== undefined && node.id !== null)
    {
      this._openObjectViewer(JSON.parse(JSON.stringify(node.origin)));
    }
  }
  /**
   * Adjust the charge force on the current graph. Lower charges result in more spread out graphs.
   *
   * @param {number} charge - The new charge of the force graph
   *
   * @private
   */
  _fgAdjustCharge (charge) {
    if (this.fg) {
      this.fg.d3Force ('charge').strength(charge);
      if (this.fg.refresh) this.fg.refresh ();
    }
  }
  /**
   * Render the Answer Viewer modal.
   * 
   */
  _renderAnswerViewer (customProps) {
    return (
      <GammaViewer data={this.state.message}
                   show={this.state.activeModal==="AnswerViewerModal"}
                   onHide={() => this._setActiveModal(null)}
                   {...customProps}/>
    );
  }
  /**
   * Renders the App banner/header element.
   * 
   */
  _renderBanner() {
    return (
      <header className="App-header" >
        <div id="headerContainer" className="no-select">
          <p style={{display:"inline-block",flex:1}}>TranQL</p>
          <Message activeModal={this.state.activeModal} ref={this._messageDialog} />
          <GridLoader
            css={spinnerStyleOverride}
            id={"spinner"}
            sizeUnit={"px"}
            size={6}
            color={'#2cbc12'}
            loading={this.state.loading && (this.state.schemaViewerActive || !this.state.schemaViewerEnabled)} />
          {
            !this.state.toolbarEnabled &&
              <Button id="navModeButton"
                      outline
                      color="primary" onClick={() => {this._setNavMode(!this.state.navigateMode); this._setSelectMode(!this.state.selectMode)}}>
                { this.state.navigateMode && (this.state.visMode === '3D' || this.state.visMode === '2D') ? "Navigate" : "Select" }
              </Button>
          }
          {
            !this.state.loading ? (
              <Button id="runButton"
                      outline
                      color="success" onClick={this._executeQuery}>
                Run
              </Button>
            ) : (
              <Button id="abortButton"
                      outline
                      color="danger" onClick={this._abortQuery}>
                Cancel
              </Button>
            )
          }
          <div id="appControlContainer" style={{display:(this.state.toolbarEnabled ? "none" : "")}}>
            <FaCog data-tip="Configure application settings" id="settings" className="App-control" onClick={() => this._setActiveModal("SettingsModal")} />
            <FaPlayCircle data-tip="Answer Navigator - see each answer, its graph structure, links, knowledge source and literature provenance" id="answerViewer" className="App-control" onClick={this._handleShowAnswerViewer} />
          </div>
        </div>
      </header>
    );
  }
  /**
   * Renders the codemirror query element.
   * 
   * @private
   */
  _renderCodemirror() {
    return (
      <CodeMirror editorDidMount={(editor)=>{this._codemirror = editor;}}
                  className="query-code"
                  value={this.state.code}
                  onBeforeChange={(editor, data, code) => this._updateCode(code)}
                  onChange={(editor) => {
                    if (this.embedded) this._debouncedExecuteQuery();
                  }}
                  options={this.state.codeMirrorOptions}
                  autoFocus={true} />
    );
  }
  /**
   * Render the force directed graph in either 2D or 3D rendering modes.
   * @param {Object} data - Data containing nodes and links that is used to render the force graph
   * @param {Object} props - Override default props used to render the graph.
   *
   * @private
   */
  _renderForceGraph (data, props) {
    var result = null;
    let defaultProps = {
      graphData:data,
      width:this.state.graphWidth,
      height:this.state.graphHeight,
      linkAutoColorBy:"type",
      nodeAutoColorBy:"type",
      linkDirectionalArrowLength: 3.5,
      linkDirectionalArrowRelPos: 1,
      d3AlphaDecay:0.2,
      strokeWidth:10,
      linkWidth:2,
      linkLabel: (l) => l.concatName,
      nodeRelSize:this.state.forceGraphOpts.nodeRelSize,
      enableNodeDrag:this.state.forceGraphOpts.enableNodeDrag,
      onLinkClick:(node) => this._handleLinkClick(node, false),
      onLinkHover:this._handleLinkHover,
      onLinkRightClick:this._handleLinkRightClick,
      onNodeRightClick:this._handleNodeRightClick,
      onNodeClick:this._handleNodeClick,
      onNodeHover:this._handleNodeHover,
    };
    props = {
      ...defaultProps,
      ...props
    };
    if (this.state.curvedLinks && (this.state.visMode === '3D' || this.state.visMode === 'VR')) {
      // 2D not supported
      props = {
        ...props,
        linkCurvature:"curvature",
        linkCurveRotation:"rotation",
        linkWidth:undefined
      };
    }
    if (this.state.directionalParticles) {
      props = {
        ...props,
        linkDirectionalParticles: 5,
        linkDirectionalParticleResolution: 1 // Helps with performance
      };
    }
    if (this.state.directionalArrows) {
      props = {
        ...props,
        linkDirectionalArrowLength: 10,
        linkDirectionalArrowColor: (link) => link.color,
        linkDirectionalArrowRelPos: 1
      };
    }

    // If the graph's nodes contain preexisting positional data we don't want to modify it
    // (Couldn't find any way to stop it from doing this without adverse consequences)
    // if (props.graphData.nodes.every(el=>el.hasOwnProperty('x')&&el.hasOwnProperty('z')&&el.hasOwnProperty('z')))
    if (this.state.visMode === '3D') {
      result = this._renderForceGraph3D (data, props);
    } else if (this.state.visMode === '2D') {
      result = this._renderForceGraph2D (data, props);
    } else if (this.state.visMode === 'VR') {
      props.graphData.links.forEach((l) => {
        if (typeof l.source !== "string") l.source = l.source.id;
        if (typeof l.target !== "string") l.target = l.target.id;
      });
      // props.graphData = { nodes : props.graphData.nodes, links : props.graphData.links };
      result = this._renderForceGraphVR (data, props);
    } else {
      throw new Error("Unrecognized rendering mode: " + this.state.visMode);
    }
    return result;
  }
  /**
   * Render in 3D
   *
   * @private
   * nodeAutoColorBy="type"
   */
  _renderForceGraph3D (data, props) {
    return <ForceGraph3D {...props} />
  }
  /**
   * Render in 3D
   *
   * @private
   */
  _renderForceGraph2D (data, props) {
      return <ForceGraph2D {...props} />
  }

  /**
   * Render in VR
   *
   * @private
   */
  _renderForceGraphVR (data, props) {
      return <ForceGraphVR {...props} />
  }
  _handleShowAnswerViewer () {
    if (this.state.message && this.state.message.message) {
      this._setActiveModal("AnswerViewerModal");
    }
  }
  /*
  _handleShowAnswerViewer () {
    console.log (this._answerViewer);
    if (this.state.message) {
      var message = this.state.message;

      const answers = message.hasOwnProperty('answers') ? message.answers : message.knowledge_map;
      const kg = JSON.parse(JSON.stringify(message.knowledge_graph));
      // The results from the browse node tool shouldn't be included. The most reliable method of filtering
      // them is to remove any nodes that aren't found in the knowledge_map, which is never modified.
      const km_node_ids = [];
      const km_edge_ids = [];
      message.knowledge_map.forEach((answer) => {
        const node_bindings = answer.node_bindings;
        const edge_bindings = answer.edge_bindings;
        // Iterate over each binding_type ("node_bindings" and "edge_bindings")
        Object.keys(answer).forEach((binding_type) => {
          const bindings = answer[binding_type];
          // Iterate over the values (knowledge_graph ids) of the binding.
          // The keys are the question_graph ids which we don't care about.
          Object.values(bindings).forEach((kg_id) => {
            // If the id is an array we need to iterate over each id inside of it.
            (Array.isArray(kg_id) ? kg_id : [kg_id]).forEach((id) => {
              // Make sure that we place the ids in the correct array.
              (binding_type === "node_bindings" ? km_node_ids : km_edge_ids).push(id);
            });
          });
        });
      });
      // Filter out any nodes and egdes whose ids aren't present in the knowledge map, and are therefore from the browse node tool.
      kg.nodes = kg.nodes.filter((node) => km_node_ids.includes(node.id));
      kg.edges = kg.edges.filter((edge) => km_edge_ids.includes(edge.id));
      this._analyzeAnswer({
        "question_graph"  : message.question_graph,
        "knowledge_graph" : kg,
        "answers"         : answers
      });
    }
  }
  */
  /**
   * Handles error messages
   *
   * @param {String} title - Title of the modal (e.g. "Error" or "Warning")
   * @param {Object[]|String} - Either an array of objects containing the properties "message" and "details" or a string for the message of a single error.
   * @param {undefined|String} - If the `message` argument is a string, this should be a string for the details of a single error. Otherwise, it must be left undefined.
   *
   * @private
   */
  _handleMessageDialog (title, message, details) {
    if (!this._messageDialog.current) return;
    if (!Array.isArray(message)) {
      message = [{
        message: message,
        details: details
      }];
    }
    else if (details !== undefined) {
      // Is array and details is defined (details should be in objects within message array)
      throw new Error(`
        Invalid arguments for _handleMessageDialog, message must be a string for details to be defined.
        Otherwise, message should be an array of objects containing the properties "message" and "details".`);
    }

    this._setActiveModal("ErrorModal");
    this._messageDialog.current.handleShow (title, message, this._setActiveModal);
  }
  /**
   * Handle updated settings from the modal settings dialog.
   *
   * @param {object} - An update event. Its currentTarget element designates the selected component.
   * @private
   */
  _handleUpdateSettings (e) {
    // We don't want settings to be modified when the app is embedded.
    if (this.embedded) return;

    var targetName = e.currentTarget.name;
    console.log ("--update settings: " + targetName);
    if (targetName === 'dynamicIdResolution') {
      this.setState({ dynamicIdResolution : e.currentTarget.checked });
      localStorage.setItem (targetName, JSON.stringify (e.currentTarget.checked));
    } else if (targetName === 'enableNodeDrag') {
      const forceGraphOpts = this.state.forceGraphOpts;
      forceGraphOpts.enableNodeDrag = e.currentTarget.checked;
      this.setState({ forceGraphOpts });
      localStorage.setItem('forceGraphOpts', JSON.stringify (forceGraphOpts));
      if (this.fg.refresh) this.fg.refresh();
    } else if (targetName === 'useToolCursor') {
      this.setState ({ useToolCursor : e.currentTarget.checked });
      localStorage.setItem (targetName, JSON.stringify (e.currentTarget.checked));
      if (!e.currentTarget.checked) {
        // this._toolbar.current.activeTool.revokeCursor();
      }
      else {
        // this._toolbar.current.activeTool.addCursor();
      }
    } else if (targetName === 'useCache') {
      // Specifies if the cache should be engaged or not.
      var useCache = e.currentTarget.checked;
      console.log (useCache);
      this.setState ({ useCache : useCache });
      localStorage.setItem (targetName, JSON.stringify (useCache));
    } else if (targetName === 'visMode') {
      // Toggle between 2D and 3D visualizations.
      this.setState ({ visMode : e.currentTarget.value }, () => {
        this._fgAdjustCharge (this.state.charge);
      });
      localStorage.setItem (targetName, JSON.stringify(e.currentTarget.value));
    } else if (targetName === 'colorGraph') {
      var colorGraph = e.currentTarget.checked;
      this.setState ({ colorGraph : colorGraph });
      localStorage.setItem (targetName, JSON.stringify (colorGraph));
      this._translateGraph ();
    }
  }
  _toggleCheckbox(stateKey, index) {
    const checkboxes = this.state[stateKey];
    checkboxes[index].checked = !checkboxes[index].checked;
    const obj = {};
    obj[stateKey] = checkboxes;
    this.setState(obj);

    const schemaActive = this.state.schemaViewerActive && this.state.schemaViewerEnabled;
    const msg = schemaActive ? this.state.schemaMessage : this.state.message;

    this._translateGraph(msg,false,schemaActive);
  }
  /**
   *
   * @private
   */
  _onChargeChange (event)  {
    let value = event.target.value;
    this.setState({ charge : value });
    value !== "" && this._fgAdjustCharge (value);
    localStorage.setItem ("charge", JSON.stringify (value));
  }
  /**
   * Respond to changing range of link weights.
   *
   * @param {number} value - The new link weight range.
   * @private
   */
  _onLinkWeightRangeChange (value) {
    this.setState({ linkWeightRange : value});
    const schemaActive = this.state.schemaViewerActive && this.state.schemaViewerEnabled;
    localStorage.setItem ("linkWeightRange", JSON.stringify (value));
    this._translateGraph (undefined,false.schemaActive);
  }
  /**
   * Respond to changing the node degree range.
   *
   * @param {object} value - New range.
   * @private
   */
  _onNodeDegreeRangeChange (value) {
    this.setState({ nodeDegreeRange : value});
    const schemaActive = this.state.schemaViewerActive && this.state.schemaViewerEnabled;
    this._translateGraph (undefined,false,schemaActive);
    localStorage.setItem ("minNodeDegree", JSON.stringify (value));
  }
  /**
   * Respond to changing the value of legend display limit
   * @param {string} type - Type of element (either "nodes" or "links").
   * @param {string} value - The new legend display limit (parsed as a base 10 integer)
   * @private
   */
  _onLegendDisplayLimitChange (type, event) {
    let value = parseInt(event.target.value);
    // parseInt returns NaN for anything that is not successfully parsed (e.g "foo" or "")
    if (isNaN(value)) {
      // Could possibly change this to be the max of said type (i.e. if there are 100 nodes value is set to 100)
      value = 0;
    }
    let prop = this.state.schemaViewerActive && this.state.schemaViewerEnabled ? "schemaLegendRenderAmount" : "queryLegendRenderAmount";
    // Either this.state.schemaLegendRenderAmount or this.state.queryLegendRenderAmount
    let renderAmountObj = this.state[prop];
    // Either ...legendRenderAmount.nodes or ...legendRenderAmount.links = value
    renderAmountObj[type] = value;
    value !== "" && this.setState({ prop : renderAmountObj });
    localStorage.setItem(prop, JSON.stringify(renderAmountObj));
  }
  /**
   * Update the current graph with the new results from the browse node tool
   *
   * @private
   */
  _browseNodeResult (result) {
    const message = this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schemaMessage : this.state.message;

    message.knowledge_graph = result.knowledge_graph;

    this._configureMessage (message);
    this._translateGraph (message);
  }
  /**
   * Send graph message to backplane which annotates it and relays it back
   *
   * @private
   */
  _annotateGraph () {
    if (this.state.message === null) {
      console.log("Can't annotate message if graph isn't loaded");
      return;
    }
    let message = Object.assign({}, this.state.message);
    delete message.graph;
    delete message.hiddenTypes;
    /*
      Structure of Message object in schema is:
        type: object
        required:
          - question_graph
          - knowledge_graph
          - knowledge_maps
      So delete the useless information (graph is huge and contains a lot of data that slows the requests down)
    */
    this.setState({ loading : true });
    fetch(this.tranqlURL + '/tranql/annotate', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (message)
    }).then(res => res.json())
      .then(
        (result) => {
          if (result.errors) {
            this._handleMessageDialog (result.status, result.errors);
            console.log ("--error: " + result.errors);
            this.setState ({
              loading : false,
              error : result.errors
            });
          } else {
            for (let type in result.knowledge_graph) {
              result.knowledge_graph[type].forEach(newElem => {
                newElem.source_database = [];
              });
            }
            // for (let type in result.knowledge_graph) {
            //   result.knowledge_graph[type].forEach(newElem => {
            //     message.knowledge_graph[type].forEach(oldElem => {
            //       if (newElem.id === oldElem.id) {
            //         for (let prop in newElem) {
            //           oldElem[prop] = newElem[prop];
            //         }
            //       }
            //     });
            //   });
            // }
            this.setState({ loading : false });
            console.log("Annotated result:", result);
            console.log("Current message:", message);
            this._configureMessage (result,false,false);
            this._translateGraph (result,false,false);
            this._setSchemaViewerActive(false);
          }
        },
        (error) => {
          this.setState({
            error : error,
            loading : false
          });
        }
      );
  }
  _closeObjectViewer() {
    if (this.state.objectViewerEnabled && this._graphSplitPane.current) {
      let width = this._graphSplitPane.current.splitPane.offsetWidth;
      this._graphSplitPane.current.setState({ draggedSize : width, pane1Size : width , position : width });
      this._updateGraphSize(width);
      this.setState({ objectViewerSelection : null });
    }
  }
  /**
   * Opens the object viewer
   *
   * @param {Object} object - The object to display in the object viewer
   * @private
   */
  _openObjectViewer(object) {
    if (this.state.objectViewerEnabled) {
      const graphPortion = this.state.objectViewerSize;
      let width = this._graphSplitPane.current.splitPane.offsetWidth * graphPortion;
      // For some reason react won't assign the underlying DOM element to the ref when using a callback ref.
      // Should replace this if possible as it is an escape hatch and not recommended for use, but the recommended alternative won't work.
      let toolbar = ReactDOM.findDOMNode(this._toolbar.current);
      if (toolbar.offsetHeight === this._graphSplitPane.current.splitPane.clientHeight) {
        // If the height of the toolbar has not been resized to be smaller, adjust the width so that it does not appear incorrect.
        // (If the toolbar covers that entire part of the graph, it looks incorrect and the object viewer appears larger)
        width += toolbar.offsetWidth * graphPortion;
      }
      this._graphSplitPane.current.setState({ draggedSize : width, pane1Size : width , position : width });
      this._updateGraphSize(width);
      this.setState({ objectViewerSelection : object });
    }
  }
  /**
   * Closes the pane originally intended for just the table viewer
   *
   */
  _closeTableViewer() {
    let height = this._tableSplitPane.current.splitPane.offsetHeight;
    this._tableSplitPane.current.setState({ draggedSize : height, pane1Size : height, position : height });
    this._updateGraphSize(undefined,height);
    const { tableViewerComponents } = this.state;
    // Hide every component
    Object.keys(tableViewerComponents).forEach((compKey) => {
      tableViewerComponents[compKey] = false;
    });
    this.setState({ tableView : false, tableViewerComponents });
  }
  /**
   * Opens the pane originally intended for just the table viewer
   *
   * @param {String} shownComponent - Refers to a boolean key of `App->state` which manages the visibility of a component rendered within the table viewer.
   *                                   This key will be set to true.
   *
   * // NOTE: this entire thing is very messily written, especially the way that the state is handled--it could use a rewrite for
   *          readability, but this works for now.
   */
  _openTableViewer(shownComponent) {
    const screenPortion = this.state.tableViewerSize;
    let height = this._tableSplitPane.current.splitPane.offsetHeight * screenPortion;
    this._tableSplitPane.current.setState({ draggedSize : height, pane1Size : height, position : height });
    this._updateGraphSize(undefined,height);
    const { tableViewerComponents } = this.state;
    // Hide every component
    Object.keys(tableViewerComponents).forEach((compKey) => {
      tableViewerComponents[compKey] = false;
    });
    // Show `shownComponent`
    tableViewerComponents[shownComponent] = true;
    this.setState({ tableView : true, tableViewerComponents });
  }
  /**
   * Invoked on window resize
   *
   * @private
   */
  _updateDimensions() {
    if (!this._graphSplitPane.current) return;
    let prevWinWidth = this._graphSplitPane.current.state.prevWinWidth;
    let prevWinHeight = this._tableSplitPane.current.state.prevWinHeight;
    if (prevWinWidth === undefined) prevWinWidth = window.innerWidth;
    if (prevWinHeight === undefined) prevWinHeight = window.innerHeight;
    let width = this._graphSplitPane.current.pane1.offsetWidth + (window.innerWidth - prevWinWidth);
    let height = this._tableSplitPane.current.pane1.offsetHeight + (window.innerHeight - prevWinHeight);
    if (this.state.objectViewerEnabled) {
      // console.log(this._graphSplitPane.current.state.pane1Size);
      this._graphSplitPane.current.setState({ draggedSize : width, pane1Size : width , position : width });
    }
    if (this.state.tableView) {
      this._tableSplitPane.current.setState({ draggedSize : height, pane1Size : height, position : height });
    }
    this._updateGraphSize(width, height);
    // For some reason react won't assign the underlying DOM element to the ref when using a callback ref.
    // Should replace this if possible as it is an escape hatch and not recommended for use, but the recommended alternative won't work.
    this._graphSplitPane.current.setState({prevWinWidth:window.innerWidth});
    this._tableSplitPane.current.setState({prevWinHeight:window.innerHeight});
  }
  /**
   * Render the type bar chart modal
   *
   * @private
   */
  _renderTypeChart () {
    const renderAmount = 9;
    let graph = this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schema : this.state.graph;
    let mappings = Legend.sortMappings(graph.typeMappings, renderAmount, renderAmount);
    if (!mappings.hasOwnProperty('nodes')) mappings.nodes = [];
    if (!mappings.hasOwnProperty('links')) mappings.links = [];
    let data = (this.state.showTypeNodes ? mappings.nodes : mappings.links).map(elem => (
      {
        type: adjustTitle(elem.type),
        // A little confusing...
        "Filtered Quantity": elem.hasOwnProperty('actualQuantity') ? elem.actualQuantity : 0,
        "Actual Quantity": elem.quantity,
        color: elem.color,
        hidden: elem.hasOwnProperty('actualQuantity') ? false : true
      }
    ));
    return (
      <Modal show={this.state.activeModal==="TypeChartModal"}
             onHide={() => this._setActiveModal(null)}
             dialogClassName="type-chart">
        <Modal.Header closeButton>
          <Modal.Title id="typeChartTitle">
            {this.state.showTypeNodes ? 'Node' : 'Link'} Bar Graph
            <IoIosSwap id="swapBar" onClick={() => this.setState({ showTypeNodes: !this.state.showTypeNodes })}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                      barCategoryGap={10}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="type"
                     height={85}
                     interval={0}
                     tickMargin={0}
                     tick={(props) => {
                       const width = props.width/props.visibleTicksCount;
                       return (
                         <g transform={`translate(${props.x},${props.y})`}>
                           <switch>
                              {/* Translate x -50% of width to center it*/}
                              <foreignObject style={{transform:`translateX(-${width/2}px)`}} x={0} y={0} dy={16} width={width} height="100%">
                                <p style={{padding:"2px",fontSize:"14px",textAlign:"center"}} xmlns="http://www.w3.org/1999/xhtml">{props.payload.value}</p>
                              </foreignObject>
                            </switch>
                            {/*
                              props.payload.value.split(/((?:\w+\s+){1,5})/).map((block, i) => (
                                <text x={0} y={0} dy={16+(i*16)} textAnchor="end" fill="#666" font-size="14px" transform="rotate(-35)">
                                  {block}
                                </text>
                              ))
                            */}
                           </g>
                       );
                     }}
              />
              <YAxis />
              <ChartTooltip content={
                (props) => {
                  /*const newPayload = props.payload !== null && props.payload.length > 0
                    ? [
                        {
                          name: 'Filtered quantity',
                          value: props.payload[0].payload.filtered
                        },
                        ...props.payload
                      ]
                    : [

                      ];
                  */
                  const newPayload = props.payload;

                  const label = props.payload !== null && props.payload.length > 0
                    ? props.payload[0].payload.type + (props.payload[0].payload.hidden
                      ? " (hidden)"
                      : "")
                    : ""

                  return (<DefaultTooltipContent {...props} label={label} payload={newPayload}/>);
                }
              }
              />
              <Bar dataKey="Actual Quantity">
                {
                  data.map((entry, index) => {
                    let color = entry.color;
                    return <Cell key={index} fill={color} />
                  })
                }
              </Bar>
              <Bar dataKey="Filtered Quantity">
                {
                  data.map((entry, index) => {
                    let color = entry.color;
                    return <Cell key={index} fill={shadeColor(color,-20)} />
                  })
                }
              </Bar>
              {/*<Bar dataKey="Filtered Quantity" fill="#7fc1ff" />*/}
            </BarChart>
          </ResponsiveContainer>
        </Modal.Body>
      </Modal>
    );
  }
  /**
   * Sets the active modal
   *
   * @param {string|null} modalName - Sets activeModal to modalName, if null no modal is active.
   */
  _setActiveModal(modalName) {
    this.setState({ activeModal : modalName });
  }
  /**
   * Handles parameters from the query string
   *
   */
  _handleQueryString() {
    // `ignoreQueryPrefix` automatically truncates the leading question mark within a query string in order to prevent it from being interpreted as part of it
    const params = qs.parse(window.location.search, { ignoreQueryPrefix : true });

    /**
     * Parse params into vars:
     * - q|query
     * - embedded: full | (graph|simple|true|"") | (false|<any>)
     * - answer_viewer: (true|"") | (false|<any>) <- DISABLED
     * - use_last_view: (true|"") | (false|<any>)
     */
    const tranqlQuery = params.q || params.query;
    const {
      embed: embedded,
      use_last_view: useLastUsedView
      // answer_viewer: showAnswerViewer
    } = params;

    if (tranqlQuery !== undefined) {
      this._queryExecOnLoad = tranqlQuery;
    }
    // i.e. "?embed=true" or "?embed"
    if (embedded !== undefined && embedded !== null) {
      // Note that `this.embedded` is a derived property of embedMode (without a setter) so there is no need to set it here.
      switch (embedded.toLowerCase()) {
        case "full":
          this.embedMode = EmbedMode.FULL;
          break;
        case "graph":
        case "simple":
        case "true":
        case "":
          this.embedMode = EmbedMode.SIMPLE;
          break;
        case "false":
          break;
        default:
          console.error("Unknown embed type:", embedded);
          this.embedMode = EmbedMode.SIMPLE;
          break;
      }
      // Disable the cache when embedded
      this.setState({
        useCache : false
      });
      // Maintain localStorage under window.embeddedLocalStorage such that
      // the App can only use localStorage while embedded when explcitly intended.
      window.embeddedLocalStorage = window.localStorage;
      const _localStorage = window.localStorage;
      // localStorage is a property of window with a getter but no setter, so it has to be fully deleted before setting it to a new value.
      delete window.localStorage;
      // Create a skeleton version of localStorage, in which persistent methods are overwritten while preserving the full API.
      const skeletonStorage = Object.assign({
        setItem: () => {},
        removeItem: () => {},
        key: () => {},
        getItem: () => {},
        removeItem: () => {},
        length: 0
      }, _localStorage);
      // Create the new localStorage property with the skeleton storage.
      Object.defineProperty(window, "localStorage", {
        get: () => skeletonStorage
      });
    }
    // Note: this option is only intended for use within an embedded page, since it doesn't make much sense in a normal context.
    // Note2: *DISABLED*
    // this.setState({ showAnswerViewerOnLoad: showAnswerViewer === "true" || showAnswerViewer === "" });
    this.setState({ useLastUsedView: useLastUsedView === "true" || useLastUsedView === "" });
  }
  /**
   * Perform any necessary cleanup before being unmounted
   *
   * @private
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this._updateDimensionsFunc);
    Object.values(this._highlightTypeFadeIntervals).forEach((interval)=>clearInterval(interval));
    Object.values(this._highlightTypeFadeTimeouts).forEach((timeout)=>clearTimeout(timeout));

  }
  /**
   * Handle events that can only occur once the component is mounted.
   *
   * @private
   */
  componentDidMount() {
    // this._updateDimensionsFunc = debounce(this._updateDimensions, 100);
    this._updateDimensionsFunc = this._updateDimensions;
    window.addEventListener('resize', this._updateDimensionsFunc);

    // Handle query string parameters (mini-router implementation)
    // & hydrate state accordingly
    this._handleQueryString ();
    // Hydrate persistent state from local storage
    if (!this.embedded) {
      this._hydrateState ();
      // Make sure that the code loaded from localStorage goes through `_updateCode`
      this.setState({}, () => this._updateCode(this.state.code));
    }

    // Populate the cache viewer
    this._updateCacheViewer ();

    // Populate concepts and relations metadata.
    this._getModelConcepts ();
    this._getModelRelations ();

    // Fetch schema
    this._getSchema ();

    this._updateGraphSize(document.body.offsetWidth);

    if (this._queryExecOnLoad !== undefined) {
      // After initial loading is complete, execute the query specified in the URL's query string if there is one.
      this._updateCode(this._queryExecOnLoad);
      this.setState({}, () => {
        this._executeQuery();
      });
    }

    this.setState({}, () => {
      if (this.fg) {
        if (this.state.visMode === "2D") {
          // Loads too zoomed in. For some reason, if you set the first argument to `1`, it does nothing.
          this.fg.zoom(.99);
        }
      }
    });
    const updateDatabaseSize = () => {
      this._cache.getDatabaseSize().then((size) => {
        this.setState({ databaseSize : ' (' + formatBytes(size,1) + ')' });
      });
    }
    this._cache.db.on('changes',(changes) => {
      updateDatabaseSize();
    });
    updateDatabaseSize();
  }

  render() {
    // Render just the graph if the app is being embedded
    if (this.embedded) return <TranQLEmbedded embedMode={this.embedMode}
                                              useLastUsedView={this.state.useLastUsedView}
                                              graphLoading={this.state.loading}
                                              graph={this.state.graph}
                                              renderForceGraph={this._renderForceGraph}
                                              renderCodemirror={this._renderCodemirror}
                                              renderAnswerViewer={this._renderAnswerViewer}
                                              graphRefCallback={(el) => {this.fg = el; this._updateFg ()}}/>;
    // Render the app
    return (
      <div className="App" id="AppElement">
        <SettingsModal active={this.state.activeModal==="SettingsModal"}
                       onHide={() => this._setActiveModal(null)}
                       appState={this.state}

                       toggleCheckbox={this._toggleCheckbox}

                       handleUpdateSettings={this._handleUpdateSettings}
                       clearCache={this._clearCache}
                       onLinkWeightRangeChange={this._onLinkWeightRangeChange}
                       onNodeDegreeRangeChange={this._onNodeDegreeRangeChange}
                       onChargeChange={this._onChargeChange}
                       onLegendNodeLimitChange={(e) => (this._onLegendDisplayLimitChange('nodes',e))}
                       onLegendLinkLimitChange={(e) => (this._onLegendDisplayLimitChange('links',e))}/>
        {this._renderTypeChart ()}
        <HelpModal activeModal={this.state.activeModal} setActiveModal={this._setActiveModal}/>
        {this._toolbar.current && <ToolbarHelpModal activeModal={this.state.activeModal}
                          setActiveModal={this._setActiveModal}
                          buttons={this._toolbar.current._getButtons()}
                          tools={this._toolbar.current._getTools()}
                          />}
        <ImportExportModal activeModal={this.state.activeModal}
                           setActiveModal={this._setActiveModal}
                           record={this.state.record}
                           graph={this.state.graph}
                           code={this.state.code}
                           importGraph={(graph, options) => {
                             if (graph.hasOwnProperty('data') && graph.hasOwnProperty('key') && graph.data.hasOwnProperty('knowledge_graph')) {
                               this._setActiveModal(null); // hide import/export modal
                               this._setSchemaViewerActive(false);

                               this._updateCode(graph.key);
                               this.setState({}, () => {
                                 console.log(JSON.parse(JSON.stringify(graph)));
                                 // this._configureMessage(graph.data);

                                 let noRenderChain = false;
                                 // If it already has a graph (save state was set to true) we should parse it so that it retains its previous state
                                 if (graph.data.hasOwnProperty('graph')) {
                                   noRenderChain = true;
                                   graph.data.graph = GraphSerializer.parse(graph.data.graph);
                                 }
                                 this._configureMessage(graph.data,undefined,false);
                                 this._translateGraph(graph.data, noRenderChain,false);
                                 options.cacheGraph === true && this._cacheWrite(graph.data);
                               });

                             }
                             else {
                               this._handleMessageDialog("Graph Parsing Error", "The graph file is corrupted.", (
                                 <div>
                                   <p>Contains key: {graph.hasOwnProperty('key').toString()}</p>
                                   <p>Contains knowledge_graph: {graph.hasOwnProperty('knowledge_graph').toString()}</p>
                                   <p>Contains data: {graph.hasOwnProperty('data').toString()}</p>
                                   <div>Object: <pre style={{display:"inline"}}>{JSON.stringify(graph,undefined,2)}</pre></div>
                                 </div>
                               ));
                             }
                           }}/>
        <NotificationContainer/>
        <QueriesModal ref={this._exampleQueriesModal}
                      show={this.state.activeModal==="ExampleQueriesModal"}
                      setActiveModal={this._setActiveModal}
                      runButtonCallback={(code, e) => {
                        this._setActiveModal(null); // hide
                        this._updateCode(code);
                        this.setState({}, () => {
                          this._executeQuery();
                        });
                      }}
                      queries={this.state.exampleQueries}
                      title="Example queries"/>
        <QueriesModal ref={this._cachedQueriesModal}
                      id="cachedQueriesModal"
                      show={this.state.activeModal==="CachedQueriesModal"}
                      setActiveModal={this._setActiveModal}
                      runButtonCallback={(code, e) => {
                        this._setActiveModal(null); // hide
                        this._updateCode(code);
                        this.setState({}, () => {
                          this._executeQuery();
                        });
                      }}
                      queries={this.state.cachedQueries}
                      title={"Cached queries"+(!this.state.useCache?' (cache disabled)':'')}
                      tools={this.state.cachedQueriesModalTools}
                      emptyText=<div style={{fontSize:"17px"}}>You currently have no cached queries.</div>/>
        {/* <AnswerViewer show={true} ref={this._answerViewer} /> */}
        {this._renderAnswerViewer()}
        <ReactTooltip place="left"/>
        {this._renderBanner()}
        <div className="App-body">
          {
            this.state.showCodeMirror ?
              (
                <>
                  <IoIosArrowDropupCircle onClick={(e) => {
                    this.setState({ showCodeMirror : false });
                    localStorage.setItem('showCodeMirror', false);
                  }} className="editor-vis-control legend-vis-control"/>
                  {/*<HistoryViewer activeModal={this.state.activeModal}
                                 setActiveModal={this._setActiveModal}
                                 cache={this._cache}
                                 setCode={this._updateCode}/>*/}
                  {this._renderCodemirror()}
                </>
              ) :
              (
                <div className="editor Legend" data-closed={true}>
                <IoIosArrowDropdownCircle className="editor-vis-control legend-vis-control-open"
                onClick={(e) => {
                  this.setState({ showCodeMirror : true });
                  localStorage.setItem('showCodeMirror', true);
                }}
                color="rgba(40,40,40,1)"
                />
                </div>
              )
          }
          <Legend typeMappings={this.state.graph.typeMappings}
                  hiddenTypes={this.state.graph.hiddenTypes}
                  nodeTypeRenderAmount={this.state.queryLegendRenderAmount.nodes}
                  linkTypeRenderAmount={this.state.queryLegendRenderAmount.links}
                  callback={this._updateGraphElementVisibility}
                  onContextMenu={this._legendButtonRightClick}
                  render={!this.state.schemaViewerActive || !this.state.schemaViewerEnabled}/>
          <Legend typeMappings={this.state.schema.typeMappings}
                  hiddenTypes={this.state.schema.hiddenTypes}
                  nodeTypeRenderAmount={this.state.schemaLegendRenderAmount.nodes}
                  linkTypeRenderAmount={this.state.schemaLegendRenderAmount.links}
                  callback={this._updateGraphElementVisibility}
                  onContextMenu={this._legendButtonRightClick}
                  render={this.state.schemaViewerActive && this.state.schemaViewerEnabled}/>
          <div id="graph"></div>
          <SplitPane split="horizontal"
                     defaultSize={this.state.graphHeight}
                     allowResize={this.state.tableView}
                     minSize={0}
                     maxSize={window.innerHeight - (this.state.tableView ? 200 : 0)}
                     style={{backgroundColor:"white",position:"initial",height:"100vh"}}
                     pane2ClassName="tableViewPane"
                     ref={this._tableSplitPane}
                     onDragFinished={(height) => this._updateGraphSplitPaneResize()}>
            <div id="viewContainer">
              {
                /* Don't bother rendering split pane if the object viewer isn't enabled. Causes resize issues. */
                /* maxSize property applies max-width to the object viewer pane when it's active. Change second ternary statement to the desired min width of the object viewer */
                <SplitPane split="vertical"
                           defaultSize={this.state.graphWidth}
                           minSize={0}
                           allowResize={this.state.objectViewerEnabled && (this.state.objectViewerSelection !== null)}
                           maxSize={
                             document.body.clientWidth-
                              (
                                this.state.objectViewerEnabled && (
                                  this.state.objectViewerEnabled && (
                                    this.state.objectViewerSelection === null
                                  )
                                ) ? 0 : 200
                              )
                           }
                           style={{backgroundColor:"black",position:"initial"}}
                           pane2Style={{overflowY:"auto",wordBreak:"break-all"}}
                           ref={this._graphSplitPane}
                           onDragFinished={(width) => this._updateGraphSplitPaneResize()}
                >
                  <div style={{height:"100%"}} onMouseEnter={(e) => {
                                                    const bounds = e.target.getBoundingClientRect();
                                                    this._OVERLAY_X = e.clientX - bounds.left;
                                                    this._OVERLAY_Y = e.clientY - bounds.top;
                                                  }}
                                                  onMouseMove={(e) => {
                                                    const bounds = e.target.getBoundingClientRect();
                                                    this._OVERLAY_X = e.clientX - bounds.left;
                                                    this._OVERLAY_Y = e.clientY - bounds.top;
                                                  }}>
                    <div id="bottomContainer">
                      {
                        this.state.toolbarEnabled && (
                          <AppToolbar appState={this.state}
                                      ref={this._toolbar}
                                      // Button callbacks
                                      answerViewerCallback={this._handleShowAnswerViewer}
                                      findToolCallback={() => this._findTool.current.toggleShow()}
                                      helpToolCallback={() => this._setActiveModal('HelpModal')}
                                      cachedQueriesToolCallback={() => this._setActiveModal('CachedQueriesModal')}
                                      importExportToolCallback={() => this._setActiveModal('ImportExportModal')}
                                      settingsToolCallback={() => this._setActiveModal('SettingsModal')}
                                      tableViewerToolCallback={() => {
                                        this.state.tableViewerComponents.tableViewerCompActive ? this._closeTableViewer() : this._openTableViewer("tableViewerCompActive");
                                      }}
                                      // Tool callbacks
                                      navigateToolCallback={this._setNavMode}
                                      selectToolCallback={this._setSelectMode}
                                      highlightTypesToolCallback={this._setHighlightTypesMode}
                                      examineConnectionToolCallback={this._setConnectionExaminerActive}
                                      browseNodeToolCallback={(bool) => {
                                        this.setState({ browseNodeActive : bool });
                                        if (!bool) {
                                          this._browseNodeInterface.current.hide();
                                        }
                                      }}/>
                        )
                      }
                      <div id="graphOverlayContainer">
                        <BrowseNodeInterface ref={this._browseNodeInterface}
                                             fg={this.fg}
                                             concepts={this.state.schemaMessage?this.state.schemaMessage.knowledge_graph.nodes:[]}
                                             relations={this.state.schemaMessage?this.state.schemaMessage.knowledge_graph.edges:[]}
                                             onReturnResult={this._browseNodeResult}
                                             onReturnError={(errors) => {
                                               errors = errors.map((e) => {
                                                 return {
                                                   message:e.message,
                                                   details:e.stack
                                                 };
                                               });
                                               this._handleMessageDialog ('Error', errors);
                                             }}
                                             robokop_url={this.robokop_url}
                                             tranqlURL={this.tranqlURL}
                                             message={this.state.schemaViewerEnabled && this.state.schemaViewerActive ? this.state.schemaMessage : this.state.message}/>
                        <div id="graphOverlayVerticalContainer">
                          <div id="schemaBanner" className="no-select" style={{display:(this.state.schemaViewerEnabled ? "" : "none")}}>
                            {((this.state.schemaViewerActive && !this.state.schemaLoaded) || (!this.state.schemaViewerActive && this.state.loading)) && <FaSpinner style={{marginRight:"10px"}} className="fa-spin"/>}
                            {this.state.schemaViewerActive ? "Schema:" : "Graph:"}
                            <div id="schemaViewToggleButtonContainer">
                              <Button color="primary"
                                      id="schemaViewToggleButton"
                                      size="sm"
                                      onClick={(e) => this._setSchemaViewerActive (!this.state.schemaViewerActive)}
                              >
                              {this.state.schemaViewerActive ? "Show graph" : "Show schema"}
                              </Button>
                            </div>
                          </div>
                          <LinkExaminer graph={this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schema : this.state.graph}
                                        ref={this._linkExaminer}
                                        onClose={() => {}}
                                        onLinkClick={(link) => {
                                          // Prevent user from accidentilly clicking on a link while having the link examiner tool select,
                                          // which results in it setting the link examiner interface to only display said link.
                                          if (!this.state.connectionExaminer) {
                                            this._handleLinkClick(link, true);
                                          }
                                        }}/>
                        </div>
                        <FindTool2 graph={this.state.schemaViewerActive && this.state.schemaViewerEnabled ? this.state.schema : this.state.graph}
                                   ref={this._findTool}
                                   resultMouseEnter={(result) => {
                                     this._highlightType(result.id, 0xff0000, false, undefined, "id")
                                   }}
                                   resultMouseLeave={(result) => {
                                     this._highlightType(result.id, false, false, undefined, "id")
                                   }}/>
                      </div>
                    </div>
                    {/*<div onContextMenu={this._handleContextMenu} id="graphContainer" data-vis-mode={this.state.visMode}>*/}
                    <div id="graphContainer" data-vis-mode={this.state.visMode}>
                      {this.state.schemaViewerActive && this.state.schemaViewerEnabled ?
                        (
                          this._renderForceGraph (
                            this.state.schema,
                            {
                            ref: (el) => {if (this.state.schemaViewerActive) this.fg = el; this._updateFg ()}
                          })
                        )
                      :
                        (
                          this._renderForceGraph (
                            this.state.graph, {
                            ref: (el) => {if (!this.state.schemaViewerActive) this.fg = el; this._updateFg ()}
                          })
                        )
                      }
                      {/*<ContextMenu id={this._contextMenuId} ref={this._contextMenu}/>*/}
                    </div>
                  </div>
                  <div id="info" style={!this.state.objectViewerEnabled ? {display:"none"} : {}}>
                    {/*the close button sets the select mode to true, which effectively "resets" it*/}
                    <div className="object-viewer-header">
                      <h6> Object Viewer </h6>
                      <FaTimes className="object-viewer-close-button" onClick={(e) => this._closeObjectViewer()}/>
                    </div>
                    <JSONTree
                    shouldExpandNode={(key,data,level) => level === 1}
                    hideRoot={true}
                    theme={
                      {scheme:"monokai", author:"wimer hazenberg (http://www.monokai.nl)", base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",
                      base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5", base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",
                      base0E:"#ae81ff",base0F:"#cc6633"}
                    }
                    invertTheme={false}
                    data={this.state.objectViewerSelection || {}}/>
                  </div>

                </SplitPane>
              }
            </div>
            <div className="h-100">
            <AppTableViewer tableViewerComponents={this.state.tableViewerComponents}
                            closeTableViewer={this._closeTableViewer}
                            innerRef={this._tableViewer}
                            appState={{
                              schemaViewerActive: this.state.schemaViewerActive,
                              schemaViewerEnabled: this.state.schemaViewerEnabled,
                              schema: this.state.schema,
                              graph: this.state.graph
                            }}
                            tableViewer={this._tableViewer}
                            handleNodeClick={this._handleNodeClick}
                            handleLinkClick={this._handleLinkClick}/>
            </div>
          </SplitPane>
        </div>
        <div id='next'/>
      </div>
    );
  }
}

if(process.env.NODE_ENV === 'production') {
  // behind proxy this would treat the path used to load index.html as root
  // Slice the query string off of the URL.
  const fullURL = window.location.origin + window.location.pathname;
  // Slice the hanging "/" off of the end of the URL if it is present.
  App.prototype.tranqlURL = fullURL.endsWith("/") ? fullURL.slice(0, -1) : fullURL;
} else {
  App.prototype.tranqlURL = "http://localhost:8001";
}

export default App;
