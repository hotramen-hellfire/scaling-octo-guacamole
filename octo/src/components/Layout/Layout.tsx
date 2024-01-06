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
                // background={'white'}
                backgroundImage={'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWdraXJ5dGp2YmJtZ2l5MXZxdzJwZ3NiNDgxemQ5MHdydjZ1Yng4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rcFs59ww1R7yeFszmo/giphy.gif'}
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