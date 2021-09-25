import React from 'react';

export function Card(props) {
    let key = 0; 
    return (
        <div className="card">
            <button id={props.jobTitle} className="cardButton" onClick={props.clickHandler}>
                <h4 className="jobTitle">{props.jobTitle}</h4>
                <h4 className="company">{props.company}</h4>
                <h4 className="duration">{props.duration}</h4>
                <div className="content">
                    <ul>
                        {props.content.map(point => {
                            key++;
                            return <li key={key}>{point}</li>
                        })}
                    </ul>
                </div>
            </button>
        </div>
    )
}