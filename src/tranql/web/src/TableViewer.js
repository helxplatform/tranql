import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Form, Tabs, Tab } from 'react-bootstrap';
import * as YAML from 'js-yaml';
import ReactTable from 'react-table';
import './TableViewer.css';


export default class TableViewer extends Component {
  static defaultProps = {
    close: () => {},
    resetAttributesOnOpen : true,
    filterButtonProps : {},
    closeButtonProps : {},
    tableProps: {},
    searchMethod : null,
    buttons : []
  };
  /**
   * Constructs a new table viewer.
   *
   * @param {Object} props - Properties of the table viewer
   * @param {Function} [props.onOpen=function(){}] - Callback invoked when TableViewer::open is called.
   * @param {Function} [props.onClose=function(){}] - Callback invoked when TableViewer::close is called.
   * @param {Object<String,T[]>} data - The data to be represented in the table viewer. The object's keys will be used as tabs.
   * @param {Object} defaultTableAttributes - Default attributes that display for each tab. Every key in the `data` prop must be included.
   * @param {Boolean} [resetAttributesOnOpen=true] - Specifies if the `tableAttributes` state property will be reset
   *    to the `defaultTableAttributes` prop whenever the table is opened.
   * @param {Object} [filterButtonProps={}] - Props to pass to the filter button. Overrides the props that TableViewer passes to it.
   * @param {Object} [closeButtonProps={}] - Props to pass to the close button. Overrides the props that TableViewer passes to it.
   * @param {Object} [tableProps={}] - Props to pass to the react-table instance. Overrides the props that TableViewer passes to it.
   * @param {Function|null} [searchMethod=null] - Override TableViewer's default search method. Refer to the ReactTable prop `defaultFilterMethod` for usage.
   * @param {React.Component[]|React.Component} [buttons=[]] - Injects components into the button container. Recommended: reactstrap Button with size="sm".
   */
  constructor(props) {
    super(props);

    this.state = {
      tableFilterView : false,
      tableAttributes : this.props.defaultTableAttributes,
      filterFilter : '',
      activeTab: undefined
    };

    this._filterInputFilter = React.createRef();

    this.resetAttributes = this.resetAttributes.bind(this);
    this._getActiveTabName = this._getActiveTabName.bind(this);
  }
  resetAttributes() {
    this.setState({ tableAttributes : this.props.defaultTableAttributes });
  }
  _getActiveTabName() {
    // return this._tabs.current.props.activeKey;
    return this.state.activeTab;
  }
  componentDidMount() {
    this.setState({ activeTab: Object.keys(this.props.data)[0] });
  }
  render() {
    if (!this.props.tableView) return null;
    return (
      <div className="TableViewerContainer">
      <div className="TableViewer">
        <div className="table-viewer-button-container">
          {
            this.state.tableFilterView && (<Form.Control className="form-inline" type="text" ref={ref => {this._filterInputFilter = ref;}} onChange={() => {
              const value = this._filterInputFilter.value;
              this.setState({ filterFilter : value });
            }}/>)
          }
          {this.props.buttons}
          {
            this.state.tableFilterView && (<Button className="table-viewer-filter-button" size="sm" color="warning" onClick={() => {
              const tableAttributes = this.state.tableAttributes;
              tableAttributes[this._getActiveTabName()] = [];
              this.setState({ tableAttributes });
            }}>
              Uncheck all
            </Button>)
          }
          <Button className="table-viewer-filter-button" size="sm" color={this.state.tableFilterView?"secondary":"primary"} onClick={() => {
            this.setState({ tableFilterView : !this.state.tableFilterView });
          }} {...this.props.filterButtonProps}>
            {this.state.tableFilterView ? "Back" : "Filter"}
          </Button>
          <Button className="table-viewer-close-button" size="sm" color="danger" onClick={() => this.props.close()} {...this.props.closeButtonProps}>Close</Button>
        </div>
        <Tabs activeKey={this.state.activeTab} onSelect={(key) => this.setState({activeTab: key})}>
          {
            (() => {
              const elementTypes = Object.keys(this.props.data);
              return elementTypes.map((elementType,index) => (
                <Tab eventKey={elementType} title={elementType} key={index.toString()}>
                  {
                    (() => {
                      const graph = this.props.data;
                      const elements = graph[elementType];
                      const keys = elements.flatMap((el) => Object.keys(el)).unique()

                      // const serialize = (object) => {
                      //   if (Array.isArray(object)) {
                      //     return <div>{object.map((obj) => <>{serialize(obj)}<br/></>)}</div>;
                      //   }
                      //   else if (typeof object === "object") {
                      //     return (<div>{Object.entries(object).map((object) => {
                      //       return <>{serialize(object[0])} = {serialize(object[1])}}<br/></>;
                      //     })}</div>);
                      //   }
                      //   else {
                      //     return <div>{object}</div>;
                      //   }
                      // }
                      if (this.state.tableFilterView) {
                        return (
                          <div className="table-filter-container">
                            {
                              keys.filter((key) => key.startsWith(this.state.filterFilter)).map((key,i) => (
                                  <Form.Check
                                      type="checkbox"
                                      label={key}
                                      key={i}
                                      inline
                                      checked={this.state.tableAttributes[elementType].includes(key)}
                                      onChange={()=>{
                                        const tableAttributes = this.state.tableAttributes;
                                        const index = tableAttributes[elementType].indexOf(key);
                                        if (index !== -1) {
                                          tableAttributes[elementType].splice(index,1);
                                        }
                                        else {
                                          tableAttributes[elementType].push(key);
                                        }
                                        this.setState({ tableAttributes });
                                      }}
                                  />
                              ))
                            }
                          </div>
                        );
                      }
                      else {
                        const columns = keys.filter((key) => this.state.tableAttributes[elementType].includes(key)).map((key,i) => {
                          return ({
                            Header: key,
                            accessor: (el) => typeof el[key] === "object" ? YAML.safeDump(el[key]) : el[key],
                            id:key
                          });
                        });
                        return (
                          <ReactTable data={elements}
                                      columns={columns}
                                      defaultPageSize={15}
                                      filterable
                                      defaultFilterMethod={(filter,row) => {
                                        if (this.props.searchMethod !== null) {
                                          return this.props.searchMethod(filter,row);
                                        }
                                        const attributeValue = row[filter.id];
                                        if (typeof attributeValue === 'undefined') {
                                          // If the object doesn't have this attribute just don't include it.
                                          return false;
                                        }
                                        const isRegexLiteral = filter.value.match(/^\/(.*)\/([g|i|m|u|y]*)$/);
                                        if (isRegexLiteral !== null) {
                                          try {
                                            const expr = isRegexLiteral[1];
                                            const flags = isRegexLiteral[2];
                                            const re = new RegExp(expr,flags);
                                            return attributeValue.match(re);
                                          }
                                          catch {
                                            // Return false if the regex is invalid
                                            return false;
                                          }
                                        }
                                        return attributeValue.includes(filter.value);
                                      }}
                                      className="-striped -highlight"
                                      {...this.props.tableProps}/>
                        );
                      }
                    })()
                  }
                </Tab>
              ));
            })()
          }
        </Tabs>
      </div>
      </div>
    );
  }
}

export class AppTableViewer extends Component {
  render() {
    return (
      <TableViewer tableView={this.props.tableViewerComponents.tableViewerCompActive}
                         close={this.props.closeTableViewer}
                         ref={this.props.innerRef}
                         data={(() => {
                           const graph = this.props.appState.schemaViewerActive && this.props.appState.schemaViewerEnabled ? this.props.appState.schema : this.props.appState.graph;
                           // Table viewer generates a tab for every property in the object provided, but we only want nodes and links as our tabs.
                           return {
                             nodes : graph.nodes.map((node) => node.origin),
                             links : graph.links.map((link) => link.origin)
                           };
                         })()}
                         defaultTableAttributes={{
                           "nodes" : [
                             "name",
                             "id",
                             "type"
                           ],
                           "links" : [
                             "source_id",
                             "target_id",
                             "type",
                             "source_database"
                           ]
                         }}
                         tableProps={{
                           getTdProps: (tableState, rowInfo, columnInfo, tableInstance) => {
                             const getElement = () => {
                               const isNode = this.props.tableViewer.current._getActiveTabName() === "nodes";
                               const graph = this.props.appState.schemaViewerActive && this.props.appState.schemaViewerEnabled ? this.props.appState.schema : this.props.appState.graph;
                               const elements = isNode ? graph.nodes : graph.links;
                               const origin = rowInfo.original;

                               const element = elements.filter((element) => element.origin.id === origin.id)[0];

                               const clickMethod = (isNode ? () => {
                                 this.props.handleNodeClick(element);
                               } : () => {
                                 this.props.handleLinkClick(element, true);
                               });

                               return {
                                 click : clickMethod
                               };
                             }
                             return {
                               onClick: () => {
                                 getElement().click();
                               }
                             };
                           }
                         }}/>
    )
  }
}