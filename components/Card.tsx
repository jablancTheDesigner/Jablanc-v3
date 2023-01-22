import { motion } from "framer-motion";
import { ReactElement } from "react";
import Image from "next/image";
import { JBCard } from "../src/dataTypes";
import Link from "next/link";
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
  IoLogoFirebase
} from 'react-icons/io5'

const Card = ({ 
  content, 
  layout
}: JBCard): ReactElement => {
  const isGrid = layout == "grid";
  const styles = (): string => {
    let customClasses = "";
    switch (layout) {
      case "grid":
        customClasses += "md:h-screen max-h-[800px]";
        break;
      case "row":
        customClasses += "h-auto";
        break;
      case "tile":
        "";
        break;
      default:
        customClasses += "md:h-screen max-h-[800px]";
    }
    return customClasses;
  };

  return (
    <motion.div
      key={content.id}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1], offset: 100 }}
      exit={{ scale: [1, 0], offset: 100 }}
      className={`cursor-pointer relative flex flex-col justify-center mb-8 hover:bg-primary hover:text-dark text-white p-8 ${styles}`}>
        <motion.h2
          className={`md:text-4xl text-2xl tracking-tight font-league-spartan font-medium text-center md:text-left`}>
          {content.title}
        </motion.h2>
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
        
    </motion.div>
  );
};

export default Card;
