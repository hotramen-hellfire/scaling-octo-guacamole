import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { dataAboutImage, dataAboutText, dataCityFrom, dataName } from '../../../data';
type AboutsProps = {

};

const Abouts: React.FC<AboutsProps> = () => {
    const [abtDone, setAbtDone] = useState(false);
    const [color, setColor] = useState(false);
    return (
        <>
            <Flex
                id='abouts'
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
                onMouseEnter={() => { setColor(true) }}
                onMouseLeave={() => { setColor(false) }}
            >
                <Text
                    fontFamily={'PWPers'}
                    fontSize={50}
                    textAlign={'center'}
                    width={'100%'}
                    display={abtDone ? 'unset' : 'none'}
                >
                    ABOUT ME
                </Text>
                <Flex
                    fontFamily={'PWPers'}
                    fontSize={50}
                    display={!abtDone ? 'flex' : 'none'}
                >
                    <Typewriter
                        options={{
                            delay: 250,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('ABOUT')
                                .pauseFor(500)
                            typewriter.typeString(' ')
                                .pauseFor(1000)
                            typewriter.typeString('ME')
                                .callFunction(() => {
                                    setAbtDone(true);
                                })
                                .start();
                        }}
                    />
                </Flex>
                <Text
                    width={'80%'}
                    textAlign={'center'}
                    fontFamily={'Unseen'}
                    mr={1}
                    ml={1}
                >
                    {dataAboutText}
                </Text>
                <Flex
                    width={'100%'}
                    align={'center'}
                    justify={'center'}
                    p={2}
                    pt={10}
                >
                    <Image
                        src={dataAboutImage}
                        maxHeight={'300px'}
                        border={'3px solid white'}
                        filter={color ? 'none' : 'grayscale(100%)'}
                        transition={'filter 1000ms linear'}
                    />

                </Flex>
                <Text
                    mt={2}
                    width={'90%'}
                    fontFamily={'PencilSRB'}
                    textAlign={'right'}
                >
                    {dataName}<br />{dataCityFrom.toUpperCase()}
                </Text>
            </Flex >
        </>
    )
}
export default Abouts;