import React from 'react';
import {NavBar} from './components/navBar';
import {Footer} from './components/Footer';
import {About} from './pages/About';
import {Api} from './pages/Api'; 
import {Contact} from './pages/Contact'; 
import {Experience} from './pages/Experience';
import {Skills} from './pages/Skills';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    return (
        <>    
            <NavBar/>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/apiPage' component={Api}/>
                <Route path='/experience' component={Experience}/>
                <Route path='/contact' component={Contact}/>
                <Redirect to='/about'/> 
            </Switch>
            <Footer/>
        </>
    )
}

export default withRouter(Main);