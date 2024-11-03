"use client";
import { motion } from "framer-motion";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import {
  DiHtml5,
  DiSass,
  DiReact,
  DiCss3Full,
  DiAngularSimple,
  DiJavascript1,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { JBProject } from "../src/dataTypes";

import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
import Loader from "./Loader";

interface StatsCardPropsType {
  count: string;
  title: string;
  description: string;
}

const imageLoader = ({ src, width, quality }) => {
  return `https://placehold.jp/500x400.png`;
};

const SelectedProject = (): ReactElement => {
  const { selectedProject, setSelectedProject, setOpenProject } =
    usePortfolioContext();

  const labelStyles = "mb-2 text-sm uppercase font-bold text-primary";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setSelectedProject(undefined);

  return (
    <Dialog
      size="sm"
      className="bg-dark"
      open={selectedProject?.id ? true : false}
      handler={handleOpen}
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}>
      {selectedProject?.imageUrl && (
        <div className="mx-auto relative p-4">
          <Typography
            className="text-3xl leading-snug text-white mb-1"
            variant="h2"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            {selectedProject.title}
          </Typography>
          <Typography
            className="text-base max-w-xs font-normal leading-normal !text-gray-500 mb-12"
            variant="paragraph"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            {selectedProject.description}
          </Typography>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-auto w-full relative flex justify-center">
              <Image
                alt={"bbn"}
                src={selectedProject.imageUrl}
                width={500}
                height={400}
                style={{
                  width: "100%",
                }}
                className="h-full w-full object-cover object-center rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
      {!selectedProject && "No item selected"}
    </Dialog>
    // <Dialog open={open} onClose={setOpen} className="relative z-10">
    //   <DialogBackdrop
    //     transition
    //     className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    //   />

    //   <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    //     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //       <DialogPanel
    //         transition
    //         className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
    //       >
    //         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //           <div className="sm:flex sm:items-start">
    //             <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
    //               <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
    //             </div>
    //             <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
    //               <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
    //                 Deactivate account
    //               </DialogTitle>
    //               <div className="mt-2">
    //                 <p className="text-sm text-gray-500">
    //                   Are you sure you want to deactivate your account? All of your data will be permanently removed.
    //                   This action cannot be undone.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    //           <button
    //             type="button"
    //             onClick={() => setOpen(false)}
    //             className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    //           >
    //             Deactivate
    //           </button>
    //           <button
    //             type="button"
    //             data-autofocus
    //             onClick={() => setOpen(false)}
    //             className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
    //           >
    //             Cancel
    //           </button>
    //         </div>
    //       </DialogPanel>
    //     </div>
    //   </div>
    // </Dialog>
  );
};

export default SelectedProject;

/* 

<motion.div
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1], offset: 100 }}
                className="justify-center items-start flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="w-full bg-dark pb-[var(--nav-height)] pt-24 min-h-screen flex flex-col gap-8">

                    <button className="fixed top-6 right-6 rounded-full bg-darker w-12 h-12 bold text-white flex items-center justify-center text-2xl z-40" onClick={() => setSelectedProject(null)}><AiOutlineClose /></button>

                    <div className='flex justify-center align-middle container max-w-6xl mx-auto px-4'>
                      <h1 className="text-5xl font-semibold uppercase tracking-tighter text-white  w-full max-w-lg text-center">
                        {selectedProject?.title}
                      </h1>
                    </div>


                    <div className="container mx-auto px-4 relative max-w-5xl flex md:flex-row flex-col gap-8">

                      {selectedProject?.thumbnail && (
                        <div className='mx-auto relative md:w-1/2 md:min-w-[50%]'>
                          <img src={selectedProject.thumbnail} />
                        </div>
                      )}

                      <div className='flex flex-col gap-8 md:w-1/2 md:ml-auto'>

                        <div className="w-full flex flex-col gap-4">
                          <div className="text-white flex flex-col text-left w-full justify-center p-4 bg-darker">
                              <h4 className={labelStyles}>Category</h4>
                              <div className='my-auto'>
                                {selectedProject?.type && (
                                  <h3 className="text-xl md:text-2xl font-light mx-auto capitalize">
                                    {selectedProject?.type}</h3>
                                )}
                              </div>
                          </div>
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
                          <div className="w-full max-w-2xl mx-auto px-4">
                              {selectedProject?.description && (
                                  <p className="text-base text-white">{selectedProject?.description}</p>
                              )}
                              {!selectedProject?.description && (
                                  <p className="text-base text-white">Description Coming Soon.</p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
              </motion.div>

*/
