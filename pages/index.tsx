import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  const title: string = "Home";
  const helloText: string = `Hi I'm Jahmal`;
  const heroText: string = "Frontend Engineer & Designer";
  const heroButtonText: string = "The Work";
  const bgWords: string[] = ["FrontEnd", "Developer", "Designer"];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={helloText}
        subTitle={heroText}
        buttonText={heroButtonText}
        bgText={bgWords}
      />
    </>
  );
}
