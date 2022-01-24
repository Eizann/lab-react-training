import React from "react";

function Greetings(props) {
    function sayHello() {
        switch (props.lang) {
            case "de":
               return `Hallo `
            case "fr":
               return `Bonjour `
            case "es":
                return `Holà `
            case "en":
                return `Hello `
            default:
                return `Hello/Bonjour/Hallo/Holà `
    }
}
    return (
        <p>{sayHello() + props.children}</p>
    )
}

export default Greetings;