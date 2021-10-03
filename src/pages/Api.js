import React, {useState, useEffect} from 'react'

export function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({}); 
    const [mediaUrl, setMediaUrl] = useState('');
    const [isError, setIsError] = useState('false');

    function setupLocalStorage() {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        localStorage.setItem('datetime', dateTime);
    }
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
            setupLocalStorage();
        }).catch((e)=>{
            if (abortController.signal.aborted) {
                console.log("Navigated away - fetch aborted as component was unmounted - " + e.message);
            }
            setIsError(true);
        });

        return () => {
            abortController.abort();
        }
    }, []); 

    if (!isLoaded) {
        return <div className="apiContainer">Loading...</div>; 
    } else if (isError) {
        return (
        <div className="apiContainer">
            <p>Could not reach the API... </p>
            <p>Please try again later :)</p>
            </div>
        );
    }else if (mediaUrl.includes("youtube")) {
        return (
            <div className="apiContainer">
                <h2>{apiData.title}</h2>
                <p> API - NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a>:</p>
                <div className="embed-container">
                    <iframe title={apiData.title} src={mediaUrl} frameBorder='0' allowFullScreen> </iframe>
                </div>
            </div> 
        )
    } else {
        return (
            <div 
            className="apiContainer"
            >
                <h2>{apiData.title}</h2>
                <p>API - NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a>:</p>
                <img src={mediaUrl} alt={apiData.title}/>
             </div> 
        )
    }
    
}

