import { motion } from "framer-motion";
import CurrentLocation from "./CurrentLocation"
import SocialLinks from "./SocialLinks"
import { scrollToSection } from "../utilities/utilityFunctions";
import { TiLocationOutline } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-10 flex justify-between items-end">
            <SocialLinks />
            <motion.div
              initial={{ top: 50, opacity: 0 }}
              whileInView={{ top: [-30, 10, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.75 }}>
              <button 
                className="text-4xl tracking-tight font-bold leading-[0.85] uppercase m-8 text-white hover:text-primary ease-linear bg-transparent" 
                data-testid="work-btn" 
                title={"Work"} 
                onClick={() => scrollToSection("projectList")}>
                  Work
                </button>
            </motion.div> 
        </div>
    )
}

export default Footer;