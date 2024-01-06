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
                fontSize={{ base: 20, md: 30 }}
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                borderRadius={10}
                backdropBlur={'10px'}
                backdropFilter={'blur(20px) contrast(90%)'}
                border={'1px solid white'}
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