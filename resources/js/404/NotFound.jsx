import React from 'react'
import notfound from "../Images/404/404.png"
const NotFound = () =>{
    return (
        <div className="not-found-page">
            <img src={notfound} alt="Not Found"/>
            <h4>Error 404</h4>
            <h6>Page not found</h6>
        </div>
    )
}

export default NotFound
