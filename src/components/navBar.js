import React from 'react'; 
import {Flex} from './Flex';
import '../style.css'
import {Link} from 'react-router-dom'; 
export function NavBar(props) {
    return (
        <>
            <Flex container="flex" justifyContent="space-evenly">
                <Link to="/about"> About</Link>
                <Link to="/skills"> Skills</Link>
                <Link to="/experience"> Experience</Link>
                <Link to="/apiPage"> API </Link>
                <Link to="/contact"> Contact </Link>
            </Flex>
        </>
    )
}