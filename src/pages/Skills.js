import React from 'react';
import { Flex } from '../components/Flex';
import { Subject } from '../components/Subject';

export function Skills() {
    return (
        <Flex container="flex" justifyContent="space-evenly">
            <Subject img="front" alt="web" title="Frontend" description="React, CSS, JavaScript, Bootstrap, jQuery"/>
            <Subject img="db" alt="database" title="Databases" description="MongoDB, Microsoft SQL Server"/>
            <Subject img="back" alt="code" title="Backend" description="C#, Java, C"/>
        </Flex>
    )
}