import { useEffect, useRef, useState, forwardRef, FC, ReactElement } from "react";
import {BsArrowDown, BsArrowsFullscreen} from 'react-icons/bs';
import {FaArrowsAltH} from 'react-icons/fa'
import { Project } from "../src/project";
import Loader from "./Loader";
import {AiOutlineColumnWidth} from 'react-icons/ai';
import {FiColumns} from 'react-icons/fi';
import {BsLayoutThreeColumns} from 'react-icons/bs';
import {TbArrowAutofitWidth} from 'react-icons/tb';
import Image from 'next/image';
import { getProjects } from "../src/projectsService";

const ProjectsList:FC<any> = (props): ReactElement => {

    const [projects, setProjects] = useState<Project[]>(getProjects());
    const [isLoading, setLoading] = useState<boolean>(false);

    const [gridStyle, setGridStyle] = useState<number>(1);
    const [gridClasses, setGridClasses] = useState<string>('grid-rows-1');

    const styles = {
        'projects':'min-h-screen flex text-primary font-league-spartan w-full pt-[var(--nav-height)] bg-dark',
        'project': 'mb-32 border border-transparent hover:drop-shadow-primary cursor-pointer',
        'filterLinks': 'p-4 text-2xl font-bold hover:text-white text-center',
        'title': 'text-4xl tracking-tight font-league-spartan text-white py-3 px-6 bg-dark inline-block -mb-4 relative z-[1]'
    }

    const handleGridChange = (style:number) : void => {
        let classNames: string;
        switch(style){
            case 1: classNames = 'md:grid-cols-1 gap-8'; break;
            case 2: classNames = 'md:grid-cols-2 gap-4'; break;
            case 3: classNames = 'md:grid-cols-3 gap-2'; break;
        }
        setGridClasses(classNames);
        setGridStyle(style);
    }

    return (
        <div className={styles.projects}>
            <div className="container mx-auto p-8 relative max-w-7xl">
                <div className="gap-8 md:flex block">
                    <div className="md:w-1/4 w-full">
                        <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                            <h1 className="text-7xl font-bold text-white text-center md:text-left drop-shadow-lg">
                                My projects
                            </h1>
                            <div className="mt-auto text-6xl mx-auto md:ml-0 pt-8">
                                <BsArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid">
                        <div className={'relative grid '+gridClasses}>
                            {(projects.length > 0) && projects.map( (project, idx) => {
                                return <div key={project.id}
                                    className={styles.project}>
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
                    <div className="w-20 hidden">
                        <div className="grid grid-cols-1 mb-8 sticky top-[calc(var(--nav-height)+4rem)] text-center">
                            <button onClick={() => handleGridChange(1)} 
                                className={styles.filterLinks +' '+(gridStyle == 1 ? 'text-white' : '')}>
                                <TbArrowAutofitWidth className="mx-auto" />
                            </button>
                            <button onClick={() => handleGridChange(2)} 
                                className={styles.filterLinks +' '+(gridStyle == 2 ? 'text-white' : '')}>
                                <FiColumns className="mx-auto" />
                            </button>
                            {/* <button onClick={() => handleGridChange(3)} 
                                className={styles.filterLinks +' '+(gridStyle == 3 ? 'text-white' : '')}>
                                <BsLayoutThreeColumns />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList;