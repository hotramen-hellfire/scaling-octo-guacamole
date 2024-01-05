import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { dataAboutText, dataName } from '../../../data';
type AboutsProps = {

};

const Abouts: React.FC<AboutsProps> = () => {

    return (
        <>
            <Flex
                width={'90%'}
                border={'1px solid black'}
                borderRadius={10}
                background={'white'}
                // justify={'center'}
                boxShadow={'2xl'}
                align={'center'}
                flexDirection={'column'}
                display={dataAboutText ? 'flex' : 'none'}
                pb={2}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
            >
                <Text
                    fontFamily={'PWPers'}
                    fontSize={50}
                    textAlign={'center'}
                    width={'100%'}
                >
                    ABOUT ME
                </Text>
                <Text
                    width={'80 %'}
                    textAlign={'center'}
                    fontFamily={'Unseen'}
                    mr={1}
                    ml={1}
                >
                    {dataAboutText}
                </Text>
                <Text
                    mt={2}
                    width={'90%'}
                    fontFamily={'PencilSRB'}
                    textAlign={'right'}
                >
                    {dataName}
                </Text>
            </Flex>
        </>
    )
}
export default Abouts;