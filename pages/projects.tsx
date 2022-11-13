import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectsList from "../components/ProjectsList";
import { JBProject } from "../src/dataTypes";
import { getProjects } from "../src/projectsService";

export default function Projects() {
  const [projects, setProjects] = useState<JBProject[]>(getProjects());
  const pageTite = "Projects";
  const pageSubTitle =
    "No project is too small nor too big for ya bwoy! Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.";

  return (
    <>
      <Head>
        <title>{pageTite}</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsList
        projects={projects}
        title={pageTite}
        subTitle={pageSubTitle}
      />
    </>
  );
}
