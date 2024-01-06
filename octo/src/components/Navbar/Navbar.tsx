import { Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaCat } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { SiHomebrew } from "react-icons/si";
import { dataGithubLink, dataNavbarName } from '../../../data';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    const { asPath } = useRouter();
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
                    <Link
                        href='https://github.com/hotramen-hellfire/scaling-octo-guacamole'
                        target='_blank'
                    >
                        <Image
                            src='/leaf.png'
                            width={7}
                        />
                    </Link>
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
                        onClick={() => {
                            router.push('/')
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
                    onClick={() => {
                        router.push('/')
                    }}
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
                                display={{ base: 'none', md: 'flex' }}
                                fontFamily={asPath === '/' ? 'PWPers' : 'CabinSketch'}
                                fontSize={30}
                                fontWeight={'Bold'}
                                align="center"
                                _hover={{
                                    fontFamily: 'PWPers',
                                    textDecoration: 'underline'
                                }}
                            >
                                HOME
                            </Text>
                        </Flex>
                        <Icon fontSize={24} ml={1} mr={{ base: 1, md: 1 }} display={asPath === '/' ? 'none' : 'flex'} as={SiHomebrew} />
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
                    onClick={() => {
                        router.push('/scrapbook')
                    }}
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
                                fontFamily={asPath === '/scrapbook' ? 'PWPers' : 'CabinSketch'}
                                display={{ base: 'none', md: 'flex' }}
                                fontSize={30}
                                _hover={{
                                    fontFamily: 'PWPers',
                                    textDecoration: 'underline'
                                }}
                                fontWeight={'Bold'}
                                align="center"
                            >
                                SCRAPBOOK
                            </Text>
                        </Flex>
                        <Icon fontSize={26} ml={1} mr={{ base: 1, md: 1 }} display={asPath === '/scrapbook' ? 'none' : 'flex'} as={GiSpellBook} />
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
                                    display={{ base: 'none', md: 'flex' }}
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