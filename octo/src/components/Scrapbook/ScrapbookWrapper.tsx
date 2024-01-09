import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiEvilBook } from 'react-icons/gi';
import Typewriter from 'typewriter-effect';
import { dataScraps } from '../../../data';
import ScrapItem from './ScrapItem';

type ScrapbookWrapperProps = {

};

const ScrapbookWrapper: React.FC<ScrapbookWrapperProps> = () => {
    const [scrapDone, setScrapDone] = useState(false);
    return (
        <>
            <Flex
                id='scraps'
                zIndex={3}
                width={'100%'}
                borderRadius={10}
                backdropFilter={'blur(40px) contrast(90%)'}
                align={'center'}
                flexDirection={'column'}
                display={dataScraps ? 'flex' : 'none'}
                pb={2}
                boxShadow={'2xl'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
            >
                <Flex
                    align={'center'}
                    justify={'center'}
                    width={'100%'}
                >
                    <Text
                        fontFamily={'PWPers'}
                        display={scrapDone ? 'unset' : 'none'}
                        textAlign={'center'}
                        fontSize={{ base: 22, md: 50 }}
                    >
                        SCRAPBOOK
                    </Text>
                    <Icon
                        fontSize={40}
                        as={GiEvilBook}
                    />
                </Flex>
                <Flex
                    fontFamily={'PWPers'}
                    display={!scrapDone ? 'flex' : 'none'}
                    textAlign={'center'}
                    fontSize={{ base: 22, md: 50 }}
                >
                    <Typewriter
                        options={{
                            delay: 100,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('SCRAPBOOK')
                                .pauseFor(1000)
                                .callFunction(() => {
                                    setScrapDone(true);
                                })
                                .start();
                        }}
                    />
                </Flex>

                <Stack
                    width={'100%'}
                    justify={'center'}
                    align={'center'}
                >
                    {dataScraps.map((item, index) => <ScrapItem scrap={item} key={index}></ScrapItem>)}
                </Stack>
            </Flex >
        </>
    )
}
export default ScrapbookWrapper;