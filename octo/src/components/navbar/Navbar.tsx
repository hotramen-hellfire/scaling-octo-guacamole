import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <>
            <Flex
                zIndex={1}
                backdropFilter={'blur(40px)'}
                border="1px solid white"
                height="44px"
                padding="6px 12px"
                overflow={"visible"}
                justify={'space-evenly'}
                align={'center'}
                boxShadow={'2xl'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
            >
                <Text
                    color={'white'}
                    fontFamily={'fantasy'}
                    fontWeight={10}
                >
                    HIMANSHU
                </Text>

            </Flex>
        </>
    )
}
export default Navbar;