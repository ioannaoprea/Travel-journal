import React from "react";

export default function Element(props) {
    return (
        <div className="element">
            <img className="element--img" src={props.imageUrl} alt={props.title}/>
            
            <div className="element--details">
                <div className="element--location">
                    <img src="./location-logo.png" alt="location logo" className="location--logo" />
                    <span className="location">{props.location} <a href={props.googleMapsUrl} className="location--link">View on Google Maps</a></span>
                </div>

                <h2 className="element--title">{props.title}</h2>
                <h4 className="element--date">{props.startDate} - {props.endDate}</h4>
                <p className="element--description">{props.description}</p>
            </div>
        </div>
    )
}