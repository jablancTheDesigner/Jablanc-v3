import Head from "next/head";
import { useEffect } from "react";
import ProjectsList from "../components/ProjectsList";
import { usePortfolioContext } from "../context/PortfolioContext";
import { getProjects } from "../src/projectsService";
import MasonryLayout from "react-masonry-layout";

export default function Projects() {
  const pageTite = "Projects";

  return (
    <>
      <Head>
        <title>{pageTite}</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsList />
    </>
  );
}
