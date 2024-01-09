import Cube from '@/components/Layout/Cube';
import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { dataNavbarName } from '../../data';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/scss/cubeload.scss';
import '../styles/scss/shootingstar.scss';
import '../styles/snow.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const Loader = () => (
  <>
    <Flex
      align={'center'}
      pt={'50vh'}
      height={'100%'}
      width={'100%'}
      backdropFilter={'blur(20px)'}
      position={'absolute'}
      bg={'transparent'}
      zIndex={10000}
      flexDirection={'column'}
    >
      <Text
        fontSize={{ base: 50, md: 70 }}
        fontFamily={'PWPers'}
        color={'white'}
        position={'absolute'}
        top={'100'}
      >
        LOADING
      </Text>
      <Cube />
    </Flex>
  </>
);
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => setLoading(true);
    const handleComplete = (url: string) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Head >
          <title>
            {dataNavbarName}
          </title>
          <link rel="icon" href="/leaf.png" />
        </Head>
        {loading && <Loader />}
        {/* <Loader /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot >
  )
};

export default App;