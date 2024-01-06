import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { dataAboutText, dataProjects } from '../../../data';
import ProjectItem from './ProjectItem';

type ProjectsProps = {

};

const Projects: React.FC<ProjectsProps> = () => {
    const [projDone, setProjDone] = useState(false);
    return (
        <>
            <Flex
                width={'90%'}
                zIndex={3}
                // border={'1px solid black'}
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
                    width={'90%'}
                    justify={'center'}
                >
                    <Text
                        fontFamily={'PWPers'}
                        fontSize={{ base: 40, md: 50 }}
                        textAlign={'center'}
                        // width={'100%'}
                        display={projDone ? 'unset' : 'none'}
                    >
                        MERE PROJECTS
                    </Text>
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
                    <Image
                        mt={-5}
                        width={100}
                        src='https://media4.giphy.com/media/wKFY1XaNEainm/giphy.gif?cid=ecf05e47bxwpl5g9xoj9umq4byxk1esat0uxazmos27udr2j&ep=v1_gifs_search&rid=giphy.gif&ct=g'
                    />
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
            {/* <iframe width="100%" height="166" scrolling={"no"} frameBorder={"no}" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1099434685&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hiphop-center-promo" title="𝓗𝓲𝓹-𝓗𝓸𝓹 𝓒𝓮𝓷𝓽𝓮𝓻" target="_blank" style="color: #cccccc; text-decoration: none;">𝓗𝓲𝓹-𝓗𝓸𝓹 𝓒𝓮𝓷𝓽𝓮𝓻</a> · <a href="https://soundcloud.com/hiphop-center-promo/2pac-pop-smoke-write-this-down-ft-biggie-dmx-eazy-e-ice-cube-dr-dre-nwa-nipsey-snoop-dogg" title="2Pac, Pop Smoke - Write This Down ft. Biggie, DMX, Eazy E, Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg" target="_blank" style="color: #cccccc; text-decoration: none;">2Pac, Pop Smoke - Write This Down ft. Biggie, DMX, Eazy E, Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg</a></div> */}
        </>
    )
}
export default Projects;