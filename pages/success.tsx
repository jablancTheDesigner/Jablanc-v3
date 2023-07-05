import Head from "next/head";
import Link from "next/link";

export default function Success() {
    const pageTite = "Success";
  
    return (
      <>
        <Head>
          <title>{pageTite}</title>
          <meta name="description" content="Success" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-dark flex items-center justify-center h-full">
            <div className="w-full max-w-sm bg-darker p-8 text-center">
                <h1 className="text-4xl text-white">Success</h1>
                <p>Thank you for your submission</p>
                <Link href="/">
                    <button className="app-button mt-4">Back to Home</button>
                </Link>
            </div>
        </div>
      </>
    );
}