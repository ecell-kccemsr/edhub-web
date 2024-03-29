import { FormGroup, Input } from "reactstrap";
import ProfileLayout from "./ProfileLayout";
import React from "react";
import http from "../utils/http";
import { useStoreState } from "easy-peasy";
const ProfileBasic = () => {
    const user = useStoreState(state => state.user);
    if (user === null) {
        return <h3 className="py-4 my-4 text-center">Not Authenticated !</h3>;
    }
    const onSubmit = e => {
        e.preventDefault();
        http.post("auth/update", new FormData(e.nativeEvent.target)).then(res =>
            alert("Profile Updated")
        );
    };
    return (
        <ProfileLayout>
            <h3 className="profile-title">BASIC</h3>
            <div className="profile-section-1">
                <form onSubmit={onSubmit}>
                    <FormGroup>
                        <p className="input-headers">Name</p>
                        <Input
                            type="name"
                            name="name"
                            className="input-group"
                            defaultValue={user.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <p className="input-headers">Email</p>
                        <Input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            className="input-group"
                            disabled
                        />
                    </FormGroup>
                    {/* <FormGroup>
                        <p className="input-headers">Mobile No</p>
                        <Input
                            type="number"
                            name="mobile_no"
                            defaultValue="22222 55555"
                            className="input-group"
                        />
                    </FormGroup> */}
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        </ProfileLayout>
    );
};

export default ProfileBasic;
