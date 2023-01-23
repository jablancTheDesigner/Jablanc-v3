import { motion } from "framer-motion";
import { ReactElement } from "react";
import { JBCard } from "../src/dataTypes";
import {
  DiHtml5,
  DiSass,
  DiReact,
  DiCss3Full,
  DiAngularSimple,
  DiJavascript1,
  DiPhotoshop,
  DiIllustrator,
} from 'react-icons/di';
import {
  MdOutlineArrowForwardIos
} from 'react-icons/md'
import {
  IoLogoFirebase
} from 'react-icons/io5'

const ProjectCard = ({ content }: JBCard): ReactElement => {
  const ProjectCardStyles = "cursor-pointer relative flex justify-between items-center hover:bg-primary hover:text-dark text-white p-8 bg-darker"

  return (
    <motion.div
      key={content.id}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1], offset: 100 }}
      exit={{ scale: [1, 0], offset: 100 }}
      className={ProjectCardStyles}>

        <div>

          {/*  Title */}
          <motion.h2
            className="md:text-4xl text-2xl tracking-tight font-league-spartan font-medium text-left">
            {content.title}
          </motion.h2>

          {/* Content */}
          <div className="mt-4 flex gap-4 text-2xl mx-auto md:mx-0">
            {content.tools.html && <DiHtml5 />}
            {content.tools.sass && <DiSass />}
            {content.tools.react && <DiReact />}
            {content.tools.css && <DiCss3Full />}
            {content.tools.angular && <DiAngularSimple />}
            {content.tools.js && <DiJavascript1 />}
            {content.tools.photoshop && <DiPhotoshop />}
            {content.tools.illustrator && <DiIllustrator />}
            {content.tools.firebase && <IoLogoFirebase />}
          </div>

        </div>

       <span className="text-2xl">
        <MdOutlineArrowForwardIos />
       </span>
        
    </motion.div>
  );
};

export default ProjectCard;
