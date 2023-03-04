import Head from "next/head";
import { useEffect } from "react";
import ProjectsList from "../components/ProjectsList";
import { usePortfolioContext } from "../context/PortfolioContext";
import { getProjects } from "../src/projectsService";

export default function Projects() {
  const pageTite = "Projects";
  const {setProjects, setIsLoaded} = usePortfolioContext();

  useEffect( () => {
    getProjects().then( data => {
        setProjects(data.projects);
        setIsLoaded(true);
    })
  }, [])

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
