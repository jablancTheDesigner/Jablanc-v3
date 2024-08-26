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
import SocialLinks from "./SocialLinks";
import Footer from "./Footer";
import Nav from "./Nav";



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
      <p key={index} className="text-primary opacity-30"><Icon /></p>
    )
  }
  return (
    
<div id="hero" className="hero h-[95%] min-h-[600px] flex flex-col items-center justify-center">
      <Nav /> 
      <div className="container m-auto relative flex flex-col items-center justify-center px-4">
        <div className="relative flex max-w-xs md:max-w-md lg:max-w-xl flex-col z-10 md:w-full ">
            {/* Title Text */}
            <AnimatedComponent>
              <div className="flex items-center gap-8 justify-center">
                <SocialLinks />
                <div className="text-white z-2 relative font-league-spartan text-left flex flex-col gap-4">
                  <h4 
                    className="block text-xl md:text-3xl lg:text-4xl text-white" 
                    data-testid="heading">
                    {title},
                  </h4>
                  <h2
                    className="text-5xl tracking-tight font-bold leading-[0.85] uppercase"
                    data-testid="sub-heading">
                    {subTitle}.
                  </h2>
                  <h4 className="block text-4xl text-white" data-testid="heading">
                    I like to build things for the web.
                  </h4>
                  {/* <motion.div 
                    className="text-3xl relative justify-start text-primary flex-wrap items-start gap-4 md:gap-8 md:max-w-full hidden md:flex">
                    {icons.map((icon, idx) => {
                      return (
                        renderIcon(icon, idx)
                      )
                    })}
                  </motion.div> */}
                </div>
              </div>
            </AnimatedComponent>
             {/* Title Text end */}
            {/* Hero Button */}
            {/* Hero Button */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
