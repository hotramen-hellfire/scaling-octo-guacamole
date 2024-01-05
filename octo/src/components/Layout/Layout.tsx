import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import Snow from './Snow';
type LayoutProps = {
    children: any;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Snow />
            <Flex
                width={'100vw'}
                minHeight={'100vh'}
                flexDirection={'column'}
                background={'white'}
                backgroundAttachment={'fixed'}
                backgroundSize={'cover'}
                backgroundRepeat={'no-repeat'}
                overflowX={'hidden'}
                overflowY={'hidden'}
                backgroundPosition={'center'}
            >
                <Navbar />
                <main>
                    {children}
                </main>
            </Flex>
        </>
    );
};
export default Layout;