import Hero from "../components/Hero";
import Head from "next/head";
import ProjectsList from "../components/ProjectsList";
import SelectedProject from "../components/SelectedProject";
import Contact from "../components/Contact";

export default function Home() {
  const title: string = "Home";
  const helloText: string = `Hi I'm Jahmal`;
  const heroText: string = "Frontend Engineer & Graphic Designer";
  const heroButtonText: string = "The Work";
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
        />
        <ProjectsList />
        <SelectedProject />
        <Contact />
    </>
  );
}
