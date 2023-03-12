import { motion } from "framer-motion";
import { ReactElement, ReactNode, useEffect } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import Link from "next/link";
import {
    GrClose
} from 'react-icons/gr';
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

type SelectProjectProps = {
    children?: ReactNode;
    project?: JBProject
}

const SelectedProject = (): ReactElement => {
    const { selectedProject, setSelectedProject, setOpenProject } = usePortfolioContext()

    const handleRemoveData = () => {
        setOpenProject(false)
        setSelectedProject(null);
        document.body.classList.remove('overflow-hidden');
    }

    const labelStyles = "mb-2 text-sm uppercase font-bold text-primary";

    return (
        <motion.div 
            className="flex h-full w-full md:relative md:translate-x-0 md:translate-y-0 md:top-0 md:left-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 bg-darker">
                <div className="flex flex-col w-full">
                    {selectedProject?.thumbnail && (
                        <img src={selectedProject.thumbnail} />
                    )}
                    {!selectedProject?.thumbnail && (
                        <img src="https://via.placeholder.com/600x400" />
                    )}
                    <div className="my-auto flex flex-col items-center justify-center w-full">
                        {selectedProject?.codeLink && <a href={selectedProject.codeLink}>Github</a>}
                        {selectedProject?.url && <a href={selectedProject.url}>Go to Site</a>}
                    </div>
                    <button onClick={() => setSelectedProject(null)}>
                        cancel
                    </button>
                </div>
        </motion.div>
    )
}

export default SelectedProject;