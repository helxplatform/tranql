import React from 'react';
import { Modal } from 'react-bootstrap';
import GammaViewerComponent from 'gamma-viewer-web';

console.log(React.version);

export default function GammaViewer({ data, show, onHide, asModal=true }) {
    const gammaData = JSON.parse(JSON.stringify(data));
    const validMessage = gammaData && gammaData.message;
    // if (validMessage) {
    //     Object.values(gammaData.message.query_graph.nodes).forEach((n) => {
    //         if (!Array.isArray(n.category)) n.category = [n.category];
    //         if (!n.hasOwnProperty("id")) n.id = ["foobar"];
    //         if (!n.hasOwnProperty("is_set")) n.is_set = false;
    //     });
    // }
    function renderGammaViewer() {
        if (validMessage) return (
            <div className="GammaViewer">
                <GammaViewerComponent data={gammaData}/>
            </div>
        );
        return null;
    }
    if (!asModal) return renderGammaViewer();
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Answer Viewer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderGammaViewer()}
            </Modal.Body>
        </Modal>
    );
}