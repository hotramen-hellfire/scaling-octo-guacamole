import { Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosSchool } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import { dataAboutText, dataScholastics } from '../../../data';
type SchoolProps = {

};

const School: React.FC<SchoolProps> = () => {
    const [school, setSchool] = useState(false);
    return (
        <>
            <Flex
                width={'90%'}
                zIndex={3}
                borderRadius={10}
                backdropFilter={'blur(40px)'}
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
                        // width={'100%'}
                        display={school ? 'unset' : 'none'}
                    >
                        MY SCHOLASTICS
                    </Text>
                    <Flex
                        fontFamily={'PWPers'}
                        fontSize={50}
                        display={!school ? 'flex' : 'none'}
                    >
                        <Typewriter
                            options={{
                                delay: 250,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('MY')
                                    .pauseFor(500)
                                typewriter.typeString(' ')
                                    .pauseFor(1000)
                                typewriter.typeString('SCHOLASTICS')
                                    .callFunction(() => {
                                        setSchool(true);
                                    })
                                    .start();
                            }}
                        />
                    </Flex>
                </Flex>
                <List
                    fontFamily={'CabinSketch'}
                >
                    {dataScholastics.map(citem => (
                        <ListItem>
                            <Flex
                                width={'100%'}
                                justify={'left'}
                                align={'center'}
                            >
                                <ListIcon as={IoIosSchool} />
                                {citem}
                            </Flex>
                        </ListItem>))}
                </List>
            </Flex>
        </>
    )
}
export default School;