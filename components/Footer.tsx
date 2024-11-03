import { motion } from "framer-motion";
import CurrentLocation from "./CurrentLocation";
import SocialLinks from "./SocialLinks";
import { scrollToSection } from "../utilities/utilityFunctions";
import { TiLocationOutline } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full relative z-10 flex justify-between items-end">
      <motion.div
        initial={{ top: 50, opacity: 0 }}
        whileInView={{ top: [-30, 10, 0], opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
          delay: 0.75,
        }}>
        <button
          className="text-2xl tracking-tight font-bold leading-[0.85] uppercase m-8 text-white hover:text-primary ease-linear bg-transparent"
          data-testid="work-btn"
          title={"Work"}
          onClick={() => scrollToSection("projectList")}>
          Projects
        </button>
      </motion.div>
    </div>
  );
};

export default Footer;
