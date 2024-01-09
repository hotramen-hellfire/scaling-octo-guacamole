import { Flex, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { dataProjects } from '../../../data';
import ProjectItem from './ProjectItem';

type ProjectsProps = {

};

const Projects: React.FC<ProjectsProps> = () => {
    const [projDone, setProjDone] = useState(false);
    return (
        <>
            <Flex
                width={'100%'}
                zIndex={3}
                borderRadius={10}
                backdropFilter={'blur(40px) contrast(90%)'}
                align={'center'}
                flexDirection={'column'}
                display={dataProjects ? 'flex' : 'none'}
                pb={2}
                boxShadow={'2xl'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                overflow={'hidden'}
            >
                <Flex
                    align={'center'}
                    justify={'center'}
                    width={'100%'}
                >
                    <Text
                        fontFamily={'PWPers'}
                        textAlign={'center'}
                        display={projDone ? 'unset' : 'none'}
                        fontSize={{ base: 30, md: 50 }}
                    >
                        PROJECTS
                    </Text>
                    <Icon
                        fontSize={{ base: 25, md: 40 }}
                        as={FaProjectDiagram}
                    />
                </Flex>
                <Flex
                    width={'90%'}
                    justify={'center'}
                >
                    <Flex
                        fontFamily={'PWPers'}
                        display={!projDone ? 'flex' : 'none'}
                        fontSize={{ base: 30, md: 50 }}
                        textAlign={'center'}
                        width={'100%'}
                        justify={'center'}
                    >
                        <Typewriter
                            options={{
                                delay: 250,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('PROJECTS')
                                    .pauseFor(500)
                                    .callFunction(() => {
                                        setProjDone(true);
                                    })
                                    .start();
                            }}
                        />
                    </Flex>
                </Flex>
                <Flex
                    flexDirection={'column'}
                    width={'100%'}
                    mt={-5}
                    justify={'center'}
                    align={'center'}
                >
                    {dataProjects.map((item, index) => <ProjectItem key={index} title={item.title} location={item.location ? item.location : ""} time={item.time} content={item.content} />)}
                </Flex>
            </Flex>
        </>
    )
}
export default Projects;