import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import http from "../../utils/http";

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
               if(res.data.toLowerCase().includes("ok")){
                setEmailSent(true)
               }
            })
            .catch(err => console.log(err));
    };

    if(emailSent){
        return(
            <>
             <h3 className="auth-brand text-center pt-4 mt-4">
                edu<span>hub</span>
            </h3>
             <Container style={{ boxShadow: "none" , paddingTop:"30px"}} className="auth">
                <Row className="align-items-center justify-content-center">
                    <img src="/images/forgotpass/tick.png" alt="" style={{width:"150px"}} />
                    <h4 className="auth-header text-center pt-4">
                        An email has been sent with the reset link!
                    </h4>
                </Row>
            </Container>
            </>
        )
    }

    return (
        <>
        <h3 className="auth-brand text-center pt-4 mt-4">
                edu<span>hub</span>
            </h3>
        <Container style={{ boxShadow: "none" , paddingTop:"30px"}} className="auth">
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
    )
}

export default ForgotPass
