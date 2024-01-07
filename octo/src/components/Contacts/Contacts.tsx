import { Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { ImInstagram } from "react-icons/im";
import { MdOutlineEmail } from 'react-icons/md';
import Typewriter from 'typewriter-effect';
import { dataAboutText, dataEmail, dataGithubLink, dataInstagramUsername } from '../../../data';
type AboutsProps = {

};

const Contacts: React.FC<AboutsProps> = () => {
    const [contactsDone, setContactsDone] = useState(false);
    return (
        <>
            <Flex
                id='contacts'
                zIndex={3}
                width={'90%'}
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
                justify={'center'}
            >
                <Text
                    fontFamily={'PWPers'}
                    fontSize={50}
                    textAlign={'center'}
                    width={'100%'}
                    display={contactsDone ? 'unset' : 'none'}
                >
                    CONTACTS
                </Text>
                <Flex
                    fontFamily={'PWPers'}
                    fontSize={50}
                    display={!contactsDone ? 'flex' : 'none'}
                >
                    <Typewriter
                        options={{
                            delay: 250,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('CONTACTS')
                                .pauseFor(500)
                                .callFunction(() => {
                                    setContactsDone(true);
                                })
                                .start();
                        }}
                    />
                </Flex>
                <Stack
                    display={'flex'}
                    width={'100%'}
                    align={'center'}
                >
                    <Flex
                        width={'80%'}
                        justify={'center'}
                        align={'center'}
                    >
                        <Link href={dataGithubLink} target='_blank' display={'flex'} alignItems={'center'}>
                            <Icon
                                as={FaGithubAlt}
                                fontSize={30}
                            />
                            <Text
                                fontFamily={'Unseen'}
                                mr={1}
                                ml={1}
                                display={dataGithubLink}
                            >
                                GitHub: {dataGithubLink}
                            </Text>
                        </Link>
                    </Flex>
                    <Flex
                        width={'80%'}
                        justify={'center'}
                        align={'center'}
                    >        <Link href="mailto:geeksforgeeks@gmail.com" display={'flex'} alignItems={'center'}>
                            <Icon
                                as={MdOutlineEmail}
                                fontSize={30}
                            />
                            <Text
                                fontFamily={'Unseen'}
                                mr={1}
                                ml={1}
                                display={dataEmail}
                            >
                                Email: {dataEmail}
                            </Text>
                        </Link>
                    </Flex>
                    <Flex
                        width={'80%'}
                        justify={'center'}
                        align={'center'}
                    >
                        <Link
                            href={'https://www.instagram.com/' + dataInstagramUsername}
                            display={'flex'}
                            target='_blank'
                            alignItems={'center'}
                        >
                            <Icon
                                as={ImInstagram}
                                fontSize={22}
                            />
                            <Text
                                fontFamily={'Unseen'}
                                mr={1}
                                ml={1}
                                display={dataEmail}
                            >
                                {dataInstagramUsername}
                            </Text>
                        </Link>
                    </Flex>
                </Stack>
            </Flex >
        </>
    )
}
export default Contacts;