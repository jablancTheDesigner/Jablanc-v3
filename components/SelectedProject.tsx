import { motion } from "framer-motion";
import { ReactElement } from "react";
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
            layoutId={selectedProject?.id}
            className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-end">

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

                
                <div className="m-8 flex flex-col gap-8 w-1/">
                    {/* client */}
                    <div className="text-white">
                        <h4 className={labelStyles}>Client</h4>
                        {selectedProject?.client &&
                            <h3 className="text-2xl">{selectedProject?.client}</h3>}
                        {!selectedProject?.client &&
                            <h3 className="text-2xl">Self</h3>}
                    </div>
                    {/* tools */}
                    <div className="text-white">
                        <h4 className={labelStyles}>Tools</h4>
                        <div className="mt-4 flex gap-4 text-2xl mx-auto md:mx-0 ">
                            {selectedProject?.tools.html && <DiHtml5 />}
                            {selectedProject?.tools.sass && <DiSass />}
                            {selectedProject?.tools.react && <DiReact />}
                            {selectedProject?.tools.css && <DiCss3Full />}
                            {selectedProject?.tools.angular && <DiAngularSimple />}
                            {selectedProject?.tools.js && <DiJavascript1 />}
                            {selectedProject?.tools.photoshop && <DiPhotoshop />}
                            {selectedProject?.tools.illustrator && <DiIllustrator />}
                            {selectedProject?.tools.firebase && <IoLogoFirebase />}
                        </div>
                    </div>
                </div>

                <div className="m-8 text-left max-w-2xl flex flex-col gap-8">
                    {/* url */}
                    {selectedProject?.url && (
                        <div>
                            <h4 className={labelStyles}>Link</h4>
                            <Link href={selectedProject?.url}>
                                <a target="_blank" 
                                    className="text-xl">{selectedProject?.url}</a>
                            </Link>
                        </div>
                    )}

                    {/* description */}
                    <div>
                        <h4 className={labelStyles}>Description</h4>
                        {selectedProject?.description && (
                            <p className="text-xl">{selectedProject?.description}</p>
                        )}
                        {!selectedProject?.description && (
                            <p className="text-3xl opacity-60">Coming Soon</p>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SelectedProject;