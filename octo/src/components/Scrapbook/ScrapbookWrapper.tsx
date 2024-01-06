import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
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
                width={'90%'}
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
                <Text
                    fontFamily={'PWPers'}
                    fontSize={50}
                    textAlign={'center'}
                    width={'100%'}
                    display={scrapDone ? 'unset' : 'none'}
                >
                    SCRAPBOOK
                </Text>
                <Flex
                    fontFamily={'PWPers'}
                    fontSize={50}
                    display={!scrapDone ? 'flex' : 'none'}
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
                    {dataScraps.map(item => <ScrapItem scrap={item} key={item.text.concat(item.title)}></ScrapItem>)}
                </Stack>
            </Flex >
        </>
    )
}
export default ScrapbookWrapper;