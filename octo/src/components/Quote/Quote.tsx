import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type QuoteProps = {
    text: string,
    author: string
};

const Quote: React.FC<QuoteProps> = ({ text, author }) => {

    return (
        <>
            <Flex
                mt={2}
                mb={2}
                w={'70%'}
                flexDirection={'column'}
                fontSize={30}
                // border={'1px solid black'}
                p={2}
                borderRadius={3}
            >
                <Text
                    fontFamily={'Unseen'}
                    width={'100%'}
                >
                    /randomQuote/ {text}
                </Text>
                <Text
                    fontFamily={'Unseen'}
                    textAlign={'right'}
                    width={'100%'}
                    flexGrow={1}
                >
                    ~{author}
                </Text>

            </Flex>
        </>
    )
}
export default Quote;