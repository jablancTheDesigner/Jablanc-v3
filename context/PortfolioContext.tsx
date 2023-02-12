import { FC, ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { JBProject } from '../src/dataTypes';
import { getProjects, } from '../src/projectsService';

interface PortfolioContext {
    projects: JBProject[];
    setProjects: (data: []) => void;
    layoutStyle: string;
    setLayoutStyle: (layout: string) => void;
    layoutControls: boolean;
    setLayoutControls: (hasControls: boolean) => void;
    loading: boolean;
    setLoading: (isLoading: boolean) => void;
    openProject: boolean;
    setOpenProject: (isOpen: boolean) => void;
    selectedProject: JBProject;
    setSelectedProject: (project: JBProject) => void;
    navIsOpen: boolean;
    setNavIsOpen: (isOpen: boolean) => void;
    activateBg: boolean;
    setActivateBg: (isActivated: boolean) => void;
    isLoaded: boolean;
    setIsLoaded: (isLoaded: boolean) => void;
}

export const PortfolioContext = createContext<PortfolioContext | undefined>(undefined);

type Props = {
    children: ReactNode
}

const PortfolioContextProvider : FC<Props> = ({ children }) => {
    const [projects, setProjects] = useState<JBProject[]>([]);
    const [layoutStyle, setLayoutStyle] = useState<string>("row");
    const [layoutControls, setLayoutControls] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); 
    const [openProject, setOpenProject] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<JBProject>(null);
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
    const [activateBg, setActivateBg] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const portfolioState: PortfolioContext = {
        projects,
        setProjects,
        layoutStyle,
        setLayoutStyle,
        layoutControls,
        setLayoutControls,
        loading,
        setLoading,
        openProject,
        setOpenProject,
        selectedProject,
        setSelectedProject,
        navIsOpen,
        setNavIsOpen,
        activateBg,
        setActivateBg,
        isLoaded,
        setIsLoaded
    }

    useEffect( () => {
        getProjects().then( data => {
            setProjects(data.projects);
            setIsLoaded(true);
        })
    }, [])

    return (
        <PortfolioContext.Provider value={portfolioState}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioContextProvider;

export function usePortfolioContext(){
    return useContext(PortfolioContext);
}