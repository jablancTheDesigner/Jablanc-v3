import { Project } from "./project";
import { Projects } from "./project-data"

export function getProjects(): Project[] {
    return Projects;
}

export function getProjectsById(id: number): Project {
    return Projects.find(project => project.id == id);
}