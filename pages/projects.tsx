import Head from "next/head";
import { useState, useEffect, Suspense } from "react";
import Body from "../components/Body";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import ProjectsList from "../components/ProjectsList";
import { usePortfolioContext } from "../context/PortfolioContext";
import { JBProject } from "../src/dataTypes";
import { getProjects, getProjectsById } from "../src/projectsService";

export default function Projects() {
  const pageTite = "Projects";

  return (
    <>
      <Head>
        <title>{pageTite}</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <ProjectsList />
      </PageWrapper>
    </>
  );
}
