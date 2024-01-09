import { AccordionButton, AccordionItem, AccordionPanel, Flex, Icon, Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Iframe from 'react-iframe';
import { music } from '../../../interfaces';

type MusicItemProps = {
    music: music,
    index: number
};

const MusicItem: React.FC<MusicItemProps> = ({ music, index }) => {
    const [videoLoad, setVideoLoad] = useState(false);
    const getEmbedUrl = (url: string) => {
        if (url.indexOf('/embed/') > 0) { return url; }
        if (url.indexOf('/watch?v=') > 0) { return url.replace('/watch?v=', '/embed/'); }
        return 'https://youtube.com/embed/' + url.split('/')[3];
    }
    return (<>
        <Flex
            width={'90%'}
            border={'1px solid white'}
            borderRadius={4}
            boxShadow={'xl'}
            _hover={{
                boxShadow: 'dark-lg'
            }}
        >
            <AccordionItem width={'100%'}>
                <AccordionButton
                    width={'100%'}
                    _hover={{
                        bg: 'transparent'
                    }}
                    p={0.2}
                    pl={1}
                    pr={1}
                >
                    <Flex
                        flexDirection={'row'}
                        width={'100%'}
                        flexWrap={'wrap'}
                    >
                        <Text
                            fontFamily={'PencilTypewriter'}
                            fontSize={{ base: 12, md: 16 }}
                            textAlign={'left'}
                            mr={2}
                        >
                            {index + 1}&gt; {music.title}
                        </Text>
                        <Text
                            fontFamily={'PencilTypewriter'}
                            fontSize={{ base: 12, md: 16 }}
                            // width={'100%'}
                            textAlign={'right'}
                        >
                            [{music.artist}]
                        </Text>
                    </Flex>
                    <Icon
                        as={BsChevronDown}
                        fontSize={10}
                    />

                </AccordionButton>
                <AccordionPanel>
                    <Flex
                        width={'100%'}
                        justify={'center'}
                        align={'center'}
                        flexDirection={'column'}
                    >
                        <Text
                            width={'70%'}
                        >
                            {music.comment ? music.comment : ''}
                        </Text>
                        {music.yturl && <Flex
                            border='2px solid white'
                            m={2}
                            w={{ base: '80%', lg: '40%' }}
                            h={{ base: '155px', lg: '256px' }}
                            justify={'center'}
                            align={'center'}
                        >
                            <Spinner
                                size={'xl'}
                                display={!videoLoad ? 'flex' : 'none'}
                            />
                            <Iframe url={getEmbedUrl(music.yturl)}
                                className=""
                                position="relative"
                                width='100%'
                                height='100%'
                                frameBorder={0}
                                onLoad={() => { setVideoLoad(true) }}
                                display={videoLoad ? 'block' : 'none'}
                            />
                        </Flex>
                        }
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Flex >
    </>)
}
export default MusicItem;