import React from 'react';
import img from './Divraj S.jpg';
import '../style.css'

export function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutImg">
                <img src={img} alt="me" width="548px" height="455px"/>
            </div>
            <div className="info">
                    <h1>Hello, I'm Divraj <span className="accent">:)</span></h1>
                    <p>I currently work at <a rel="noreferrer" href="https://www.resmed.com.au/" target="_blank">ResMed</a> as a Software Engineer.</p>
                    <p>I enjoy learning new skills like playing the <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Tabla" target="_blank">Tabla</a>.</p>
                    <p>You can connect with me on <a rel="noreferrer" href="https://www.linkedin.com/in/divrajsinghs/" target="_blank">Linkedin</a>.</p>
                </div>
        </div>
    )
}

