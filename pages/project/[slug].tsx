import { JBProject } from '../../src/dataTypes';
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import { getProjectsBySlug } from '../../src/projectsService';
import { usePortfolioContext } from '../../context/PortfolioContext';
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
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function SingleProject() {
  const {selectedProject} = usePortfolioContext(); 
  const [project, setProject] = useState<JBProject>(selectedProject ?? undefined);
  const router = useRouter();
  const {slug} = router.query;

  const labelStyles = "mb-2 text-base uppercase font-bold text-primary";

  useEffect(() => {
    console.log(selectedProject)
    if(!selectedProject){
      console.log('Fetch project')
      getProjectsBySlug(slug as string).then(data => {
        setProject(data.project);
        console.log(data.project as JBProject)
      });
    }
  },[])

  return (
    <div className="w-full bg-dark py-[var(--nav-height)] min-h-screen flex flex-col gap-8">
      <div className='container mx-auto flex max-w-6xl py-4 border-b-2 border-white'>
        <Link href="/projects">
          <a className='mr-auto font-bold text-white flex items-center gap-2 px-4'><AiOutlineArrowLeft /> All  projects</a>
        </Link>
      </div>

      <div className='flex justify-center align-middle container max-w-6xl mx-auto px-4'>
        {/* title */}
        <h1 className="text-5xl font-semibold uppercase tracking-tighter text-white  w-full max-w-lg text-center">
          {project?.title}
        </h1>
      </div>
      

      {/* content */}
      <div className="container mx-auto px-4 relative max-w-6xl flex md:flex-row flex-col gap-8">

        {/* image */}
        {project?.thumbnail && (
          <div className='mx-auto relative md:w-1/2'>
            <img src={project.thumbnail} />
          </div>
        )}

        <div className='flex flex-col gap-8 flex-1'>

          {/* Client, tools, and description */}
          <div className="w-full flex flex-col gap-4">
            {/* category */}
            <div className="text-white flex flex-col text-left w-full justify-center p-4 bg-darker">
                <h4 className={labelStyles}>Category</h4>
                <div className='my-auto'>
                  {project?.type && (
                    <h3 className="text-xl md:text-2xl font-light mx-auto capitalize">
                      {project?.type}</h3>
                  )}
                </div>
            </div>
            {/* client */}
            <div className="text-white flex flex-col text-left w-full justify-center p-4 bg-darker">
                <h4 className={labelStyles}>Client</h4>
                <div className='my-auto'>
                  {project?.client 
                    ? <h3 className="text-xl md:text-2xl font-light mx-auto">{project?.client}</h3>
                    : <h3 className="text-xl md:text-2xl font-light mx-auto">Self</h3>
                  }
                </div>
            </div>
            {/* END client */}
            {/* tools */}
            <div className="text-white flex flex-col text-left w-full col-span-2 justify-center p-4">
                <h4 className={labelStyles}>Tools</h4>
                <div className="capitalize text-primary grid grid-cols-2 gap-2 my-auto">
                    {project?.tools.html && (<p className="text-xl inline-flex gap-1 items-center"><DiHtml5 /> HTML</p>)}
                    {project?.tools.sass && (<p className="text-xl inline-flex gap-1 items-center"><DiSass /> SASS</p>)}
                    {project?.tools.react && (<p className="text-xl inline-flex gap-1 items-center"><DiReact /> ReactJS</p>)}
                    {project?.tools.css && (<p className="text-xl inline-flex gap-1 items-center"><DiCss3Full /> CSS3</p>)}
                    {project?.tools.angular && (<p className="text-xl inline-flex gap-1 items-center"><DiAngularSimple /> Angular 2+</p>)}
                    {project?.tools.js && (<p className="text-xl inline-flex gap-1 items-center"><DiJavascript1 /> JavaScript</p>)}
                    {project?.tools.photoshop && (<p className="text-xl inline-flex gap-1 items-center"><DiPhotoshop /> Photoshop</p>)}
                    {project?.tools.illustrator && (<p className="text-xl inline-flex gap-1 items-center"><DiIllustrator /> Illustrator</p>)}
                    {project?.tools.firebase && (<p className="text-xl inline-flex gap-1 items-center"><IoLogoFirebase /> Firebase</p>)}
                </div>
            </div>
            {/* END tools */}
          </div>
          {/* END Client, tools, and description */}
        </div>
      </div>

      {/* description */}
      <div className="w-full max-w-2xl mx-auto">
          {project?.description && (
              <p className="text-base text-white ">{project?.description}</p>
          )}
          {!project?.description && (
              <p className="text-base text-white text-center">Description Coming Soon.</p>
          )}
      </div>
      {/* END description */}
  </div>
  )
}
