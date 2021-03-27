import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import "../../sass/notification.scss";
function Notification() {
    
    const NotificationDummyData = [
        {id: 1, title: "I hope you are well!", discription: "I just wanted to let you know that I've just finished upding", time:"6 days ago", src:"https://randomuser.me/api/portraits/men/62.jpg"},
        {id: 2, title: "I hope you are well!", discription: "I just wanted to let you know that I've just finished upding", time:"6 days ago", src:"https://randomuser.me/api/portraits/women/21.jpg"},
        {id: 3, title: "I hope you are well!", discription: "I just wanted to let you know that I've just finished upding", time:"6 days ago", src:"https://randomuser.me/api/portraits/women/11.jpg"}
]
    
    return(
        <>
        <div className="notification">
           
                <div className="notification-details">
                <h3 style={{paddingBottom:"30px"}}>Notifications</h3>
                {NotificationDummyData &&
                            NotificationDummyData.map(category => (
                <>
                <div className="notification-information">
                <img src={category.src} alt="image" className="notication-img"/>
                <div className="notification-data">
                <h3 className="notification-title">{category.title}</h3> 
                <h3 className="notification-title">{category.discription}</h3> 
                <p className="notification-time">{category.time}</p> 
                </div>
               
                </div>
                
                </>
                ))}

            </div>

        </div>
        </>
    )


      };


export default Notification;
