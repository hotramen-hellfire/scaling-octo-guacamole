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
            borderRadius={10}
        >
            <Text
                fontSize={10}
            >
                The source code for this website is availible on
                <Link
                    href='https://github.com/hotramen-hellfire/scaling-octo-guacamole'
                > https://github.com/hotramen-hellfire/scaling-octo-guacamole </Link>
                most of the data here can be modified using the data.tsx file in root the of project.
            </Text>
        </Flex>
    </>)
}
export default Footer;