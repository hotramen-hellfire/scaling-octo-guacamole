import { AccordionButton, AccordionItem, AccordionPanel, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Iframe from 'react-iframe';
import { music } from '../../../interfaces';

type MusicItemProps = {
    music: music,
    index: number
};

const MusicItem: React.FC<MusicItemProps> = ({ music, index }) => {
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
                >
                    <Flex
                        flexDirection={'column'}
                        width={'100%'}
                    >
                        <Text
                            fontFamily={'PencilTypewriter'}
                            fontSize={20}
                            width={'90%'}
                            textAlign={'left'}
                        >
                            {index + 1}&gt; {music.title}  [{music.artist}]
                        </Text>
                    </Flex>
                    <BsChevronDown />
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
                        >
                            <Iframe url={getEmbedUrl(music.yturl)}
                                id=""
                                className=""
                                display="block"
                                position="relative"
                                width='100%'
                                height='100%'
                                frameBorder={0}
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