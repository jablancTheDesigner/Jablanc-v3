import { JBProject, Project } from "./dataTypes";
import { v4 as uuidv4 } from "uuid";
import { generateSlug } from "../utilities/utilityFunctions";
import NAVI_IMG from "../public/images/navi_03.png";
import ECOMMERCE_IMG from "../public/images/ecommerce_03.png";
import TASKS_IMG from "../public/images/tasks_03.png";

export const Projects: Project[] = [
  {
    id: "1",
    title: "Pure HTML/SCSS/JS slide navigation",
    repoLink: "https://github.com/jablancTheDesigner/minimalist-nav",
    imageUrl: NAVI_IMG.src,
    url: "https://jablancthedesigner.github.io/minimalist-nav/",
    image: {
      src: NAVI_IMG.src,
      alt: "Minimalist slide navigation",
      height: NAVI_IMG.height,
      width: NAVI_IMG.width,
    },
  },
  {
    id: "2",
    title: "ReactJS ToDo App",
    repoLink: "https://github.com/jablancTheDesigner/goals-task-todos",
    imageUrl: TASKS_IMG.src,
    gallery: [],
    url: "https://goals-tasks-todos.netlify.app/",
    image: {
      src: TASKS_IMG.src,
      alt: "Minimalist slide navigation",
      height: TASKS_IMG.height,
      width: TASKS_IMG.width,
    },
  },
  {
    id: "3",
    title: "E-Commerce website made with ReactJS and Fake Store API",
    repoLink: "https://github.com/jablancTheDesigner/puffessional",
    imageUrl: ECOMMERCE_IMG.src,
    gallery: [],
    url: "https://puffessional.netlify.app/",
    image: {
      src: ECOMMERCE_IMG.src,
      alt: "Minimalist slide navigation",
      height: ECOMMERCE_IMG.height,
      width: ECOMMERCE_IMG.width,
    },
  },
  {
    id: "4",
    title: "Logo Design",
    client: "JV Snapshot",
    imageUrl: "https://i.ibb.co/PwvxfRm/JV-Photography.jpg",
    description:
      "JV Snapshot is a photography studio based in the Orlando, FL.",
    gallery: [],
    image: {
      src: "https://i.ibb.co/PwvxfRm/JV-Photography.jpg",
      alt: "Minimalist slide navigation",
    },
  },
  {
    id: "5",
    title: "Logo Design",
    client: "Kloud9Kicks",
    imageUrl: "https://i.ibb.co/YL5SBms/Kloud-9-Kicks.jpg",
    description: "Kloud9Kicks is a sneaker resale company based in Aiken, SC",
    gallery: [],
    image: {
      src: "https://i.ibb.co/YL5SBms/Kloud-9-Kicks.jpg",
      alt: "Minimalist slide navigation",
    },
  },
];
