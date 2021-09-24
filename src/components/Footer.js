import React from 'react'; 
import {Flex} from './Flex'
import "../style.css"

export function Footer() {
    const date = new Date()
    return (
        <div className="footer">
            <Flex container="flex" justifyContent="center">
                <p>Divraj Singh {date.getFullYear()}</p>
            </Flex>
        </div>
    )
}