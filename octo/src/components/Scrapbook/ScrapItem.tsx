import React from 'react';
import { scrap } from '../../../interfaces';
import { Flex, Text, Image, Stack } from '@chakra-ui/react';
import Iframe from 'react-iframe';

type ScrapItemProps = {
    scrap: scrap
};

const ScrapItem: React.FC<ScrapItemProps> = (props) => {
    function toTitleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
            }
        );
    }
    const getEmbedUrl = (url: string) => {
        if (url.indexOf('/embed/') > 0) { return url; }
        if (url.indexOf('/watch?v=') > 0) { return url.replace('/watch?v=', '/embed/'); }
        return 'https://youtube.com/embed/' + url.split('/')[3];
    }
    return (<>
        <Flex
            width={'90%'}
            borderRadius={4}
            boxShadow={'2xl'}
            border={'1px solid white'}
            _hover={{
                boxShadow: 'dark-lg'
            }}
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            p={4}
        >
            <Flex
                width={'100%'}
                pl={2}
                pr={2}
            >
                <Text
                    fontFamily={'PencilTypewriter'}
                    width={'100%'}
                    fontSize={20}
                >
                    [{props.scrap.dateAdded}] {toTitleCase(props.scrap.title)}
                </Text>
            </Flex>
            <Flex
                width={'95%'}
                flexDirection={'column'}
                justify={'center'}
                align={'center'}
            >
                <Text
                    fontFamily={'Unseen'}
                    width={'100%'}
                >
                    <Stack
                        spacing={'6px'}
                    >
                        {props.scrap.text.map((item, index) => (
                            <>
                                <Text
                                    key={index}
                                >
                                    {item}
                                </Text>
                            </>
                        ))}
                    </Stack>
                </Text>
            </Flex>
            {props.scrap.image &&
                <Flex
                    width={'100%'}
                    justify={'center'}
                    align={'center'}
                    p={6}
                >
                    <Image
                        maxWidth={'80%'}
                        maxH={'250px'}
                        border={'2px solid white'}
                        src={props.scrap.image}
                    />
                </Flex>
            }
            {props.scrap.yturl && <Flex
                border='2px solid white'
                w={{ base: '80%', lg: '40%' }}
                h={{ base: '155px', lg: '250px' }}
            >
                <Iframe url={getEmbedUrl(props.scrap.yturl)}
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
    </>)
}
export default ScrapItem;