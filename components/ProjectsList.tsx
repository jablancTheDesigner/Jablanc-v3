import { ReactElement, Suspense, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion, useScroll } from "framer-motion";
import Card from "./Card";
import { BsCollectionFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";
import { JBProject } from "../src/dataTypes";
import Image from "next/image";
import { usePortfolioContext } from "../context/PortfolioContext";
import {
  GrClose
} from 'react-icons/gr';

const RenderedProjects = () => {
  const { projects, layoutStyle , setOpenProject } = usePortfolioContext();
  const [selectedId, setSelectedId] = useState(null);
  const [projectData, setProjectData] = useState<JBProject>(null);

  const handleSelect = (id) => {
    const project = projects.find((project) => project.id == id);
    setProjectData(project);
    setSelectedId(id);
    setOpenProject(true)
    console.log(project)
    document.body.classList.add('overflow-hidden');
  }

  const handleRemoveData = () => {
    setProjectData(null);
    setSelectedId(null);
    setOpenProject(false)
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <Suspense fallback={null}>
      <AnimateSharedLayout>
        <motion.div className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid relative">
          <motion.div className="flex flex-col md:py-[var(--nav-height)] mb-20">
            {projects.map((project, idx) => (
              <motion.div layout onClick={() => handleSelect(project.id)} key={idx}>
                <Card content={project} key={idx} layout={layoutStyle} />
              </motion.div>
            ))}
            <AnimatePresence>
              {selectedId && (
                <motion.div 
                  layoutId={selectedId} 
                  className="fixed top-0 left-0 right-0 bottom-0 z-[70] flex items-end">
                    {/* close button */}
                    <motion.button 
                      className="text-2xl font-bold tracking-tighter inline-block ml-auto text-dark hover:text-primary uppercase mt-8 p-6 md:p-16 z-30 bg-primary"
                      onClick={() => handleRemoveData()}><GrClose /></motion.button>
                    {/* background */}
                    <motion.div 
                    className="w-full absolute h-full bg-dark/75 z-10"
                    onClick={() => handleRemoveData()}>
                    </motion.div>
                    {/* content */}
                    <motion.div 
                    className="w-full max-w-5xl h-full overflow-y-auto overflow-x-hidden relative bg-black z-20 flex gap-0 flex-wrap">
                      {/* image */}
                      <div className="opacity-20 w-full h-2/3 overflow-hidden"
                      style={{
                        backgroundImage: `url(https://placehold.jp/1200x750?text=Coming+Soon.jpg)`,
                        backgroundRepeat: 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}></div>
                      {/* title */}
                      <h1 className="text-4xl font-bold tracking-tighter mb-2 text-white max-w-2xl absolute top-[var(--nav-height)] md:top-8 left-8">{projectData?.title}</h1>
                      {/* client */}
                      <div className="m-8 text-white">
                        <h4 className="text-base">Client</h4>
                        <h3 className="text-2xl font-bold">{projectData?.client}</h3>
                      </div>
                      {/* description */}
                      <p className="text-xl m-8 text-left px-4 max-w-md">{projectData?.description}</p>
                    </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>
    </Suspense>
  );
};

const ProjectsList = (): ReactElement => {
  const { projects, layoutStyle, setLayoutStyle, layoutControls } = usePortfolioContext();
  const pageTite = "Projects";
  const pageSubTitle =
    "No project is too small nor too big for ya bwoy! Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.";

  return (
    <>
      <div className="min-h-screen flex text-primary font-league-spartan w-full bg-dark">
        <div className="container mx-auto px-8 relative max-w-7xl">
          <div className="gap-8 md:flex block">
              <div className="md:w-1/3 w-full">
              <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)]">
                  <h1 className="text-5xl  mt-auto font-semibold tracking-tight text-white text-center md:text-left drop-shadow-md mb-4 uppercase">
                    {pageTite}
                  </h1>
                  <p className="text-base text-gray-500 max-w-md md:text-left text-center mx-auto md:mx-0">
                    {pageSubTitle}
                  </p>
                  {layoutControls && (
                    <div className="mt-8">
                    <h4 className="text-base border-b border-primary pb-2 font-semibold uppercase md:text-left text-center">
                      View options
                    </h4>
                    <div className="grid grid-cols-2 border-b border-x border-primary mb-8">
                      <button
                        className={`app-button text-3xl flex items-center gap-2 justify-center leading-3 ${
                          layoutStyle == "row"
                            ? "!bg-primary !text-dark"
                            : "!text-primary"
                        }`}
                        onClick={() => setLayoutStyle("row")}>
                        <MdTableRows />
                      </button>
                      <button
                        className={`app-button text-3xl flex items-center gap-2 justify-center leading-3 ${
                          layoutStyle == "grid"
                            ? "!bg-primary !text-dark"
                            : "!text-primary"
                        }`}
                        onClick={() => setLayoutStyle("grid")}>
                        <BsCollectionFill />
                      </button>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            {projects && projects.length > 0 && (
              <RenderedProjects />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
