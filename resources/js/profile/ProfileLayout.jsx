import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import http from "../utils/http";
import { action, useStoreActions, useStoreState } from "easy-peasy";

const ProfileLayout = ({ children }) => {
    const user = useStoreState(state => state.user)
    const setUser = useStoreActions(actions => actions.setUser)
    const handleChange = () => {
        localStorage.clear();
    };

    const onSubmit = e => {
        e.preventDefault();
        let form  = e.nativeEvent.target
        let formData = new FormData(e.nativeEvent.target);
        http.post("auth/update", formData)
        .then(res => {form.reset();setUser(res.data.data)});
    };

    return (
        <div className="profile-outer-part">
            <div className="outermost-section">
                <Row className="profile-section m-0">
                    <Col xs="12" md="8" lg="9">
                        {children}
                    </Col>
                    <Col
                        xs="12"
                        md="4"
                        lg="3"
                        className="profile-section-2 p-0 pb-4"
                    >
                        <div>
                            <div className="img-container">
                                {
                                    !user && (
                                        <img
                                            src=" https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png"
                                            id="img"
                                            alt="profile-pic"
                                            className="profile-section-profile-image"
                                        />
                                       
                                    ) 
                                }
                                {
                                    user && (
                                        <img
                                            src={user?.avatar}
                                            id="img"
                                            alt="profile-pic"
                                            className="profile-section-profile-image"
                                        />
                                    )
                                }
                            </div>
      
                            {user && (
                                <>
                                 <form action="" onSubmit={onSubmit}>
                                    <div className="update-btn-section">
                                    <input class="form-control "  name="avatar" type="file" id="img"/>
                                            <button className="update-btn">
                                                Upload!
                                            </button>
                                    </div>
                                 </form>
                                <hr className="profile-hr" />
                                    <Link
                                    className="profile-links"
                                    style={{
                                        color: `${
                                            window.location.pathname.includes(
                                                "basic"
                                            )
                                                ? "#F05454"
                                                : "#808080"
                                        }`
                                    }}
                                    to="/profile/basic"
                                    >
                                    Basic
                                    </Link>
                                </>
                            )}
                           
                            <hr className="profile-hr" />
                            <Link
                                className="profile-links"
                                style={{
                                    color: `${
                                        window.location.pathname.includes(
                                            "wishlist"
                                        )
                                            ? "#F05454"
                                            : "#808080"
                                    }`
                                }}
                                to="/profile/wishlist"
                            >
                                Wishlist
                            </Link>
                            {user && (
                                    <>
                                        <hr className="profile-hr" />
                                        <Link
                                            className="profile-links"
                                            onClick={() => handleChange()}
                                            to="/"
                                        >
                                            Signout
                                        </Link>
                                    </>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProfileLayout;
// import React, { Component } from "react";
// import http from "../utils/http";
// class ProfileLayout extends Component {
//     state = { selectedFile: null };

//     fileChangedHandler = event => {
//         this.setState({ selectedFile: event.target.files[0] });
//     };

//     uploadHandler = () => {
//         const formData = new FormData();
//         formData.append(
//             "myFile",
//             this.state.selectedFile,
//             this.state.selectedFile.name
//         );
//         http.post("auth/update", formData).then(res =>
//             alert("Profile pic Updated")
//         );
//     };
//     render() {
//         return (
//             <div>
//                 <input type="file" onChange={this.fileChangedHandler} />
//                 <button onClick={this.uploadHandler}>Upload!</button>
//             </div>
//         );
//     }
// }

// export default ProfileLayout;
