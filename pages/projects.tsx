import Head from "next/head";
import Layout from "../components/Layout";
import ProjectsList from "../components/ProjectsList";

export default function Projects(){
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectsList />
        </>
    )
}