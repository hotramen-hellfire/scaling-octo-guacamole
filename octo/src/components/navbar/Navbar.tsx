import { Flex, Text, Image } from '@chakra-ui/react';
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
                // height="44px"
                padding="6px 12px"
                overflow={"visible"}
                justify={'space-evenly'}
                align={'center'}
                boxShadow={'2xl'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
                flexDirection={'row'}
            >
                {/* <Text
                    color={'white'}
                >
                    卄丨爪卂几丂卄ㄩ
                </Text> */}
                <Image
                    src=''
                />
            </Flex>

        </>
    )
}
export default Navbar;