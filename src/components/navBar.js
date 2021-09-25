import React from 'react'; 
import '../style.css'
import {NavLink} from 'react-router-dom'; 
export function NavBar(props) {
    const style = {
        borderBottom: "2px solid orange",             
        color: "orange"                        
    }
    return (
        <>
            <div className="navBar">
                <NavLink 
                    exact to="/"  
                    activeStyle={style}> About </NavLink>
                <NavLink 
                    to="/skills" 
                    activeStyle={style}> Skills</NavLink>
                <NavLink 
                    to="/experience" 
                    activeStyle={style}> Experience</NavLink>
                <NavLink 
                    to="/api-page" 
                    activeStyle={style}> API </NavLink>
            </div>
        </>
    )
}