import Head from 'next/head';
import Layout from '../src/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackrack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout />
    </div>
  );
}
