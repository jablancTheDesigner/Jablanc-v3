/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject, JBProjectType } from "../src/dataTypes";
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
    setProjects,
    selectedProject,
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

  const [filteredProjects, setFilteredProjects] = useState<JBProject[]>(projects)
  const [category, setCategory] = useState<JBProjectType | "All">("All")

  const filterProjectsByCategory = (category: JBProjectType) => {
    const renderedProjects = projects.filter(project => project.type == category)
    setFilteredProjects(renderedProjects)
    setCategory(category);
  }

  const getAllProjects = () => {
    setFilteredProjects(projects)
    setCategory("All");
  }

  return (
      <div id="projectList" className="min-h-full flex text-primary font-league-spartan w-full">
        <div className="container mx-auto px-4 relative max-w-4xl">
          <div className="gap-4 flex-col mb-8">
            <AnimatedComponent>
              <div className="md:top-[calc(var(--nav-height)+2rem)] flex flex-col py-8 h-auto max-w-lg mx-auto">
                  <div className="md:mb-auto text-6xl md:ml-0 lg:text-left text-center max-w-xl mx-auto">
                    <AnimatedHeader title={pageTite}></AnimatedHeader>
                  </div>
                </div>
            </AnimatedComponent>

            {/* <AnimatedComponent>
              <div className="flex gap-4 full justify-center mb-8 text-lg w-full">
                  <button 
                      className={`${category == 'All' ?  'opacity-100' : 'opacity-50'}`} 
                      onClick={getAllProjects}>All</button>
                  <button 
                    className={`${category == 'development' ?  'opacity-100' : 'opacity-50'}`} 
                    onClick={() => filterProjectsByCategory('development')}>Web</button>
                  <button 
                    className={`${category == 'branding' ?  'opacity-100' : 'opacity-50'}`} 
                    onClick={() => filterProjectsByCategory('branding')}>Design</button>
                </div>
            </AnimatedComponent> */}

            <Masonry
              gap={15}
              colCount={1}
              minWidth={100}
              items={filteredProjects.map((item) => (
                <div key={item.id} className="flex">
                  <motion.button 
                      key={item.id} 
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1], offset: 100 }}
                      exit={{ scale: [1, 0], offset: 100 }}
                      onClick={() => handleUrl(item)}
                      className={`p-4 text-3xl leading-[0.85] font-bold uppercase text-primary hover:line-through cursor-pointer text-center mx-auto `} >
                        <p className="text-3xl leading-[0.85]">
                          {item.title}
                        </p>
                  </motion.button>
                </div>
              ))}
            ></Masonry>
          </div>
        </div>
      </div>
  );
};

export default ProjectsList;
