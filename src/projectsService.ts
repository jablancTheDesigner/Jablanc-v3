import { JBProject } from "./dataTypes";
import { Projects } from "./project-data";

export function getProjects(): JBProject[] {
  return Projects;
}

export function getProjectsById(id: number): JBProject {
  return Projects.find((project) => project.id == id);
}
