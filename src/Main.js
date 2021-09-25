import React from 'react';
import {About} from './pages/About';
import {Api} from './pages/Api'; 
import {Experience} from './pages/Experience';
import {Skills} from './pages/Skills';
import { Route, Redirect, withRouter} from 'react-router-dom';


function Main() {
    return (
        <div>    
            <Route path='/about'>
            <About/>
            </Route>
            <Route path='/skills'>
            <Skills/>
            </Route>
            <Route path='/api-page'>
            <Api/>
            </Route>
            <Route path='/experience'>
            <Experience/>
            </Route>
            <Redirect to='/about'/>
        </div>
    )
}

export default withRouter(Main);