import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}
