/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject, JBProjectType, Project } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
import dynamic from 'next/dynamic';
import AnimatedComponent from "./Animated/AnimatedComponent";
import AnimatedHeader from "./Animated/AnimatedHeader";

const Masonry = dynamic(() => import('react-masonry-list'), {
  ssr: false,
});

const ProjectsList = (): ReactElement => {
  const { 
    projects, 
    setSelectedProject, 
  } = usePortfolioContext();
  const pageTite = "Client Work & Projects";

  const handleUrl = (project: JBProject) => {
    if(!project.url){
      setSelectedProject(project)
      return 
    }
    window.open(project.url, "_blank");
  }

  return (
      <div id="projectList" className="min-h-full flex text-primary font-league-spartan w-full bg-primary py-28">
        <div className="container mx-auto px-4 relative max-w-3xl">
          <div className="gap-4 flex-col mb-8">
            <AnimatedComponent>
              <div className="md:top-[calc(var(--nav-height)+2rem)] flex flex-col py-8 h-auto max-w-lg mx-auto">
                  <div className="md:mb-auto text-6xl md:ml-0 lg:text-left text-center max-w-xl mx-auto">
                    <AnimatedHeader title={pageTite}></AnimatedHeader>
                  </div>
                </div>
            </AnimatedComponent>

            <div className="flex flex-col divide-y-2 divide-darker justify-center">
              {projects.map((item) => (
                  <motion.button 
                      key={item.id} 
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1], offset: 100 }}
                      exit={{ scale: [1, 0], offset: 100 }}
                      onClick={() => handleUrl(item)}
                      className={`py-8 text-3xl font-semibold text-darker hover:text-white cursor-pointer text-center w-full leading-snug max-w-xl mx-auto`} >
                          {item.title}
                  </motion.button>
                ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectsList;
