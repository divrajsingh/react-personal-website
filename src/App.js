import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {NavBar} from './components/navBar';
import {Footer} from './components/Footer';
import Main from './Main';

function App() {
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
