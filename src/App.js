import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {NavBar} from './components/navBar';
import {Footer} from './components/Footer';
import Main from './Main';
import ReactGA from 'react-ga';

function App() {
  
  useEffect(() => {
    ReactGA.initialize('G-TWZH4MB02Z');
  }, []);

  return (
    <>
      <Router>
        <NavBar/>
        <Main/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
