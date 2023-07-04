import Head from "next/head";

export default function Success() {
    const pageTite = "Success";
  
    return (
      <>
        <Head>
          <title>{pageTite}</title>
          <meta name="description" content="Success" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Success</h1>
      </>
    );
}