import { usePortfolioContext } from "../context/PortfolioContext";

const Body = ({ children }) => {
    const { navIsOpen } = usePortfolioContext();
    return (
        <div className={`${!navIsOpen ? 'overflow-hidden' : 'overflow-auto'} w-100`}>
            {children}
        </div>
    )
}

export default Body;