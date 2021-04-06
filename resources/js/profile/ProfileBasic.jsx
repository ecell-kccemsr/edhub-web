import React from "react";
import { FormGroup, Input } from "reactstrap";
import ProfileLayout from "./ProfileLayout";
const ProfileBasic = () => {
    return (
        <ProfileLayout>
            <h3 className="profile-title">BASIC</h3>
            <div className="profile-section-1">
                <FormGroup>
                    <p className="input-headers">First Name</p>
                    <Input
                        type="name"
                        name="name"
                        placeholder="Mona"
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup>
                <FormGroup>
                    <p className="input-headers">Last Name</p>
                    <Input
                        type="name"
                        name="email"
                        placeholder="Singh"
                        className="input-group"
                        disabled={true}
                    />
                </FormGroup>
                <FormGroup>
                    <p className="input-headers">Email</p>
                    <Input
                        type="email"
                        name="email"
                        placeholder="abc@gmail.com"
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
