import React from 'react';
import "../style.css"

export function Footer() {
    const date = new Date()
    return ( <
        div className = "footer" >
        <p> < a href = "https://github.com/divrajsingh/react-personal-website" rel = "noreferrer" target = "_blank" > Github </a> | <span className="accent"> {date.getFullYear()} </span > </p> 
        </div>
    )
}