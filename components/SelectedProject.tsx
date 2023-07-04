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
        setSelectedProject(null);
        document.body.classList.remove('overflow-hidden');
    }

    const labelStyles = "mb-2 text-sm uppercase font-bold text-primary";

    return (
        <>
            {selectedProject ? (
            <>
              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1], offset: 100 }}
                className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl h-[65vh] bg-white">
                  {/*content*/}
                  <div className="shadow-lg relative flex flex-col w-full h-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex border-b border-solid border-slate-200 bg-white">
                      <h3 className="text-5xl font-semibold p-5 text-dark">
                        {selectedProject?.title}
                      </h3>
                      <button
                        className="p-5 ml-auto bg-dark border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none flex items-center justify-center"
                        onClick={handleRemoveData}>
                        <span className="bg-transparent text-white text-2xl block outline-none focus:outline-none">
                            x
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto overflow-y-auto">
                        <img src={selectedProject.thumbnail} height="" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.button 
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1], offset: 100 }}
                className="opacity-75 fixed inset-0 z-40 bg-black" 
                onClick={handleRemoveData}></motion.button>
            </>
          ) : null}
        </>
    )
}

export default SelectedProject;