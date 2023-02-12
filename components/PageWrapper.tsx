import { ReactElement, ReactNode } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import Loader from "./Loader";

type PageWrapperProps = {
    children: ReactNode
}

const PageWrapper = ({children} : PageWrapperProps) => {
    const {isLoaded} = usePortfolioContext();
    return (
        <>
            {!isLoaded && <Loader />}
            {isLoaded && children}
        </>
    )
}

export default PageWrapper