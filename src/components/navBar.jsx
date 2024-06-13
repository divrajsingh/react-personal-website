import React, {useEffect, useRef} from 'react'; 
import '../style.css';
import '../mobileNav.css';
import {NavLink} from 'react-router-dom'; 
export function NavBar(props) {
    const style = {
        borderBottom: "2px solid #e07a5f",             
        color: "#e07a5f"                        
    }
    const navDropdown = useRef();
    const menuContainer = useRef();

    function toggleDropdown() {
        navDropdown.current.classList.toggle("show");
        menuContainer.current.classList.toggle("change");
    }

    function closeDropdown(e) {
        if (!e.target.closest('.dropbtn')) {
            //console.log("click outside detected");
            if (navDropdown.current.classList.contains('show')) {
                navDropdown.current.classList.remove('show');
                menuContainer.current.classList.toggle("change");
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown)

        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])
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
                    activeStyle={style}> Picture of the day </NavLink>
            </div>
            <div className="mobileNav">
                <div className="dropdown-container">
                    <button onClick={toggleDropdown} className="dropbtn">
                    <div ref={menuContainer} className="menu-container">
                        <div className="menu1"></div>
                        <div className="menu2"></div>
                        <div className="menu3"></div>
                    </div>            
                    </button>
                    <div ref={navDropdown} className="dropdown-content">
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
                            activeStyle={style}> Picture of the day </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}