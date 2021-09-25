import React from 'react'; 
import "../style.css"

export function Footer() {
    const date = new Date()
    return (
        <div className="footer">
                <p>Github | {date.getFullYear()}</p>
        </div>
    )
}