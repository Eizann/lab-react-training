import React from "react";


function BoxColor(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        margin: "8px 0",
        padding: "12px"
    }
    return (
        <div style={divStyle}>rgb({props.r},{props.g},{props.b})
        <p>Hex</p></div>
    )
}

export default BoxColor;