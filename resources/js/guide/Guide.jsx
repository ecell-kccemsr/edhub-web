import React, { useState } from "react";
import { Button, Modal, Row, Col, FormGroup, Label, Input } from "reactstrap";
import Guide1 from "./Guide1";
import Guide2 from "./Guide2";
import Guide3 from "./Guide3";
import Guide4 from "./Guide4";
import Guide5 from "./Guide5";
const GuideModal = () => {
    const [modal, setModal] = useState(false);
    const [step, setStep] = useState(1);

    const toggle = () => {
        setModal(!modal);
        setStep(1);
    };

    const nextStep = () => setStep(prev => prev + 1);

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("MULTISTEP FORM SUBMITTED");
        setModal(false);
    };

    const currentModalForm = step => {
        switch (step) {
            case 1:
                return (
                    <>
                        <Guide1 nextStep={nextStep} />
                    </>
                );
            case 2:
                return (
                    <>
                        <Guide2 nextStep={nextStep} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Guide3 nextStep={nextStep} />
                    </>
                );
            case 4:
                return (
                    <>
                        <Guide4 nextStep={nextStep} />
                    </>
                );
            case 5:
                return (
                    <>
                        <Guide5 handleSubmit={handleSubmit} />
                    </>
                );
            default:
                console.log("This is a multi-step form built with React.");
        }
    };
    return (
        <>
            <Button color="primary" onClick={toggle}>
                open modal
            </Button>
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
                            <b>
                                Step <br />
                                <span className="guide-modal-step">
                                    {step} of 5
                                </span>
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
        </>
    );
};

export default GuideModal;
