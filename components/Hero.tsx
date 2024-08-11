import { ReactElement } from "react";
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
import AnimatedComponent from "./Animated/AnimatedComponent";



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
            <AnimatedComponent>
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
              </div>
            </AnimatedComponent>
             {/* Title Text end */}
            {/* Hero Button */}
            {/* Hero Button */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
