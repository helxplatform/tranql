import React, { Component } from 'react';
import { Modal, Tabs, Tab, Form } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Range } from 'rc-slider';

export default class SettingsModal extends Component {
    _renderCheckboxes(stateKey) {
        return this.props.appState[stateKey].map((checkbox, index) => (
            <div key={index}>
                <label>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={()=>this.props.toggleCheckbox(stateKey, index)}
                    />
                    {checkbox.label}
                </label>
            </div>
        ));
    }
    render() {
        return (
            <Modal show={this.props.active}
               onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="general" className="react-tabs-settings-tab-list">
                    <Tab eventKey="general" title="General">
                    <hr style={{visibility:"hidden",marginTop:0}}/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <b>Visualization Mode and Graph Colorization</b>
                    <div style={{display:"flex"}}>
                        <div>
                        <input type="radio" name="visMode"
                                value="3D"
                                checked={this.props.appState.visMode === "3D"}
                                onChange={this.props.handleUpdateSettings} />3D &nbsp;
                        </div>
                        <div>
                        <input type="radio" name="visMode"
                                value="2D"
                                checked={this.props.appState.visMode === "2D"}
                                onChange={this.props.handleUpdateSettings} />2D &nbsp;
                        </div>
                        <div>
                        <input type="radio" name="visMode"
                                value="VR"
                                checked={this.props.appState.visMode === "VR"}
                                onChange={this.props.handleUpdateSettings} />VR &nbsp;&nbsp;
                        </div>
                    <div>
                        <input type="checkbox" name="colorGraph"
                            checked={this.props.appState.colorGraph}
                            onChange={this.props.handleUpdateSettings} /> Color the graph.
                    </div>
                    </div>
                    </div>

                    <hr/>

                    <div style={{display:"flex"}}>
                    <div style={{display:"flex",flexDirection:"column",flexGrow:1}}>
                        <b>Use Cache</b>
                        <div>
                        <input type="checkbox" name="useCache"
                                checked={this.props.appState.useCache}
                                onChange={this.props.handleUpdateSettings} /> Use cached responses.
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Button id="clearCache"
                                outline className="App-control"
                                color="primary" onClick={this.props.clearCache}>
                        Clear the cache {this.props.appState.databaseSize}
                        </Button>
                    </div>
                    </div>

                    {
                    /* Really *bad* feature...
                    <hr/>

                    <div style={{display:"flex",flexDirection:"column"}}>
                    <b>Cursor</b>
                    <div>
                        <input type="checkbox" name="useToolCursor"
                            checked={this.state.useToolCursor}
                            onChange={this._handleUpdateSettings} /> Use active tool as cursor.
                    </div>
                    </div>
                    */
                    }

                    <hr/>

                    <div style={{display:"flex",flexDirection:"column"}}>
                    <b>Node Drag</b>
                    <div>
                        <input type="checkbox" name="enableNodeDrag"
                            checked={this.props.appState.forceGraphOpts.enableNodeDrag}
                            onChange={this.props.handleUpdateSettings} /> Allow node dragging in the force graph (requires refresh).
                    </div>
                    </div>

                    <hr/>

                    <div style={{display:"flex",flexDirection:"column"}}>
                    <b>Dynamic ID Resolution</b>
                    <div>
                        <input type="checkbox" name="dynamicIdResolution"
                            checked={this.props.appState.dynamicIdResolution}
                            onChange={this.props.handleUpdateSettings} /> Enables dynamic id lookup of curies.
                    </div>
                    </div>
                    </Tab>
                    <Tab eventKey="graphStructure" title="Graph Structure">
                    <hr style={{visibility:"hidden",marginTop:0}}/>
                    <b>Link Weight Range</b> Min: [{this.props.appState.linkWeightRange[0] / 100}] Max: [{this.props.appState.linkWeightRange[1] / 100}]<br/>
                    Include only links with a weight in this range.
                    <Range allowCross={false} defaultValue={this.props.appState.linkWeightRange} onChange={this.props.onLinkWeightRangeChange} />

                    <b>Node Connectivity Range</b> Min: [{this.props.appState.nodeDegreeRange[0]}] Max: [{this.props.appState.nodeDegreeRange[1]}] (reset on load)<br/>
                    Include only nodes with a number of connections in this range.
                    <Range allowCross={false}
                        defaultValue={this.props.appState.nodeDegreeRange}
                        onChange={this.props.onNodeDegreeRangeChange}
                        max={this.props.appState.nodeDegreeMax}/>
                    <hr/>
                    <b>Force Graph Charge</b><br/>
                    Set the charge force on the active graph<br/>
                    <Form>
                    <Form.Control
                    type="number"
                    defaultValue={this.props.appState.charge}
                    onChange={this.props.onChargeChange}
                    onKeyDown={(e) => {if (e.keyCode === 13) e.preventDefault();}}
                    />
                    </Form>
                    <hr/>

                    <b>Legend Display Limit ({this.props.appState.schemaViewerActive && this.props.appState.schemaViewerEnabled ? "schema" : "graph"})</b><br/>
                    <Form>
                    <Form.Label>Set the number of nodes that the legend displays:</Form.Label>
                    <Form.Control
                    type="number"
                    defaultValue={this.props.appState.schemaViewerActive && this.props.appState.schemaViewerEnabled ? this.props.appState.schemaLegendRenderAmount.nodes : this.props.appState.queryLegendRenderAmount.nodes}
                    onChange={this.props.onLegendNodeLimitChange}
                    onKeyDown={(e) => {if (e.keyCode === 13) e.preventDefault();}}
                    />
                    <Form.Label>Set the number of links that the legend displays:</Form.Label>
                    <Form.Control
                    type="number"
                    defaultValue={this.props.appState.schemaViewerActive && this.props.appState.schemaViewerEnabled ? this.props.appState.schemaLegendRenderAmount.links : this.props.appState.queryLegendRenderAmount.links}
                    onChange={this.props.onLegendLinkLimitChange}
                    onKeyDown={(e) => {if (e.keyCode === 13) e.preventDefault();}}
                    />
                    </Form>


                    {/*<div className={"divider"}/>*/}
                    <br/>
                    </Tab>
                    <Tab eventKey="knowledgeSources" title="Knowledge Sources">
                    <hr style={{visibility:"hidden",marginTop:0}}/>
                    <b>Database Sources</b><span> Filter graph edges by source database. Deselecting a database deletes all associations from that source.</span>
                    <div className="checkbox-container">{this._renderCheckboxes('dataSources')}</div>
                    <hr/>
                    <b>Reasoner Sources</b><span> Filter graph elements by source reasoner. Deselecting a reasoner deletes all associations from that source.</span>
                    <div className="checkbox-container">{this._renderCheckboxes('reasonerSources')}</div>
                    </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}