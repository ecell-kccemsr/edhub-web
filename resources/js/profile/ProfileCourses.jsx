import React from "react";
import ProfileLayout from "./ProfileLayout";
const ProfileCourses = () => {
    const profileDummyData = [
        {
            id: 1,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description: "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        {
            id: 2,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description: "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            id: 3,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description: "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            id: 4,
            title: "The Complete Android R + Java Developer Course™ : 2021",
            description: "Course by:  Dr. makn vjyvhj",
            src: "https://randomuser.me/api/portraits/women/11.jpg"
        }
    ];
    return (
        <ProfileLayout>
            <h3 className="profile-title">My Courses</h3>
            <div className="profile-section-1">
                {profileDummyData &&
                    profileDummyData.map(category => (
                        <>
                            <div className="profile-information">
                                <img
                                    src={category.src}
                                    alt="image"
                                    className="profile-img"
                                />
                                <div className="profile-data">
                                    <h5 className="profile-title-1">
                                        {category.title}
                                    </h5>
                                    <p className="profile-time">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </ProfileLayout>
    );
};

export default ProfileCourses;
