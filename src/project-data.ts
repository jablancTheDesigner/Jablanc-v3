import { Project } from "./project";
import { v4 as uuidv4 } from 'uuid';

export const Projects: Project[] = [
    {
        id: uuidv4(),
        title: 'LinkedIn Clone',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/jpb-linkedin-clone',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://linkedin-clone-6fc78.firebaseapp.com/',
        featured: true,
        color: '#000000',
        type: ['development']
    },
    {
        id: uuidv4(),
        title: '\"The Shop\" E-Commerce',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/puffessional',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://puffessional.netlify.app/',
        featured: true,
        color: '#000000',
        type: ['development']
    },
    {
        id: uuidv4(),
        title: '\"Yerrrp!\" Public Forum ',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/jpb-blog',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: ['ReactJS', 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://jpb-blog.netlify.app/',
        featured: true,
        color: '#000000',
        type: ['development']
    },
    {
        id: uuidv4(),
        title: 'Cool Navigation',
        client: 'Me, Myself, and I',
        codeLink: 'https://github.com/jablancTheDesigner/minimalist-nav',
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: [ 'SCSS', 'HTML', 'JavaScript'],
        description: null,
        url: 'https://jablancthedesigner.github.io/minimalist-nav/',
        featured: true,
        color: '#000000',
        type: ['logo']
    },
    {
        id: uuidv4(),
        title: 'Jay Photography',
        client: 'Jay',
        codeLink: null,
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: [ 'Illustrator'],
        description: null,
        url: null,
        featured: true,
        color: '#000000',
        type: ['logo']
    },
    {
        id: uuidv4(),
        title: 'Kloud 9 Kicks',
        client: 'Jay',
        codeLink: null,
        logo: null,
        thumbnail: null,
        gallery: [],
        tools: [ 'Illustrator'],
        description: null,
        url: null,
        featured: true,
        color: '#000000',
        type: ['logo']
    }
    
];

