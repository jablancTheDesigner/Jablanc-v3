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
  const pageTite = "Some Things I’ve Built";

  const handleUrl = (project: JBProject) => {
    if(!project.url){
      return 
    }
    window.open(project.url, "_blank");
  }

  return (
      <div id="projectList" className="min-h-full flex text-primary font-league-spartan w-full bg-dark">
        <div className="container mx-auto px-4 relative max-w-4xl">
          <div className="gap-4 flex-col">
              <motion.div 
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1], offset: 100 }}
                  className="w-full flex">
                <div className="md:top-[calc(var(--nav-height)+2rem)] flex flex-col py-8 h-auto max-w-lg mx-auto">
                  <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)] lg:text-left text-center max-w-xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl mt-auto font-semibold tracking-tight text-white drop-shadow-md uppercase text-center">
                      {pageTite}
                    </h1>
                  </div>
                </div>
              </motion.div>

              <AnimateSharedLayout>
                <motion.div className="flex-1 pb-20">
                  <motion.div className="flex flex-col py-[var(--nav-height)] gap-10">
                    <Suspense fallback={null}>
                      <div className="flex flex-col gap-6">
                        {projects && projects.length > 0 && (
                          projects.map((project) => (
                            // <ProjectCard content={project} key={project.id} />
                            <>
                              {project.url && (
                                <motion.button 
                                  key={project.id} 
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: [0, 1], offset: 100 }}
                                  exit={{ scale: [1, 0], offset: 100 }}
                                  onClick={() => handleUrl(project)}
                                  className={`text-left pb-4 border-b-2 md:text-6xl text-4xl text-white hover:line-through cursor-pointer`} >
                                    {project.title}
                                </motion.button>
                              )}
                              {!project.url && (
                                <motion.div 
                                  key={project.id} 
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: [0, 1], offset: 100 }}
                                  exit={{ scale: [1, 0], offset: 100 }}
                                  className={`text-left pb-4 border-b-2 md:text-6xl text-4xl text-white hover:line-through cursor-pointer`} >
                                    <Link href={`/project/${project.slug}`}>
                                      <a>{project.title}</a>
                                    </Link>
                                </motion.div>
                              )}
                            </>
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
