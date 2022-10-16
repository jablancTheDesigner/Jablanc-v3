import Type from "./Types";

export class Project {
    id?: number

    title?: string;
    
    client?: string;
    
    codeLink?: string;
    
    logo?: string;
    
    thumbnail?: string;
    
    gallery?: string[];
    
    tools?: string[];
    
    description?: string;
    
    url?: string;
    
    featured?: boolean;
    
    color?: string;

    type?: Type[];
}