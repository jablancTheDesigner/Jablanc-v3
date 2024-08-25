import { generateSlug } from './../utilities/utilityFunctions';
export interface JBHeaderType {
  title: string;
  subTitle: string;
}

export interface JBButtonType {
  title: string;
  text: string;
}

export interface JBHeroType {
  title: string;
  subTitle: string;
  buttonText: string;
  bgText?: string[];
}

export type JBTools =
  | "Angular"
  | "TypeScript"
  | "SCSS"
  | "TailwindCSS"
  | "HTML"
  | "JavaScript"
  | "ReactJS"
  | "CSS"
  | "Photoshop"
  | "Illustrator";

export type JBProjectType = "development" | "branding" | "design" | "print";

export interface JBProjectsList {
  title: string;
  subTitle: string;
  projects: JBProject[];
}

export interface JBCard {
  content: JBProject;
}

export interface JBProject {
  id?: string;
  slug?: string;
  title?: string;
  client?: string;
  codeLink?: string;
  logo?: string;
  thumbnail?: string;
  gallery?: string[];
  tools?: {
    react: boolean,
    sass: boolean,
    css: boolean,
    html: boolean,
    js: boolean,
    angular: boolean,
    photoshop: boolean,
    illustrator: boolean,
    firebase: boolean
  };
  description?: string;
  url?: string;
  featured?: boolean;
  color?: string;
  type?: JBProjectType;
}

export type ProjectList = JBProject[];

export type Project = {
  id?: string;
  title?: string;
  client?: string;
  description?: string;
  imageUrl?: string;
  repoLink?: string;
  url?: string;
  gallery?: string[];
  slug?: string;
}
