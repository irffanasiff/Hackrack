import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Hackrack</title>
        <meta name='description' content='Developer Students Community' />

        <meta property='og:url' content='https://www.hackrack.in/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Hackrack' />
        <meta property='og:description' content='Hackrack Students Community' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/demonicirfan/image/upload/v1639332721/website_qgq9fb.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='www.hackrack.in' />
        <meta property='twitter:site' content='@hackrack_' />
        <meta property='twitter:creator' content='@demonicirfan' />
        <meta property='twitter:url' content='https://www.hackrack.in/' />
        <meta name='twitter:title' content='Hackrack' />
        <meta
          name='twitter:description'
          content='Hackrack Students Community'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/demonicirfan/image/upload/v1639332721/website_qgq9fb.png'
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
