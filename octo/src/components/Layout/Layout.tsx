import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Snow from './Snow';
import { fontColorState } from '../Atoms/fontColorAtom';
import { useRecoilState } from 'recoil';
import { dataDesktopBGLink, dataMobileBGLink } from '../../../data';
import Footer from '../Footer/Footer';
type LayoutProps = {
    children: any;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [fontColor, setFontColor] = useRecoilState(fontColorState);
    return (
        <>
            <Snow />
            <Flex
                width={'100vw'}
                minHeight={'100vh'}
                flexDirection={'column'}
                backgroundImage={{
                    base: dataMobileBGLink,
                    md: dataDesktopBGLink
                }}
                backgroundAttachment={'fixed'}
                backgroundSize={'cover'}
                backgroundRepeat={'no-repeat'}
                overflowX={'hidden'}
                overflowY={'hidden'}
                backgroundPosition={'center'}
                color={fontColor}
            >
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </Flex>
        </>
    );
};
export default Layout;