import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  const title: string = "Home";
  const helloText: string = `Hi I'm Jahmal`;
  const heroText: string = "Developer & Designer";
  const heroButtonText: string = "The Work";
  const bgWords: string[] = ["FrontEnd", "Developer", "Designer", "Engineer"];
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
