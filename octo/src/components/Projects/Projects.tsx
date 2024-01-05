import { Flex, Text, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { dataAboutText, dataName, dataCityFrom, dataProjects } from '../../../data';
import ProjectItem from './ProjectItem';

type ProjectsProps = {

};

const Projects: React.FC<ProjectsProps> = () => {

    return (
        <>
            <Flex
                width={'90%'}
                zIndex={3}
                border={'1px solid black'}
                borderRadius={10}
                background={'white'}
                // justify={'center'}
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
                    width={'100%'}
                    justify={'center'}
                >
                    <Text
                        fontFamily={'PWPers'}
                        fontSize={50}
                        textAlign={'center'}
                        zIndex={2}
                    >
                        MERE PROJECTS
                    </Text>
                    <Image
                        mt={-5}
                        width={100}
                        src='https://media4.giphy.com/media/wKFY1XaNEainm/giphy.gif?cid=ecf05e47bxwpl5g9xoj9umq4byxk1esat0uxazmos27udr2j&ep=v1_gifs_search&rid=giphy.gif&ct=g'
                    />
                </Flex>
                {dataProjects.map(item => <ProjectItem title={item.title} location={item.location} time={item.time} content={item.content} />)}
            </Flex>
        </>
    )
}
export default Projects;