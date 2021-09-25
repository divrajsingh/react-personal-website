import React from 'react';
import {About} from './pages/About';
import {Api} from './pages/Api'; 
import {Experience} from './pages/Experience';
import {Skills} from './pages/Skills';
import { Route, Redirect, withRouter, useLocation} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

function Main() {
    /*
    const routes = [
        { path: '/about', name: 'About', Component: About },
        { path: '/skills', name: 'Skills', Component: Skills },
        { path: '/api-page', name: 'API', Component: Api },
      ]*/
    let location = useLocation(); 
    return (
        <div className="container">    
            <Route exact path='/'>
                {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    >
                <div className="page">
                    <About/>
                </div>
                </CSSTransition>
              )}      
            </Route>
            <Route path='/skills'>
            {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    >
                <div className="page">
                    <Skills/>
                </div>
                </CSSTransition>
              )}      
            </Route>
            <Route path='/api-page'>
            {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    >
                <div className="page">
                    <Api/>
                </div>
                </CSSTransition>
              )}      
            </Route>
            <Route path='/experience'>
            {({ match }) => (
                    <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    >
                <div className="page">
                    <Experience/>
                </div>
                </CSSTransition>
              )}      
            </Route>
            <Redirect exact to={location.pathname}/>
        </div>
    )
}

export default withRouter(Main);