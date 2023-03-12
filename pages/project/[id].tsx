import { JBProject } from '../../src/dataTypes';
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import { getProjectsById } from '../../src/projectsService';
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

export default function SingleProject() {
  const {selectedProject} = usePortfolioContext(); 
  const [project, setProject] = useState<JBProject>(selectedProject ?? undefined);
  const router = useRouter();
  const {id} = router.query;
  console.log(id)

  const labelStyles = "mb-2 text-base uppercase font-bold text-primary";

  useEffect(() => {
    if(!selectedProject){
      console.log('Fetch project')
      getProjectsById(id).then(data => {
        setProject(data.project);
      });
    }
  },[])

  return (
    <div className="flex w-full bg-dark py-[var(--nav-height)] min-h-screen">

    {/* content */}
    <div className="container mx-auto px-4 relative max-w-6xl">

        {/* image */}
        {project?.thumbnail && (
          <div className="opacity-20 w-full h-80 overflow-hidden mb-16"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${project.thumbnail})`
            }}>
          </div>
        )}

        <div className='flex flex-col gap-16'>
          <div className='flex justify-center align-middle'>
            {/* title */}
            <h1 className="text-5xl font-semibold uppercase tracking-tighter text-white  w-full max-w-lg text-center">
              {project?.title}
            </h1>
          </div>

          {/* Client, tools, and description */}
          <div className="flex flex-col w-full gap-4 justify-between">
              <div className="w-full md:flex grid grid-cols-2 grid-rows-2 gap-4">
                {/* category */}
                <div className="text-white flex flex-col text-center w-full justify-center px-4 py-12 bg-darker">
                    <h4 className={labelStyles}>Category</h4>
                    <div className='my-auto'>
                      {project?.type && (
                        <h3 className="text-xl md:text-2xl font-light mx-auto capitalize">
                          {project?.type}</h3>
                      )}
                    </div>
                </div>
                {/* client */}
                <div className="text-white flex flex-col text-center w-full justify-center px-4 py-12 bg-darker">
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
                <div className="text-white flex flex-col text-left w-full col-span-2 justify-center px-8 py-12 border-4 border-primary drop-shadow-lg">
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
              {/* description */}
              <div className="w-full max-w-2xl mx-auto py-12 mt-12">
                  {project?.description && (
                      <p className="text-base text-white ">{project?.description}</p>
                  )}
                  {!project?.description && (
                      <p className="text-base text-white text-center">Description Coming Soon.</p>
                  )}
              </div>
              {/* END description */}
          </div>
          {/* END Client, tools, and description */}
          
          {project?.url && (
            <>
              <div className="w-full h-[80vh] bg-darker hidden md:block">
                <iframe src={project?.url} className="w-full h-full"></iframe>
              </div>
              <div className="text-center text-2xl md:hidden block">
                Expand width of browser or Go to site 
              by clicking <a href={project?.url} className="text-2xl text-white">Here.</a>
              </div>
            </>
          )}

        </div>
    </div>
</div>
  )
}
