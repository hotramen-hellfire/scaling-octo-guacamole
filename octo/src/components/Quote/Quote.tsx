import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

type QuoteProps = {
    text: string,
    author: string,
    loading: boolean
};

const Quote: React.FC<QuoteProps> = ({ text, author, loading }) => {

    return (
        <>
            <Flex
                zIndex={1}
                mt={2}
                mb={2}
                w={'100%'}
                flexDirection={'column'}
                fontSize={{ base: 15, md: 30 }}
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                borderRadius={10}
                backdropBlur={'10px'}
                backdropFilter={'blur(20px) contrast(90%)'}
                border={'2px dotted white'}
                align={'center'}
            >
                <Spinner
                    size={'xl'}
                    display={loading ? 'flex' : 'none'}
                />
                <Text
                    fontFamily={'Unseen'}
                    width={'100%'}
                    display={!loading ? 'unset' : 'none'}
                >
                    /randomQuote/ {text}
                </Text>
                <Text
                    fontFamily={'Unseen'}
                    textAlign={'right'}
                    width={'100%'}
                    flexGrow={1}
                    display={!loading ? 'unset' : 'none'}
                >
                    ~{author}
                </Text>

            </Flex>
        </>
    )
}
export default Quote;