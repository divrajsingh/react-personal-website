import React from 'react';
import { Card } from '../components/Card';
import {contentDXC, contentExp, contentSpec, contentTel} from "../Data"; 
import { Flex } from '../components/Flex';

export function Experience() {

    return (
        <Flex container="flex" justifyItems="center" flexDirection="column">
            <Card 
                jobTitle="Associate Application Developer"
                company="DXC Technology"
                duration="Feb 2020 - Present"
                content={contentDXC}
            />
            <Card
                jobTitle="Technical Expert"
                company="Apple"
                duration="Aug 2019 - Feb 2020"
                content={contentExp}
            />
            <Card
                jobTitle="Technical Specialist"
                company="Apple"
                duration="Aug 2017 - Jul 2019"
                content={contentSpec}
            />
            <Card
                jobTitle="Intern"
                company="Telstra"
                duration="Aug 2016 - Aug 2017"
                content={contentTel}
            />
        </Flex>
    )
}

