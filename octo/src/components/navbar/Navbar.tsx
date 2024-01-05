import { Flex, Image, Icon, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { BsBodyText } from "react-icons/bs";
import { GiSpellBook } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { dataNavbarName, dataName, dataGithubLink } from '../../../data';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <>
            <Flex
                zIndex={2}
                backdropFilter={'blur(40px)'}
                border="1px solid black"
                height="50px"
                overflow={"visible"}
                justify={'space-evenly'}
                align={'center'}
                boxShadow={'2xl'}
                overflowY={'hidden'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                flexDirection={'row'}
                borderRadius={10}
                color={'black'}
            >
                <Flex
                    justify={'space-between'}
                    width={'100px'}
                    align={'center'}
                >
                    <Image
                        src='https://i.giphy.com/1k889fiqiZV19HO2sx.webp'
                        height={'45px'}
                    />
                    <Text
                        fontFamily={'CabinSketch'}
                        fontSize={40}
                        fontWeight={'Bold'}
                        cursor={'pointer'}
                        ml={1}
                        mr={1}
                        zIndex={1}
                        _hover={{
                            border: '1px solid white',
                            color: 'orange.500',
                        }}
                    >
                        {dataNavbarName}
                    </Text>
                </Flex>
                <Flex
                    align="center"
                    justify="center"
                    pl={2}
                    pr={2}
                    pt={2}
                    pb={2}
                    color={'black'}
                    _hover={{
                        border: '1px solid white',
                        color: 'blue',
                    }}
                    borderRadius={5}
                    cursor={'pointer'}
                    height={'38px'}
                >
                    <Flex
                        height={'100%'}
                        width={'100%'}
                        align="center"
                        justify={'center'}
                        overflow={'hidden'}
                    >
                        <Flex
                            height={'100%'}
                            width={'100%'}
                            align="center"
                            justify={'center'}
                        >
                            <Text
                                fontFamily={'CabinSketch'}
                                fontSize={30}
                                fontWeight={'Bold'}
                                align="center"
                            >
                                about
                            </Text>
                        </Flex>
                        <Icon fontSize={24} ml={1} mr={{ base: 1, md: 1 }} as={BsBodyText} />
                    </Flex>
                </Flex>
                <Flex
                    align="center"
                    justify="center"
                    pl={2}
                    pr={2}
                    pt={2}
                    pb={2}
                    color={'black'}
                    _hover={{
                        border: '1px solid white',
                        color: 'pink.500',
                    }}
                    borderRadius={5}
                    cursor={'pointer'}
                    height={'38px'}
                >
                    <Flex
                        height={'100%'}
                        width={'100%'}
                        align="center"
                        justify={'center'}
                    >
                        <Flex
                            height={'100%'}
                            width={'100%'}
                            align="center"
                            justify={'center'}
                        >
                            <Text
                                fontFamily={'CabinSketch'}
                                fontSize={30}                            // justify={'center'}

                                fontWeight={'Bold'}
                                align="center"
                            >
                                scrapbook
                            </Text>
                        </Flex>
                        <Icon fontSize={26} ml={1} mr={{ base: 1, md: 1 }} as={GiSpellBook} />
                    </Flex>
                </Flex>
                <Flex
                    display={dataGithubLink ? 'flex' : 'none'}
                    align="center"
                    justify="center"
                    pl={2}
                    pr={2}
                    pt={2}
                    pb={2}
                    color={'black'}
                    _hover={{
                        border: '1px solid white',
                        color: 'green.500',
                    }}
                    borderRadius={5}
                    cursor={'pointer'}
                    height={'38px'}
                >
                    <Link
                        href='https://github.com/hotramen-hellfire'
                        target='blank'
                    >
                        <Flex
                            height={'100%'}
                            width={'100%'}
                            align="center"
                            justify={'center'}
                        >
                            <Flex
                                height={'100%'}
                                width={'100%'}
                                align="center"
                                justify={'center'}
                            >

                                <Text
                                    fontFamily={'CabinSketch'}
                                    fontSize={30}                            // justify={'center'}
                                    fontWeight={'Bold'}
                                    align="center"
                                >
                                    cat
                                </Text>
                            </Flex>
                            <Icon fontSize={26} ml={1} mr={{ base: 1, md: 1 }} as={FaCat} />
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}
export default Navbar;