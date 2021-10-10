import React, { useState, useEffect } from 'react'

export function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({url: '', media_type: ''}); //initialise url to empty string
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const abortController = new AbortController();
        let API_KEY = process.env.REACT_APP_API_KEY;
        //console.log("api key is = " + API_KEY);

        //get media item from local storage 
        let media_ls = JSON.parse(localStorage.getItem('media'));;
        //request made is truthy if above item exists
        let requestMade = true && media_ls;
        //API called required if stored media data does not match current date
        let storedMediaDate, today, dateNow; 
        if (requestMade) {
            storedMediaDate = Date.parse(media_ls.date);
            //using South African locale as it formarts to YYYY-MM-DD which is consistent with stored media date format
            today = new Date().toLocaleString("en-ZA", {timeZone: "America/New_York", dateStyle: "short"});
            dateNow = Date.parse(today);
        }
        let requestUpdateRequired = storedMediaDate < dateNow;
        /*printLogsForDebuggingAPI()*/

        if ((!requestMade || requestUpdateRequired)) {
            console.log("making call");
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setApiData(data);
                localStorage.setItem('media', JSON.stringify(data));
            }).catch((e) => {
                if (abortController.signal.aborted) {
                    console.log("Navigated away - fetch aborted as component was unmounted - " + e.message);
                }
                setIsError(true);
            });
        } else {
            console.log("API data retrieved from local storage")
            setIsLoaded(true);
            setApiData(media_ls);
        }


        return () => {
            abortController.abort();
        }
    }, []);

    if (!isLoaded) {
        return <div className = "apiContainer" > Loading... </div>; 
    } else if (isError) {
        return ( 
            <div className = "apiContainer" >
            <p> Could not reach the API... </p> 
            <p> Please try again later :) </p> 
            </div>
    );
    } else if (apiData.media_type === "video") {
        return ( 
            <div className = "apiContainer">
            <h2> { apiData.title } </h2>
            <p> API - NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a>:</p>
            <div className = "embed-container" >
            <iframe title = { apiData.title } src = { apiData.url } frameBorder = '0' allowFullScreen> </iframe> 
            </div>
            </div> 
        )
    } else {
        return ( 
            <div className = "apiContainer" >
            <h2> { apiData.title } </h2> 
            <p> API - NASA's <a href="https://apod.nasa.gov/apod/" rel="noreferrer" target="_blank">Astronomy Picture of the Day</a>:</p> 
            <img src = { apiData.url } alt = { apiData.title } /> 
            </div>
        )
    }

}

/*function printLogsForDebuggingAPI() {
    console.log("storedMediaDate = " + storedMediaDate);
        console.log("dateNow = " + dateNow);
        console.log("requestMade = "+requestMade);
        console.log("requestUpdateRequired = " + requestUpdateRequired);
        let testDate = new Date().toLocaleString("en-ZA", {timeZone: "America/New_York"});
        console.log("testDate = " + testDate);
}*/