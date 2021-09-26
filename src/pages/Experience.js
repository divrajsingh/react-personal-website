import React, {useRef} from 'react';
import { Card } from '../components/Card';
import {contentDXC, contentExp, contentSpec, contentTel} from "../Data"; 

export function Experience() {
    
    const line1 = useRef();
    const line2 = useRef();
    const line3 = useRef();

    function handleClick(e) {
        //get content div
        let content = e.currentTarget.querySelector('.content');
        let currentLine = "";
        switch(e.currentTarget.id) {
            case "Associate Application Developer": 
                currentLine = line1;
                break;
            case "Technical Expert": 
                currentLine = line2;
                break;
            case "Technical Specialist": 
                currentLine = line3;
                break;
            default: 
                currentLine = undefined;
        }
        //check if content maxheight is truthy to minimise card, i.e. maxHeight != 0.
        if(content.style.maxHeight) {
            content.style.maxHeight = null; 
            if (currentLine !== undefined) {
                currentLine.current.style.height= "72px";
            }
        } else { //expand the card
            content.style.maxHeight = content.scrollHeight + "px";
            let newHeight = 72 + content.scrollHeight; 
            if (currentLine !== undefined) {
                currentLine.current.style.height= newHeight + "px";
            }
        }
        
    }
    
    return (
        <div className="exp">
            <div className="timeline">
                <span className="dot"></span>
                <div className="space"></div>
                <div ref={line1} className="line"></div>
                <div className="space"></div>
                <span className="dot"></span>
                <div className="space"></div>
                <div ref={line2} className="line"></div>
                <div className="space"></div>
                <span className="dot"></span>
                <div className="space"></div>
                <div ref={line3} className="line"></div>
                <div className="space"></div>
                <span className="dot"></span>
            </div>
            <div className="cardContainer">
            <Card 
                jobTitle="Associate Application Developer"
                company="DXC Technology"
                duration="Feb 2020 - Present"
                content={contentDXC}
                clickHandler = {handleClick}
            />
            <Card
                jobTitle="Technical Expert"
                company="Apple"
                duration="Aug 2019 - Feb 2020"
                content={contentExp}
                clickHandler = {handleClick}
            />
            <Card
                jobTitle="Technical Specialist"
                company="Apple"
                duration="Aug 2017 - Jul 2019"
                content={contentSpec}
                clickHandler = {handleClick}
            />
            <Card
                jobTitle="Intern"
                company="Telstra"
                duration="Aug 2016 - Aug 2017"
                content={contentTel}
                clickHandler = {handleClick}
            />
            </div>
        </div>
    )
}

