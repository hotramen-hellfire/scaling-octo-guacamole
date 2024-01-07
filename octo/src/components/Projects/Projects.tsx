import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { dataAboutText, dataProjects } from '../../../data';
import ProjectItem from './ProjectItem';
import { FaProjectDiagram } from 'react-icons/fa';

type ProjectsProps = {

};

const Projects: React.FC<ProjectsProps> = () => {
    const [projDone, setProjDone] = useState(false);
    return (
        <>
            <Flex
                width={'90%'}
                zIndex={3}
                borderRadius={10}
                backdropFilter={'blur(40px) contrast(90%)'}
                align={'center'}
                flexDirection={'column'}
                display={dataAboutText ? 'flex' : 'none'}
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
                        fontSize={{ base: 40, md: 50 }}
                        textAlign={'center'}
                        display={projDone ? 'unset' : 'none'}
                    >
                        MERE PROJECTS
                    </Text>
                    <Icon
                        fontSize={40}
                        as={FaProjectDiagram}
                    />
                </Flex>
                <Flex
                    width={'90%'}
                    justify={'center'}
                >
                    <Flex
                        fontFamily={'PWPers'}
                        fontSize={{ base: 40, md: 50 }}
                        display={!projDone ? 'flex' : 'none'}
                    >
                        <Typewriter
                            options={{
                                delay: 250,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('MERE')
                                    .pauseFor(500)
                                typewriter.typeString(' ')
                                    .pauseFor(1000)
                                typewriter.typeString('PROJECTS')
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
                    {dataProjects.map(item => <ProjectItem key={item.title} title={item.title} location={item.location} time={item.time} content={item.content} />)}
                </Flex>
            </Flex>
        </>
    )
}
export default Projects;