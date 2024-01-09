import { Flex, Icon, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiSchoolOfFish } from 'react-icons/gi';
import { IoIosSchool } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import { dataScholastics } from '../../../data';
type SchoolProps = {

};

const School: React.FC<SchoolProps> = () => {
    const [school, setSchool] = useState(false);
    return (
        <>
            <Flex
                width={'100%'}
                zIndex={3}
                borderRadius={10}
                backdropFilter={'blur(40px) contrast(90%)'}
                align={'center'}
                flexDirection={'column'}
                display={dataScholastics ? 'flex' : 'none'}
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
                    <Icon
                        fontSize={{ base: 20, md: 40 }}
                        as={GiSchoolOfFish}
                        mr={2}
                    />
                    <Text
                        fontFamily={'PWPers'}
                        fontSize={{ base: 22, md: 50 }}
                        textAlign={'center'}
                        display={school ? 'unset' : 'none'}
                    >
                        SCHOOL
                    </Text>
                </Flex>
                <Flex
                    width={'90%'}
                    justify={'center'}
                >
                    <Flex
                        fontFamily={'PWPers'}
                        fontSize={{ base: 22, md: 50 }}
                        textAlign={'center'}
                        display={!school ? 'flex' : 'none'}
                        justify={'center'}
                    >
                        <Typewriter
                            options={{
                                delay: 250,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('SCHOOL')
                                    .pauseFor(500)
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
                    width={'90%'}
                >
                    {dataScholastics.map(citem => (
                        <ListItem
                            key={citem}
                        >
                            <Flex
                                width={'100%'}
                                justify={'left'}
                                align={'top'}
                                fontSize={{ base: 10, md: 15 }}
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