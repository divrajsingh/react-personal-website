import React from 'react'; 
import "../style.css"

export function Footer() {
    const date = new Date()
    return (
        <div className="footer">
                <p>Github | <span id="year"> {date.getFullYear()} </span></p>
        </div>
    )
}