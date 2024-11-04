import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const Hero = dynamic(() => import("../components/Hero"));
const ProjectsList = dynamic(() => import("../components/ProjectsList"));
const SelectedProject = dynamic(() => import("../components/SelectedProject"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  const title: string = "Home";
  const helloText: string = `Hi I'm Jahmal`;
  const heroText: string = "Hi, I'm Jahmal. Frontend Engineer & Designer";
  const heroButtonText: string = "The Work";

  useEffect(() => {
    return () => {
      console.log("Page load ====>", performance.now());
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top"></div>
      <Hero title={helloText} subTitle={heroText} buttonText={heroButtonText} />
      <ProjectsList />
      <SelectedProject />
      <Contact />
      <GoogleAnalytics gaId="G-X4T8G0YSWL" />
    </>
  );
}
