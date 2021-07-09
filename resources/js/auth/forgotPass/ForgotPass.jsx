import React, { useState } from "react";
import {
    Col,
    Container,
    Row,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import http from "../../utils/http";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ForgotPass = () => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        http.post("reset-link", data)
            .then(res => {
                if (res?.data == "Ok") {
                    setEmailSent(true);
                } else {
                    toast.error(res?.data?.message);
                }
            })
            .catch(err => toast.error("Something went wrong !"));
    };

    if (emailSent) {
        const resendLink = () => {
            window.location.reload();
        };
        return (
            <>
                <h3 className="auth-brand text-center pt-4 mt-4">
                    Ed<span>Hub</span>
                </h3>
                <Container
                    style={{ boxShadow: "none", paddingTop: "30px" }}
                    className="auth"
                >
                    <Row className="align-items-center justify-content-center">
                        <img
                            src="/images/forgotpass/tick.png"
                            alt=""
                            style={{ width: "150px" }}
                        />
                        <h4 className="auth-header text-center pt-4">
                            An email has been sent with the reset link!
                        </h4>
                        <Button
                            style={{
                                backgroundColor: "#3C64B1",
                                width: "150px"
                            }}
                            onClick={resendLink}
                        >
                            Resend Link
                        </Button>
                    </Row>
                </Container>
            </>
        );
    }

    return (
        <>
            <ToastContainer />
            <h3 className="auth-brand text-center pt-4 mt-4">
                Ed<span>Hub</span>
            </h3>
            <Container
                style={{ boxShadow: "none", paddingTop: "30px" }}
                className="auth"
            >
                <Row className="align-items-center justify-content-center">
                    <Col sm="12" md="6">
                        <h4 className="auth-header text-center pt-4">
                            Forgot Password
                        </h4>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="auth-input"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <button className="auth-btn" type="submit">
                                submit
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ForgotPass;
