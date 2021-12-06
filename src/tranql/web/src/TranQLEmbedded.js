import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { SizeMe } from 'react-sizeme';
import { GridLoader } from 'react-spinners';
import { FaFrown, FaPlayCircle } from 'react-icons/fa';
import { css } from '@emotion/core';

const spinnerStyleOverride = css`
    display: block;
    margin: 4 auto;
    border-color: red;
`;

/**
 * Used to determine embedding behavior. Set based on query string param.
 * 
 * @enum
 * @see {App._handleQueryString}
 */
 export const EmbedMode = Object.freeze({
    NONE: 0,
    FULL: 1,
    SIMPLE: 2
  });

export default function TranQLEmbedded({ embedMode, defaultShowAnswerViewer, graphLoading, graph, renderForceGraph, renderCodemirror, renderAnswerViewer, graphRefCallback }) {
    const [answerViewer, useAnswerViewer] = useState(defaultShowAnswerViewer);

    const toggleAnswerViewer = () => {
        useAnswerViewer(!answerViewer);
    }
    const renderBody = () => {
        if (answerViewer) return (
            <div className="h-100 w-100 bg-light" style={{padding: "8px"}}>
                {renderAnswerViewer({asModal: false})}
            </div>
        );
        else return (
          <SizeMe monitorHeight>
            {
              ({size}) => 
                renderForceGraph (
                  graph, {
                    ref: graphRefCallback,
                    height: size.height
                  }
                )
            }
          </SizeMe>
        );
    }

    return (
        <div className="App d-flex flex-column embedded" id="AppElement">
          {
            embedMode === EmbedMode.FULL && (
              <>
                {/* {this._renderBanner()} */}
                {renderCodemirror()}
              </>
            )
          }
          <div className="d-flex justify-content-center align-items-center flex-column flex-grow-1 position-relative" style={{backgroundColor: "black"}}>
            {
              graphLoading ? (
                <GridLoader
                  css={spinnerStyleOverride}
                  id={"spinner"}
                  sizeUnit={"px"}
                  size={12}
                  color={'var(--primary)'}
                  loading={true} />
              ) : (
                graph.links.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center flex-column text-muted">
                    <FaFrown style={{fontSize: "32px"}} />
                    <b className="mt-2">The query returned no results.</b>
                </div>
                ) : (
                  <>
                  {renderBody()}
                  <Button color="primary" outline size="sm" style={{position: "absolute", top: "10px", right: "10px"}} onClick={toggleAnswerViewer}>
                      {answerViewer ? "Graph" : "Answer viewer"}
                  </Button>
                  </>
                )
              )
            }
          </div>
          {/* <Message activeModal={this.state.activeModal} ref={this._messageDialog} /> */}
        </div>
    );
}