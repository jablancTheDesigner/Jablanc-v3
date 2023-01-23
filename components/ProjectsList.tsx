import { ReactElement, Suspense, useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
import ProjectCard from "./ProjectCard";
import SelectedProject from "./SelectedProject";

const ProjectsList = (): ReactElement => {
  const { 
    projects, 
    selectedProject, 
    setSelectedProject, 
    setOpenProject 
  } = usePortfolioContext();
  const pageTite = "Projects";
  const pageSubTitle = "Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.";

  const handleSelect = (project: JBProject) => {
    setSelectedProject(project)
    setOpenProject(true)
    document.body.classList.add('overflow-hidden');
  }

  return (
    <div className="min-h-screen flex text-primary font-league-spartan w-full bg-dark">
      <div className="container mx-auto px-8 relative max-w-7xl">
        <div className="gap-8 md:flex block">
            <div className="md:w-1/3 w-full">
            <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
              <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl mt-auto font-semibold tracking-tight text-white text-center md:text-left drop-shadow-md mb-4 uppercase">
                  {pageTite}
                </h1>
                <p className="text-base md:text-2xl text-white/70 max-w-md md:text-left text-center mx-auto md:mx-0">
                  {pageSubTitle}
                </p>
              </div>
            </div>
          </div>
          {projects && projects.length > 0 && (
            <Suspense fallback={null}>
              <AnimateSharedLayout>
                <motion.div className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid relative">
                  <motion.div className="flex flex-col md:py-[var(--nav-height)] gap-10">
                    {projects.map((project, idx) => (
                      <motion.button layout onClick={() => handleSelect(project)} key={idx}>
                        <ProjectCard content={project}  />
                      </motion.button>
                    ))}
                    <AnimatePresence>
                      {selectedProject && <SelectedProject />}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </AnimateSharedLayout>
          </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
