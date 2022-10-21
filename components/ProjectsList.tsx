import { useEffect, useRef, useState, forwardRef, FC, ReactElement } from "react";
import {BsArrowDown, BsArrowsFullscreen} from 'react-icons/bs';
import {FaArrowsAltH} from 'react-icons/fa'
import { Project } from "../src/project";
import Loader from "./Loader";
import {AiOutlineColumnWidth} from 'react-icons/ai';
import {FiColumns} from 'react-icons/fi';
import {CgScrollV} from 'react-icons/cg';
import {TbArrowAutofitWidth} from 'react-icons/tb';
import Image from 'next/image';
import { getProjects } from "../src/projectsService";
import { motion, AnimatePresence, useScroll } from "framer-motion"
import Card from "./Card";

const ProjectsList:FC<any> = ({data}): ReactElement => {

    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div 
                className="bg-primary fixed top-0 left-0 right-0 origin-top h-[10px] z-10"
                style={{ scaleX: scrollYProgress }}/> 

            <div className="min-h-screen flex text-primary font-league-spartan w-full bg-dark">
                <div className="container mx-auto px-8 relative max-w-7xl">
                    <div className="gap-8 md:flex block">
                        <div className="md:w-1/3 w-full">
                            <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                                
                                <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)]">
                                    <h1 className="text-5xl  mt-auto font-semibold tracking-tight text-white text-center md:text-left drop-shadow-md mb-4 uppercase">
                                        Projects
                                    </h1>
                                    <p className="text-base text-gray-500 max-w-md md:text-left text-center">
                                        No project is too small nor too big for ya bwoy! Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.div 
                            className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid">
                            <motion.div className='relative flex flex-col'>
                                {data.map((project, idx) => (
                                    <Card content={project} key={idx} />
                                ))}
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsList;