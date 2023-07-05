import { motion } from "framer-motion";
import { ReactElement, ReactNode, useEffect } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import Link from "next/link";
import {
  AiOutlineClose
} from 'react-icons/ai';
import {
    DiHtml5,
    DiSass,
    DiReact,
    DiCss3Full,
    DiAngularSimple,
    DiJavascript1,
    DiPhotoshop,
    DiIllustrator,
} from 'react-icons/di';
import {
    IoLogoFirebase
} from 'react-icons/io5'
import { JBProject } from "../src/dataTypes";

const SelectedProject = (): ReactElement => {
    const { selectedProject, setSelectedProject, setOpenProject } = usePortfolioContext()

    const labelStyles = "mb-2 text-sm uppercase font-bold text-primary";

    return (
        <>
            {selectedProject ? (
            <>
              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1], offset: 100 }}
                className="justify-center items-start flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="w-full bg-dark pb-[var(--nav-height)] pt-24 min-h-screen flex flex-col gap-8">

                    <button className="fixed top-6 right-6 rounded-full bg-darker w-12 h-12 bold text-white flex items-center justify-center text-2xl z-40" onClick={() => setSelectedProject(null)}><AiOutlineClose /></button>

                    <div className='flex justify-center align-middle container max-w-6xl mx-auto px-4'>
                      {/* title */}
                      <h1 className="text-5xl font-semibold uppercase tracking-tighter text-white  w-full max-w-lg text-center">
                        {selectedProject?.title}
                      </h1>
                    </div>


                    {/* content */}
                    <div className="container mx-auto px-4 relative max-w-5xl flex md:flex-row flex-col gap-8">

                      {/* image */}
                      {selectedProject?.thumbnail && (
                        <div className='mx-auto relative md:w-1/2 md:min-w-[50%]'>
                          <img src={selectedProject.thumbnail} />
                        </div>
                      )}

                      <div className='flex flex-col gap-8 md:w-1/2 md:ml-auto'>

                        {/* Client, tools, and description */}
                        <div className="w-full flex flex-col gap-4">
                          {/* category */}
                          <div className="text-white flex flex-col text-left w-full justify-center p-4 bg-darker">
                              <h4 className={labelStyles}>Category</h4>
                              <div className='my-auto'>
                                {selectedProject?.type && (
                                  <h3 className="text-xl md:text-2xl font-light mx-auto capitalize">
                                    {selectedProject?.type}</h3>
                                )}
                              </div>
                          </div>
                          {/* END client */}
                          {/* tools */}
                          <div className="text-white flex flex-col text-left w-full col-span-2 justify-center p-4">
                              <h4 className={labelStyles}>Tools</h4>
                              <div className="capitalize text-primary grid grid-cols-2 gap-2 my-auto">
                                  {selectedProject?.tools.html && (<p className="text-xl inline-flex gap-1 items-center"><DiHtml5 /> HTML</p>)}
                                  {selectedProject?.tools.sass && (<p className="text-xl inline-flex gap-1 items-center"><DiSass /> SASS</p>)}
                                  {selectedProject?.tools.react && (<p className="text-xl inline-flex gap-1 items-center"><DiReact /> ReactJS</p>)}
                                  {selectedProject?.tools.css && (<p className="text-xl inline-flex gap-1 items-center"><DiCss3Full /> CSS3</p>)}
                                  {selectedProject?.tools.angular && (<p className="text-xl inline-flex gap-1 items-center"><DiAngularSimple /> Angular 2+</p>)}
                                  {selectedProject?.tools.js && (<p className="text-xl inline-flex gap-1 items-center"><DiJavascript1 /> JavaScript</p>)}
                                  {selectedProject?.tools.photoshop && (<p className="text-xl inline-flex gap-1 items-center"><DiPhotoshop /> Photoshop</p>)}
                                  {selectedProject?.tools.illustrator && (<p className="text-xl inline-flex gap-1 items-center"><DiIllustrator /> Illustrator</p>)}
                                  {selectedProject?.tools.firebase && (<p className="text-xl inline-flex gap-1 items-center"><IoLogoFirebase /> Firebase</p>)}
                              </div>
                          </div>
                          {/* END tools */}
                          {/* description */}
                          <div className="w-full max-w-2xl mx-auto px-4">
                              {selectedProject?.description && (
                                  <p className="text-base text-white">{selectedProject?.description}</p>
                              )}
                              {!selectedProject?.description && (
                                  <p className="text-base text-white">Description Coming Soon.</p>
                              )}
                          </div>
                          {/* END description */}
                        </div>
                        {/* END Client, tools, and description */}
                      </div>
                    </div>
                    </div>
              </motion.div>
            </>
          ) : null}
        </>
    )
}

export default SelectedProject;