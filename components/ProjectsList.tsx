import { ReactElement, Suspense } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import SelectedProject from "./SelectedProject";

const ProjectsList = (): ReactElement => {
  const { 
    projects, 
    selectedProject,
    setSelectedProject, 
  } = usePortfolioContext();
  const pageTite = "Projects";
  const pageSubTitle = "Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.";

  const handleSelect = (project: JBProject) => {
    setSelectedProject(project)
  }

  return (
      <div className="min-h-screen flex text-primary font-league-spartan w-full bg-dark">
        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="lg:gap-8 flex lg:flex-row flex-col">
              <motion.div 
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1], offset: 100 }}
                  className="lg:w-1/3 w-full">
                <div className="lg:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 lg:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                  <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)] lg:text-left text-center ">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl mt-auto font-semibold tracking-tight text-white drop-shadow-md mb-4 uppercase">
                      {pageTite}
                    </h1>
                    <p className="text-base md:text-2xl text-white/70 max-w-md mx-auto lg:mx-0">
                      {pageSubTitle}
                    </p>
                  </div>
                </div>
              </motion.div>

              <AnimateSharedLayout>
                <motion.div className="flex-1 pr-4 pl-4 lg:pl-16 lg:pr-4 grid relative pb-28 min-h-screen">
                  <motion.div className="flex flex-col lg:py-[var(--nav-height)] gap-10">
                    <Suspense fallback={null}>
                      <div className="grid grid-cols-1 gap-6">
                        {projects && projects.length > 0 && (
                          projects.map((project) => (
                            <ProjectCard content={project} key={project.id} />
                          ))
                        )}
                      </div>
                    </Suspense>
                  </motion.div>
                </motion.div>
              </AnimateSharedLayout>
          </div>
        </div>
      </div>
  );
};

export default ProjectsList;
