import React from 'react'; 
import {Flex} from './Flex';
import '../style.css'
import {NavLink} from 'react-router-dom'; 
export function NavBar(props) {
    const style = {
        borderBottom: "2px solid orange",             
        color: "orange"                        
    }
    return (
        <>
            <Flex className="navBar" container="flex" justifyContent="space-evenly">
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
            </Flex>
        </>
    )
}