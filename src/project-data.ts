import { JBProject, Project } from "./dataTypes";
import { v4 as uuidv4 } from "uuid";
import {generateSlug} from '../utilities/utilityFunctions'

export const Projects: Project[] = [
  {
    id: "1",
    title: "Pure HTML/SCSS/JS slide navigation",
    repoLink: "https://github.com/jablancTheDesigner/minimalist-nav",
    imageUrl: "https://i.ibb.co/nBPFDSx/jablancthedesigner-github-io-1024x768desktop-5cf884.png",
    url: "https://jablancthedesigner.github.io/minimalist-nav/",
  },
  {
    id: "2",
    title: "ReactJS ToDo App",
    repoLink: "https://github.com/jablancTheDesigner/goals-task-todos",
    imageUrl: "https://i.ibb.co/c89Th91/goals-tasks-todos-netlify-app-1024x768desktop-e01c40.png",
    gallery: [],
    url: "https://goals-tasks-todos.netlify.app/",
  },
  {
    id: "3",
    title: 'E-Commerce website made with ReactJS and Fake Store API',
    repoLink: "https://github.com/jablancTheDesigner/puffessional",
    imageUrl: "https://i.ibb.co/pbbBKF4/puffessional-netlify-app-1024x768desktop-09d30a.png",
    gallery: [],
    url: "https://puffessional.netlify.app/",
  },
  {
    id: "4",
    title: "Logo Design: JV Snapshot",
    client: "Jay",
    imageUrl: "https://i.ibb.co/PwvxfRm/JV-Photography.jpg",
    description: "JV Snapshot is a photography studio based in the Orlando, FL.",
    gallery: [],
  },
  {
    id: "5",
    title: "Logo Design: Kloud9Kicks",
    client: "Gabe B.",
    imageUrl: "https://i.ibb.co/YL5SBms/Kloud-9-Kicks.jpg",
    description: "Kloud9Kicks is a sneaker resale company based in Aiken, SC",
    gallery: [],
  },
];
