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

export type JBProjectType = "development" | "logo" | "design" | "print";

export interface JBProject {
  id?: number;
  title?: string;
  client?: string;
  codeLink?: string;
  logo?: string;
  thumbnail?: string;
  gallery?: string[];
  tools?: JBTools[];
  description?: string;
  url?: string;
  featured?: boolean;
  color?: string;
  type?: JBProjectType[];
}

export interface JBProjectsList {
  title: string;
  subTitle: string;
  projects: JBProject[];
}

export interface JBCard {
  content: JBProject;
  layout: string;
}
