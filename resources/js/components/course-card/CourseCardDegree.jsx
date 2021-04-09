import axios from "axios";
import React, { useState, useEffect } from "react";
import star from "../../Images/courseCategory/star.png";
const CourseCardDegree = () => {
    const [data, setData] = useState([]);

        useEffect(() => {
            axios
                .get(`/api/courses/${data.id}`)
                .then(res => {
                    console.log(res);
                    setData(res.data.data[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }, []);
    

    return (
        <>
            <div>
                <img
                    src={data?.image}  
                    alt="card header image"
                />
                <div >
                    <div>
                        <img src={star} alt="" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                           <h5 style={{ fontWeight: "400" }}>
                        $ {data?.price}
                    </h5> 
                    <h6>
                        EMI Available*
                    </h6>
                    <p>
                    Get 5% extra cashback if you buy through us
                    </p>
                        </li>
                        <li>
                            <h5>
                                April,5
                            </h5>
                            <p>
                                Start Date
                            </p>
                        </li>
                        <li>
                            <h5>
                                8 Months*
                            </h5>
                            <p>
                            programme Duration
                            </p>
                        </li>
                        <li>
                            <h5>
                            Online Bootcamp
                            </h5>
                            <p>
                            Learning format
                            </p>
                        </li>
                    </ul>
                </div>
              
                    
               

              
            </div>
        </>
    );
};

export default CourseCardDegree;
