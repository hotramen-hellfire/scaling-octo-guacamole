import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

    return (<>
        <Flex
            zIndex={2}
            backdropFilter={'blur(40px)'}
            // height="50px"
            overflow={"visible"}
            justify={'center'}
            pl={10}
            pr={10}
            align={'center'}
            boxShadow={'2xl'}
            overflowY={'hidden'}
            _hover={{
                boxShadow: 'dark-lg'
            }}
            flexDirection={'row'}
            border={'1px solid white'}
        >
            <Text
                fontSize={{ base: 6, md: 10 }}
                textAlign={'center'}
            >
                The source code for this website is availible on
                <Link
                    href='https://github.com/hotramen-hellfire/scaling-octo-guacamole'
                    target='_blank'
                > https://github.com/hotramen-hellfire/scaling-octo-guacamole
                </Link>, this website if designed to be easily customizable for anynone who wants to use it, directions are provided on the same page.
            </Text>
        </Flex>
    </>)
}
export default Footer;