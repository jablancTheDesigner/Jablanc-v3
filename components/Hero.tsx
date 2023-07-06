import { ReactElement } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JBHeroType } from "../src/dataTypes";
import {
  DiHtml5,
  DiSass,
  DiReact,
  DiAngularSimple,
  DiJavascript1,
  DiPhotoshop,
  DiIllustrator,
} from 'react-icons/di';
import {
  SiTailwindcss
} from 'react-icons/si';
import { scrollToSection } from "../utilities/utilityFunctions";



const Hero = ({
  title,
  subTitle,
  buttonText,
}: JBHeroType): ReactElement => {
  const icons = [
    DiHtml5,
    DiSass,
    DiReact,
    DiAngularSimple,
    DiJavascript1,
    DiPhotoshop,
    DiIllustrator,
    SiTailwindcss
  ]

  const renderIcon = (Icon , index) => {
    return (
      <p className="mx-auto" key={index}><Icon /></p>
    )
  }
  return (
    <div id="hero" className="hero bg-dark h-full py-[var(--nav-height)] flex flex-col items-center justify-center">
      <div className="container mx-auto relative flex flex-col items-center justify-center px-4">
        <div className="relative flex max-w-md md:max-w-xl lg:max-w-3xl flex-col z-10 mx-auto md:w-full ">
            {/* Title Text */}
            <div className="text-white z-2 relative py-4 md:py-8 font-league-spartan text-center px-4">
              <h4 className="block text-xl md:text-3xl lg:text-4xl mb-4 text-white" data-testid="heading">
                {title}
              </h4>
              <h2
                className="text-5xl md:text-5xl lg:text-6xl tracking-tight font-bold leading-[0.85] uppercase"
                data-testid="sub-heading">
                {subTitle}
              </h2>
              <motion.div className="text-3xl relative mt-8 md:mb-0 mb-8 justify-center text-primary grid grid-cols-4 md:flex flex-wrap items-center gap-4 md:gap-8 md:max-w-full mx-auto">
                {icons.map((icon, idx) => {
                  return (
                    renderIcon(icon, idx)
                  )
                })}
              </motion.div>
            </div> {/* Title Text end */}
            {/* Hero Button */}
            <motion.div
              className="flex gap-8 md:flex-row flex-col relative mb-8  mx-auto"
              initial={{ top: 50, opacity: 0 }}
              whileInView={{ top: [-30, 10, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.75 }}>
              <button 
                className="app-button border" 
                data-testid="work-btn" 
                title={buttonText} 
                onClick={() => scrollToSection("projectList")}>
                  {buttonText}
                </button>
            </motion.div> {/* Hero Button */}
        </div>
      </div>
      {/* Hero Bg */}
      {/* <div className="hero__background absolute left-0 top-0 leading-[0.7] text-center w-screen h-full overflow-hidden flex flex-col  break-all justify-center">
      </div> */}
      {/* Hero Bg end */}
    </div>
  );
};

export default Hero;
