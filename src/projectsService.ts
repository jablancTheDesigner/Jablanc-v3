import { JBProject } from "./dataTypes";

const URL = '/api/content/projects/'

interface JBProjectsResponse {
  method: string;
  projects: JBProject[]
}

interface JBProjectResponse {
  method: string;
  slug: string;
  project: JBProject
}

export async function getProjects(): Promise<JBProjectsResponse> {
  const response = await fetch(URL+"all");
  return response.json();
}

export async function getProjectsById(id: any) : Promise<JBProjectResponse> {
  const response = await fetch(URL+id);
  console.log(response)
  return response.json();
}
