import { FC, ReactElement, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JBHeaderType, JBButtonType, JBHeroType } from "../src/dataTypes";

export const TitleText = ({ title, subTitle }: JBHeaderType): ReactElement => {
  return (
    <motion.h1
      className="text-dark z-2 relative p-4 md:p-8 font-league-spartan text-left md:text-center"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1] }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <span className="block text-2xl md:text-3xl mb-4" data-testid="heading">
        {title}
      </span>
      <span
        className="md:text-6xl lg:text-7xl text-7xl tracking-tighter font-bold leading-[0.85]"
        data-testid="sub-heading">
        {subTitle}
      </span>
    </motion.h1>
  );
};

export const ProjectButton = ({ title, text }: JBButtonType): ReactElement => {
  return (
    <motion.div
      className="flex md:items-center items-start gap-8 justify-center md:flex-row flex-col relative"
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

const HeroBg = ({ words }): ReactElement => {
  return (
    <div className="hero__background absolute left-0 top-0 leading-[0.7] text-center w-screen h-screen overflow-hidden flex flex-col  break-all justify-center">
      {words?.map((word, idx) => {
        return (
          <div className="opacity-10" key={idx}>
            <h1
              className="text-primary font-bold tracking-tighter break-none lg:text-[15rem] md:text-[11rem] text-[7rem]  text-center uppercase whitespace-nowrap"
              key={idx}>
              {word}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

const Hero = ({
  title,
  subTitle,
  buttonText,
  bgText,
}: JBHeroType): ReactElement => {
  return (
    <div className="hero flex flex-col items-center justify-center bg-dark flex-1">
      <div className="relative z-1 flex max-w-lg lg:max-w-2xl md:max-w-xl flex-col z-10">
        <TitleText title={title} subTitle={subTitle} />
        <ProjectButton title={buttonText} text={buttonText} />
      </div>
      <HeroBg words={bgText} />
    </div>
  );
};

export default Hero;
