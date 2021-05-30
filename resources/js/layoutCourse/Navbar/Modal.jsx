import React from 'react'
import { Button,Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GModal = ({modal,toggle,currentModalForm,step}) => {
    return (
        <Modal
        isOpen={modal}
        toggle={toggle}
        className="guide-modal-container"
    >
        <button className="close-modal-btn" onClick={toggle}>
            X
        </button>
        <div className="guide-modal">
            <hr className="modal-hr" />
            <Row>
                <Col sm="12" md="3" className="text-center">
                    <b style={{fontWeight:"bold", fontSize:"17px"}}>
                        STEP <br />
                        <span className="guide-modal-step">
                            {step} / 5
                        </span>
                        <div className="guide-modal-step-dot">
                            <span
                                style={{
                                    color: `${
                                        step >= 1
                                            ? "#1f1f1e"
                                            : "#808080"
                                    }`
                                }}
                            >
                                &#8226;
                            </span>
                            <span
                                style={{
                                    color: `${
                                        step >= 2
                                            ? "#1f1f1e"
                                            : "#808080"
                                    }`
                                }}
                            >
                                &#8226;
                            </span>
                            <span
                                style={{
                                    color: `${
                                        step >= 3
                                            ? "#1f1f1e"
                                            : "#808080"
                                    }`
                                }}
                            >
                                &#8226;
                            </span>
                            <span
                                style={{
                                    color: `${
                                        step >= 4
                                            ? "#1f1f1e"
                                            : "#808080"
                                    }`
                                }}
                            >
                                &#8226;
                            </span>
                            <span
                                style={{
                                    color: `${
                                        step >= 5
                                            ? "#1f1f1e"
                                            : "#808080"
                                    }`
                                }}
                            >
                                &#8226;
                            </span>
                        </div>
                    </b>
                </Col>
                <Col sm="12" md="9">
                    <h4 className="guide-modal-title">
                        Let us guide you !
                    </h4>
                </Col>
            </Row>
            <h5 className="guide-modal-subtitle">
                Select according to your requirement
            </h5>
            {currentModalForm(step)}
        </div>
    </Modal>

    )
}

export default GModal
