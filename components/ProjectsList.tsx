/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject, JBProjectType, Project } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
import AnimatedComponent from "./Animated/AnimatedComponent"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button/Button";

const ProjectsList = (): ReactElement => {
  const { projects, setSelectedProject } = usePortfolioContext();
  const pageTite = "Projects";

  const handleUrl = (project: JBProject) => {
    if (!project.url) {
      setSelectedProject(project);
      return;
    }
    window.open(project.url, "_blank");
  };

  return (
    <div
      id="projectList"
      className="min-h-full text-primary font-league-spartan w-full bg-darker py-28">

      <AnimatedComponent>
        <div className="md:top-[calc(var(--nav-height)+2rem)] flex flex-col py-8 h-auto max-w-lg mx-auto">
            <h2
              className="text-5xl tracking-tight font-bold leading-[0.85] uppercase text-white text-center mb-8"
              data-testid="sub-heading">
              {pageTite}
            </h2>
        </div>
      </AnimatedComponent>


      <div className="gap-8 grid md:grid-cols-2 grid-cols-1 mb-8 px-8 max-w-7xl mx-auto">
        {projects.map((item, idx) => (
              <Button 
                text={item.url ? "Go to Link" : "Open details"} 
                onClick={() => {
                  if(item.url){
                    window.open(item.url, "_blank")
                  } else {
                    setSelectedProject(item)
                  }
                }} 
                color="dark" key={idx}>
                <div className="flex flex-col items-center">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={500}
                      height={item.image.height ?? 350}
                      className="!h-auto mb-4"
                    />
                </div>
              </Button>
            ))
            }
        </div>

      
    </div>
  );
};

export default ProjectsList;
