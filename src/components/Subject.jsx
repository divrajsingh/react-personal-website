import React from 'react'; 
import PropTypes from 'prop-types';
import webIcon from "../img/web.png"; 
import dbIcon from "../img/database.png"; 
import codeIcon from "../img/code.png"; 

export function Subject(props) {
    let src; 
    let style;
    switch (props.img) {
        case "front": 
            src = webIcon;
            style = {
                width: "50%",
                height: "auto"
            }
            break;
        case "db": 
            src = dbIcon;
            style = {
                width: "30%",
                height: "auto"
            }
            break;
        case "back": 
            src = codeIcon;
            style = {
                width: "45%",
                height: "auto"
            }
            break;
        default: 
            src = webIcon;
    }

    return (
        <div style={{width: "190px", textAlign: 'center'}}>
            <img style={style} src={src} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

Subject.propTypes = {
    img: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired
}