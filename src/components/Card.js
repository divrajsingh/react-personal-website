import React from 'react';

function handleClick(e) {
    //get content div
    let content = e.currentTarget.querySelector('.content');
    //check if content maxheight is truthy to minimise card, i.e. maxHeight != 0.
    if(content.style.maxHeight) {
        content.style.maxHeight = null; 
    } else { //expand the card
        content.style.maxHeight = content.scrollHeight + "px";
    }
    
}

export function Card(props) {
    let key = 0; 
    return (
        <div className="card">
            <button className="cardButton" onClick={handleClick}>
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