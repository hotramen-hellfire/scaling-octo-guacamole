import { Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GiSpellBook } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";
import { SiHomebrew } from "react-icons/si";
import { dataNavbarName } from '../../../data';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    const [inLogo, setInLogo] = useState(false);
    const { asPath } = useRouter();
    return (
        <>
            <Flex
                zIndex={2}
                backdropFilter={'blur(40px)'}
                height="50px"
                overflow={"visible"}
                justify={'space-between'}
                pl={{ base: 0, md: 2 }}
                pr={{ base: 0, md: 2 }}
                align={'center'}
                boxShadow={'2xl'}
                overflowY={'hidden'}
                overflowX={'hidden'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                flexDirection={'row'}
                borderRadius={2}
            >
                <Flex
                    justify={'space-between'}
                    align={'center'}
                    onMouseEnter={() => { setInLogo(true); }}
                    onMouseLeave={() => { setInLogo(false); }}
                >
                    <Link
                        href='https://github.com/hotramen-hellfire/scaling-octo-guacamole'
                        target='_blank'
                    >
                        <Image
                            display={!inLogo ? 'flex' : 'none'}
                            src='/leaf.png'
                            width={7}
                        />
                        <Image
                            display={inLogo ? 'flex' : 'none'}
                            src='/palm.png'
                            width={10}
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
                        {dataNavbarName.toUpperCase()}
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
                    align="center"
                    justify="center"
                    pl={2}
                    pr={2}
                    pt={2}
                    pb={2}
                    borderRadius={5}
                    onClick={() => {
                        router.push('/#contacts')
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
                                fontFamily={asPath === '/info' ? 'PWPers' : 'CabinSketch'}
                                display={{ base: 'none', md: 'flex' }}
                                fontSize={30}
                                _hover={{
                                    fontFamily: 'PWPers',
                                    textDecoration: 'underline'
                                }}
                                fontWeight={'Bold'}
                                align="center"
                            >
                                CONTACT
                            </Text>
                        </Flex>
                        <Icon fontSize={22} ml={1} mr={{ base: 1, md: 1 }} as={RiContactsLine} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
export default Navbar;