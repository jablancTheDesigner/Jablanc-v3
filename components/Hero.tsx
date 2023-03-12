import { ReactElement, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JBHeaderType, JBButtonType, JBHeroType } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
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
  SiTailwindcss
} from 'react-icons/si';

export const TechUsed = (): ReactElement => {
  return (
    <motion.div className="text-3xl flex flex-wrap items-start gap-6 md:gap-10 md:flex-row relative mt-8 md:mb-0 mb-8 md:justify-center justify-start text-white pr-8 md:pr-0">
      <p><DiHtml5 /></p>
      <p><DiSass /></p>
      <p><DiReact /></p>
      <p><DiAngularSimple /></p>
      <p><DiJavascript1 /></p>
      <p><DiPhotoshop /></p>
      <p><DiIllustrator /></p>
      <p><SiTailwindcss /></p>
    </motion.div>
  )
}

export const TitleText = ({ title, subTitle }: JBHeaderType): ReactElement => {
  return (
    <>
      <motion.div
        className="text-white z-2 relative py-4 md:py-8 font-league-spartan md:text-center px-4"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <h4 className="block text-xl md:text-3xl lg:text-4xl mb-4 text-white" data-testid="heading">
          {title}
        </h4>
        <h2
          className="text-5xl md:text-5xl lg:text-6xl tracking-tight font-bold leading-[0.85] uppercase"
          data-testid="sub-heading">
          {subTitle}
        </h2>
        <TechUsed />
      </motion.div>
    </>
  );
};

export const ProjectButton = ({ title, text }: JBButtonType): ReactElement => {
  return (
    <motion.div
      className="flex items-start gap-8 md:flex-row flex-col relative mb-8 ml-4 md:mx-auto"
      initial={{ top: 50, opacity: 0 }}
      whileInView={{ top: [-30, 10, 0], opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.75 }}>
      <Link href="/projects">
        <a className="app-button" data-testid="work-btn" title={title}>
          {text}
        </a>
      </Link>
    </motion.div>
  );
};

export const HeroBg = (): ReactElement => {
  return (
    <div className="hero__background absolute left-0 top-0 leading-[0.7] text-center w-screen h-screen overflow-hidden flex flex-col  break-all justify-center">
    </div>
  );
};




const Hero = ({
  title,
  subTitle,
  buttonText,
}: JBHeroType): ReactElement => {
  return (
    <div className="hero bg-dark">
      <div className="container mx-auto min-h-screen relative flex flex-col items-center justify-center">
        <div className="relative flex max-w-lg md:max-w-xl lg:max-w-3xl flex-col z-10 mx-auto">
            <TitleText title={title} subTitle={subTitle} />
            <ProjectButton title={buttonText} text={buttonText} />
        </div>
      </div>
      <HeroBg />
    </div>
  );
};

export default Hero;
