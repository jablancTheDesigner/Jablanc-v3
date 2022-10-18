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

const ProjectsList:FC<any> = ({data}): ReactElement => {

    const styles = {
        'filterLinks': 'p-4 text-2xl font-bold hover:text-white text-center',
        'title': 'md:text-4xl text-2xl tracking-tight font-league-spartan font-medium text-white text-center py-3 mb-4'
    }

    return (
        <div className="min-h-screen flex text-primary font-league-spartan w-full pt-[var(--nav-height)] bg-dark">
            <div className="container mx-auto p-8 relative max-w-7xl">
                <div className="gap-8 md:flex block">
                    <div className="md:w-1/3 w-full">
                        <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                            
                            <div className="md:mb-auto text-6xl md:ml-0 pt-8">
                                <h1 className="text-5xl  mt-auto font-semibold tracking-tight text-white text-center md:text-left drop-shadow-md mb-4 uppercase">
                                    Projects
                                </h1>
                                <p className="text-base text-gray-500 max-w-md md:text-left text-center">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, aut adipisci ea quam dicta voluptatum!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid">
                        <div className='relative grid gap-24'>
                            {(data.length > 0) && data.map( (project, idx) => {
                                return <div key={project.id}
                                    className="border border-transparent hover:drop-shadow-primary cursor-pointer">
                                    <h2 className={styles.title}>{project.title}</h2>
                                    <div className="transition-all ease-in-out box-content">
                                        <Image src='https://placehold.jp/1000x650.jpg' width='1000px' height='650px' />
                                    </div> 
                                    <p className="text-gray-300 text-lg font-thin font-league-spartan mt-4 hidden">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nam alias ullam illum minus in necessitatibus. 
                                    </p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList;