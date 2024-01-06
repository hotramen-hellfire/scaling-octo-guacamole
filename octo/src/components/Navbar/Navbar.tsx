import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsBodyText } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { dataGithubLink, dataNavbarName } from '../../../data';
import { useRouter } from 'next/router';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    return (
        <>
            <Flex
                zIndex={2}
                backdropFilter={'blur(40px)'}
                height="50px"
                overflow={"visible"}
                justify={'space-between'}
                pl={10}
                pr={10}
                align={'center'}
                boxShadow={'2xl'}
                overflowY={'hidden'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                flexDirection={'row'}
                borderRadius={10}
            >
                <Flex
                    justify={'space-between'}
                    align={'center'}
                >
                    <Text
                        fontFamily={'CabinSketch'}
                        fontSize={40}
                        fontWeight={'Bold'}
                        cursor={'pointer'}
                        ml={1}
                        mr={1}
                        zIndex={1}
                        _hover={{
                            fontFamily: 'PWPers',
                            textDecoration: 'underline'
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
                    borderRadius={5}
                    cursor={'pointer'}
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
                                _hover={{
                                    fontFamily: 'PWPers',
                                    textDecoration: 'underline'
                                }}
                                onClick={() => {
                                    router.push('/')
                                }}
                            >
                                HOME
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
                    borderRadius={5}
                    cursor={'pointer'}
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
                                fontSize={30}
                                _hover={{
                                    fontFamily: 'PWPers',
                                    textDecoration: 'underline'
                                }}
                                fontWeight={'Bold'}
                                align="center"
                                onClick={() => {
                                    router.push('/scrapbook')
                                }}
                            >
                                SCRAPBOOK
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
                    borderRadius={5}
                    cursor={'pointer'}
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
                                    _hover={{
                                        fontFamily: 'PWPers',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    CAT
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