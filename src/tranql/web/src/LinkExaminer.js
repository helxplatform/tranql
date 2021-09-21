import React, { Component } from 'react';
import { FaCircle, FaLongArrowAltRight, FaTimes } from 'react-icons/fa';
import './LinkExaminer.css';

export default class LinkExaminer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: null,
      single: false
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show(link, single) {
    this.setState({ link, single });
  }
  hide() {
    this.setState({ link : null, single : false });
  }
  render() {
    if (this.state.link === null) return null;
    return (
      <div className="LinkExaminer">
        <div className="link-examiner-header horizontal-bar">
          <span className="link-examiner-header-text">Examine Connections</span>
          <FaTimes className="link-examiner-close-button" onClick={(e) => { this.props.onClose(e); this.hide(); }}/>
        </div>
        <div className="link-examiner-header-info">
          {
            (() => {
              const link = this.state.link;
              const nodes = [link.source, link.target];
              return nodes
              .sort((a,b)=>a.name.localeCompare(b.name))
              .map((node,i) => (
                <div className="header-node" key={i}>
                <FaCircle color={node.color}/>
                <span>{node.name}</span>
                </div>
              ))
            })()
          }
        </div>
        {(() => {
          /*
           * <span>{link.source.name.split("_").map(str=>str.charAt(0)).join("").toUpperCase()}</span>
           * <span title={link.target.name} style={{color:link.target.color}}>{link.target.name.slice(0,10)+(link.target.name.length > 10 ? "..." : "")}</span>
           */
          const link_1 = this.state.link;
          let allConnections;
          if (this.state.single) {
            allConnections = [link_1];
          }
          else {
            allConnections = this.props.graph.links.filter((link_2) => {
              return (
                (link_1.origin.source_id === link_2.origin.source_id && link_1.origin.target_id === link_2.origin.target_id) ||
                (link_1.origin.source_id === link_2.origin.target_id && link_1.origin.target_id === link_2.origin.source_id)
              );
            });
          }
          return allConnections.map((link, i) => {
            const source_node = this.props.graph.nodes.filter((n)=>n.id===link.origin.source_id)[0];
            const target_node = this.props.graph.nodes.filter((n)=>n.id===link.origin.target_id)[0];
            return (
              <div className="link-label" key={i} onClick={(e) => this.props.onLinkClick(link,e)}>
                <span title={source_node.name} style={{color:source_node.color}}>{source_node.name.slice(0,3).toUpperCase()}</span>
                <FaLongArrowAltRight/>
                <span className="link-label-text" style={{color:link.color}}>{link.type.join()}</span>
                <FaLongArrowAltRight/>
                <span title={target_node.name} style={{color:target_node.color}}>{target_node.name.slice(0,3).toUpperCase()}</span>
              </div>
            );
          })
        })()}
      </div>
    );
  }
}
