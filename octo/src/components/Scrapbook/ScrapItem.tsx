import { Flex, Image, Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { scrap } from '../../../interfaces';

type ScrapItemProps = {
    scrap: scrap
};

const ScrapItem: React.FC<ScrapItemProps> = (props) => {
    const [videoLoad, setVideoLoad] = useState(false);
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
                    fontSize={{ base: 15, md: 20 }}
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
                <Stack
                    spacing={'4px'}
                    width={'100%'}
                    fontFamily={'Unseen'}
                    fontSize={{ base: 10, md: 16 }}
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
            </Flex>
            {props.scrap.image &&
                <Flex
                    width={'100%'}
                    justify={'center'}
                    align={'center'}
                    p={6}
                >
                    {/* <Spinner
                        size={'xl'}
                        display={!photoLoad ? 'flex' : 'none'}
                    /> */}
                    <Image
                        maxWidth={'80%'}
                        maxH={'250px'}
                        border={'2px solid white'}
                        // onLoad={() => { setPhotoLoad(true) }}
                        // // display={photoLoad ? 'flex' : 'none'}
                        src={props.scrap.image}
                    />
                </Flex>
            }
            {props.scrap.yturl && <Flex
                border='2px solid white'
                w={{ base: '80%', lg: '40%' }}
                h={{ base: '155px', lg: '250px' }}
                mt={6}
                justify={'center'}
                align={'center'}
            >
                <Spinner
                    size={'xl'}
                    display={!videoLoad ? 'flex' : 'none'}
                />
                <Iframe url={getEmbedUrl(props.scrap.yturl)}
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
    </>)
}
export default ScrapItem;