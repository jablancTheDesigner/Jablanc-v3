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

  const labelStyles = "mb-2 text-base uppercase font-bold text-white opacity-50";

  useEffect(() => {
    if(!selectedProject){
      console.log('Fetch project')
      getProjectsById(id).then(data => {
        setProject(data.project);
      });
    }
  },[])

  return (
    <div className="flex w-full bg-darker min-h-screen py-[var(--nav-height)]">

    {/* content */}
    <div className="container mx-auto px-8 relative max-w-6xl">

        {/* image */}
        {project?.thumbnail && (
          <div className="opacity-20 w-full h-80 overflow-hidden"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${project.thumbnail})`
            }}>
          </div>
        )}

        <div className='flex flex-col gap-16 my-16'>
          <div className='flex justify-center align-middle'>
            {/* title */}
            <h1 className="text-7xl font-semibold tracking-tighter text-white  w-full max-w-lg text-center">
              {project?.title}
            </h1>
          </div>

          {/* Client, tools, and description */}
          <div className="flex flex-col gap-8 w-full justify-between">
              <div className="w-full flex flex-wrap py-8 border-y-4 border-white">
                {/* category */}
                <div className="text-white flex flex-col text-center w-1/2 md:w-1/3 justify-center p-4">
                    <h4 className={labelStyles}>Category</h4>
                    <div className='my-auto'>
                      {project?.type.length && project?.type.map((category, idx) => {
                        return <h3 className="text-xl mx-auto w-[150px] capitalize" key={idx}>{category}</h3>
                      })}
                    </div>
                </div>
                {/* client */}
                <div className="text-white flex flex-col text-center w-1/2 md:w-1/3 justify-center p-4">
                    <h4 className={labelStyles}>Client</h4>
                    <div className='my-auto'>
                      {project?.client 
                        ? <h3 className="text-xl mx-auto w-[150px]">{project?.client}</h3>
                        : <h3 className="text-xl mx-auto w-[150px]">Self</h3>
                      }
                    </div>
                </div>
                {/* END client */}
                {/* tools */}
                <div className="text-white flex flex-col text-center w-full md:w-1/3 justify-center p-4">
                    <h4 className={labelStyles}>Tools</h4>
                    <div className="m-auto  capitalize text-comma-format">
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
              <div className="w-full max-w-2xl mx-auto my-12">
                  {project?.description && (
                      <p className="text-xl text-white ">{project?.description}</p>
                  )}
                  {!project?.description && (
                      <p className="text-xl text-white opacity-40 text-center">Description coming Soon</p>
                  )}
              </div>
              {/* END description */}
          </div>
          {/* END Client, tools, and description */}
          
          {project?.url && (
            <div className="w-full h-[80vh] bg-white">
              <iframe src={project?.url} className="w-full h-full"></iframe>
            </div>
          )}

        </div>
    </div>
</div>
  )
}
