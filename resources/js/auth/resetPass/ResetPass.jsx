import React, { useState } from "react";
import { Col, Container, Row, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import http from "../../utils/http";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ResetPass = (props) => {

    console.log(props)
    
    let history = useHistory();

    const [password, setPassword] = useState("");
    const [confirm_password, setCPassword] = useState("");
    const [redirect, setRediect] = useState(false);
    const [token, setToken] = useState("nmoAx9gb9ucKPOo36Zyw6l3mHW4ERqnyAT5n45VhL2gZS1B4DXw7Yspk87hXoP6n"); //todo : replace with dynamic token from url

    const handleSubmit = e => {
        e.preventDefault();
       if(password==confirm_password){
        let form = e.nativeEvent.target;
        let data = new FormData(form);
        data.append('token',token);
        http.post("change-password", data)
            .then(res => {
               if(res.data.toLowerCase().includes("ok")){
                setRediect(true)
               }
            })
            .catch(err => console.log(err));
       }else{
            toast.error("Both Passwords should match");
       }
    };

    if(redirect){
        return(
           <Redirect to="/"/>
        )
    }

    return (
        <>
        <ToastContainer />
        <h3 className="auth-brand text-center pt-4 mt-4">
                edu<span>hub</span>
            </h3>
        <Container style={{ boxShadow: "none" , paddingTop:"30px"}} className="auth">
            <Row className="align-items-center justify-content-center">
                <Col sm="12" md="6">
                    <h4 className="auth-header text-center pt-4">
                        Reset Password
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="New Password"
                                className="auth-input mb-3"
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                             <Input
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="Confirm New Password"
                                className="auth-input"
                                value={confirm_password}
                                required
                                onChange={e => setCPassword(e.target.value)}
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

export default ResetPass
