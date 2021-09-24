import React, {useState, useEffect} from 'react'
import {Flex} from '../components/Flex'
require("dotenv").config(); 

export function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({}); 
    const [mediaUrl, setMediaUrl] = useState('');

    useEffect(() => {
        let API_KEY = process.env.API_KEY;
        console.log("call made");
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setIsLoaded(true); 
            setApiData(data);
            setMediaUrl(data.url);
        })
    }, []); 

    if (!isLoaded) {
        return <div>Loading...</div>; 
    } else if (mediaUrl.includes("youtube")) {
        return (
            <Flex>
                <h2>NASA API - {apiData.title}</h2>
                <p>The following media is from NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a> service</p>
                <iframe width="960" height="540" src={mediaUrl}> </iframe>
            </Flex> 
        )
    } else {
        return (
            <Flex>
                <h2>NASA API - {apiData.title}</h2>
                <p>The following media is from NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a> service</p>
                <img src={mediaUrl}/>
            </Flex> 
        )
    }
    
}

