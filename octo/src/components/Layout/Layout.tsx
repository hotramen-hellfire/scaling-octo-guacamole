import React from 'react';
// import Navbar from "../Navbar/Navbar"
import { Flex } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
// import { bgState } from '../Atoms/bgAtom';
type LayoutProps = {
    children: any;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
    // const bgLink = useRecoilValue(bgState)
    // const bgLink = ''
    return (
        <>
            <Flex
                width={'100vw'}
                minHeight={'100vh'}
                flexDirection={'column'}
                // bgImage={bgLink}
                background={'black'}
                backgroundAttachment={  /* button {
      border: none;
      background: none;
      font-size: 2.778vh;
      z-index: 2;
  } */'fixed'}
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