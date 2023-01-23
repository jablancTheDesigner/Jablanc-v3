import { motion } from "framer-motion";
import { ReactElement } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import { JBProject } from "../src/dataTypes";
import {
    GrClose
  } from 'react-icons/gr';

const SelectedProject = (): ReactElement => {
    const { selectedProject, setSelectedProject, setOpenProject } = usePortfolioContext()

    const handleRemoveData = () => {
        setOpenProject(false)
        setSelectedProject(null);
        document.body.classList.remove('overflow-hidden');
    }
    
    return (
        <motion.div 
            layoutId={selectedProject?.id}
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
                backgroundImage: `url(${"https://placehold.jp/1200x750?text=Coming+Soon.jpg"})`,
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
                </div>

                {/* title */}
                <h1 className="text-4xl font-bold tracking-tighter mb-2 text-white max-w-2xl absolute top-[var(--nav-height)] md:top-8 left-8">{selectedProject?.title}</h1>

                {/* client */}
                <div className="m-8 text-white">
                    <h4 className="text-base">Client</h4>
                    <h3 className="text-2xl font-bold">{selectedProject?.client}</h3>
                </div>

                {/* description */}
                <p className="text-xl m-8 text-left px-4 max-w-md">{selectedProject?.description}</p>
            </motion.div>
        </motion.div>
    )
}

export default SelectedProject;