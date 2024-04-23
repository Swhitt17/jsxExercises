import React from "react";
import "./Tweet.css";

const Tweet = ({username,name,date,message}) => {
    return (
        <div className="Tweet">
        <h3 className="Tweet-name">Username:{username}</h3>
        <h3 className="Tweet-name">Name:{name}</h3>
        <h3 className="Tweet-date">Date:{date}</h3>
        <h3 className="Tweet-msg">Message:{message}</h3>
        </div>
       
        
    
    )
}

export default Tweet;