import React from "react";

function IdCard(props) {
    return (
        <div className="card">
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height.toString().substring(0, 1)}.{props.height.toString().substring(1)}m</p>
            <p>Birth: {props.birth.toDateString()}</p>
            <img src={props.picture} alt="{props.firstName}" />
        </div>
    )
    
}

export default IdCard;