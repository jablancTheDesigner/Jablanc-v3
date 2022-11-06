import { FC, ReactElement, useState } from "react";
import { motion, useScroll } from "framer-motion"
import Card from "./Card";
import {BsCollectionFill} from 'react-icons/bs';
import {MdTableRows} from 'react-icons/md';

type ProjectStyle = 'title' | 'grid';

const pageTite = "Projects";
const pageSubTitle = "No project is too small nor too big for ya bwoy! Having worked in many technologies, platforms, and content managment sytems, here are a few projects showcasing my experience.";

export const PageProgress = (props) => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div 
                className="bg-primary fixed top-0 left-0 bottom-0 origin-top w-[10px] z-[100]"
                style={{ scaleY: scrollYProgress }}/> 
    )
}

const ProjectsList = ({data}): ReactElement => {
    const [layoutStyle, setLayoutStyle] = useState<ProjectStyle>('title');

    return (
        <>
            <PageProgress />

            <div className="min-h-screen flex text-primary font-league-spartan w-full bg-dark">
                <div className="container mx-auto px-8 relative max-w-7xl">
                    <div className="gap-8 md:flex block">
                        <div className="md:w-1/3 w-full">
                            <div className="md:sticky md:top-[calc(var(--nav-height)+2rem)] mb-8 md:mb-0 flex flex-col py-8 md:h-[calc(100vh-(var(--nav-height)*2)-2rem)] h-auto">
                                
                                <div className="md:mb-auto text-6xl md:ml-0 pt-[var(--nav-height)]">
                                    <h1 className="text-5xl  mt-auto font-semibold tracking-tight text-white text-center md:text-left drop-shadow-md mb-4 uppercase">
                                        {pageTite}
                                    </h1>
                                    <p className="text-base text-gray-500 max-w-md md:text-left text-center">
                                        {pageSubTitle}
                                    </p>

                                    <div className="mt-8">
                                        <h4 className="text-base border-b border-primary pb-2 font-semibold uppercase md:text-left text-center">
                                            View options</h4>
                                        <div className="grid grid-cols-2 border-b border-x border-primary">
                                            <button className={`app-button text-3xl flex items-center gap-2 justify-center leading-3 ${layoutStyle == 'title' ? '!bg-primary !text-dark' : '!text-primary'}`} 
                                                onClick={() => setLayoutStyle('title')}>
                                                    <MdTableRows />
                                            </button>
                                            <button className={`app-button text-3xl flex items-center gap-2 justify-center leading-3 ${layoutStyle == 'grid' ? '!bg-primary !text-dark' : '!text-primary'}`} 
                                                onClick={() => setLayoutStyle('grid')}>
                                                    <BsCollectionFill />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div 
                            className="flex-1 pr-0 pl-0 md:pl-16 md:pr-4 grid">
                            <motion.div className='relative flex flex-col md:py-[var(--nav-height)]'>
                                {data.map((project, idx) => (
                                    <Card content={project} key={idx} layout={layoutStyle} />
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