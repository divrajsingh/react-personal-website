import React, {useState, useEffect} from 'react'
import {Flex} from '../components/Flex'

export function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({}); 
    const [mediaUrl, setMediaUrl] = useState('');

    useEffect(() => {
        const abortController = new AbortController();
        let API_KEY = process.env.REACT_APP_API_KEY;
        //console.log("api key is = " + API_KEY);
        
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, { signal: abortController.signal})
        .then((response) => response.json())
        .then((data) => {
            setIsLoaded(true); 
            setApiData(data);
            setMediaUrl(data.url);
        }).catch((e)=>{
            if (abortController.signal.aborted) {
                console.log("Navigated away - fetch aborted as component was unmounted - " + e.message);
            }
        });
        
        return () => {
            abortController.abort();
        }
    }, []); 

    if (!isLoaded) {
        return <div>Loading...</div>; 
    } else if (mediaUrl.includes("youtube")) {
        return (
            <Flex>
                <h2>NASA API - {apiData.title}</h2>
                <p>The following media is from NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a> service</p>
                <iframe title={apiData.title} width="960" height="540" src={mediaUrl}> </iframe>
            </Flex> 
        )
    } else {
        return (
            <Flex>
                <h2>NASA API - {apiData.title}</h2>
                <p>The following media is from NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a> service</p>
                <img src={mediaUrl} alt={apiData.title}/>
            </Flex> 
        )
    }
    
}

