import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import ProjectsList from "../components/ProjectsList";
import SelectedProject from "../components/SelectedProject";
import Contact from "../components/Contact";

export default function Home() {
  const title: string = "Home";
  const helloText: string = `Hi I'm Jahmal`;
  const heroText: string = "Frontend Engineer & Graphic Designer";
  const heroButtonText: string = "The Work";
  const bgWords: string[] = ["FrontEnd", "Developer", "Designer", "Engineer"];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top"></div>
      <Hero
          title={helloText}
          subTitle={heroText}
          buttonText={heroButtonText}
          bgText={bgWords}
        />
        <ProjectsList />
        <SelectedProject />
        <Contact />
    </>
  );
}
