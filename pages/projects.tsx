import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectsList from "../components/ProjectsList";
import { Project } from "../src/project";
import { getProjects } from "../src/projectsService";

export default function Projects(){

    const [projects, setProjects] = useState<Project[]>(getProjects())

    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectsList data={projects} />
        </>
    )
}
