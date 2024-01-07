import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { dataNavbarName } from '../../data';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/scss/shootingstar.scss';
import '../styles/snow.css';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Head >
          <title>
            {dataNavbarName}
          </title>
          <link rel="icon" href="/leaf.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot >
  )
};

export default App;