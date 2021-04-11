import { FormGroup, Input } from "reactstrap";
import ProfileLayout from "./ProfileLayout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import http from "../utils/http";
const ProfileBasic = () => {
    const [token, setUserToken] = useState([]);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        http.setToken(accessToken);
        http.get("auth/user").then(res => {
            setUserToken(res.data.data);
        });
    }, []);

    return (
        <ProfileLayout>
            <h3 className="profile-title">BASIC</h3>
            <div className="profile-section-1">
                <FormGroup>
                    <p className="input-headers">Name</p>
                    <Input
                        type="name"
                        name="name"
                        placeholder={token.name}
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup>
                {/* <FormGroup>
                    <p className="input-headers">Last Name</p>
                    <Input
                        type="name"
                        name="email"
                        placeholder={token.name}
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup> */}
                <FormGroup>
                    <p className="input-headers">Email</p>
                    <Input
                        type="email"
                        name="email"
                        placeholder={token.email}
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup>
                <FormGroup>
                    <p className="input-headers">Mobile No</p>
                    <Input
                        type="number"
                        name="mobile_no"
                        placeholder="9837282813"
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup>
            </div>
        </ProfileLayout>
    );
};

export default ProfileBasic;
