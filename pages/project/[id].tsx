import { JBProject } from '../../src/dataTypes';
import { useState } from 'react';
import { useEffect } from 'react';
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { Projects } from "../../src/project-data";
import { getProjectsById } from '../../src/projectsService';
import Link from 'next/link';

export default function SingleProject() {
  const [project, setProject] = useState({} as JBProject) 
  const router = useRouter();
  const {id} = router.query;

  useEffect( () => {
    getProjectsById(id).then( data => {
      setProject(data.project)
    })
  }, [id])

  return (
   <>
      <div className='min-h-screen w-full flex'>
        <div className='mt-48 max-w-4xl mx-auto'>
          <Link href={'/projects'}>
            <a className='block text-xl md:text-2xl mb-8 text-center'>back</a>
          </Link>
          {project?.title && <h1 className='text-7xl tracking-tighter font-bold text-center text-dark' >{project.title}</h1>}
        </div>
      </div>
   </>
  )
}
