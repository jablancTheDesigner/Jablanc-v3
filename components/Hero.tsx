import { ReactElement, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JBHeaderType, JBButtonType, JBHeroType } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";

export const TitleText = ({ title, subTitle }: JBHeaderType): ReactElement => {
  return (
    <motion.h1
      className="text-white z-2 relative py-4 md:py-8 font-league-spartan text-center"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1.2, 0.9, 1], opacity: [0, 1] }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <span className="block text-2xl md:text-3xl lg:text-4xl mb-4 text-white" data-testid="heading">
        {title}
      </span>
      <span
        className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold leading-[0.85] uppercase"
        data-testid="sub-heading">
        {subTitle}
      </span>
    </motion.h1>
  );
};

export const ProjectButton = ({ title, text }: JBButtonType): ReactElement => {
  return (
    <motion.div
      className="flex items-start gap-8 md:flex-row flex-col relative mb-8 mx-auto"
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
  const {activateBg} = usePortfolioContext();
  return (
    <div className="hero__background absolute left-0 top-0 leading-[0.7] text-center w-screen h-screen overflow-hidden flex flex-col  break-all justify-center">
      {activateBg && words?.map((word, idx) => {
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
  const { activateBg } = usePortfolioContext();
  return (
    <div className="hero bg-dark">
      <div className="container mx-auto min-h-screen relative flex flex-col items-center justify-center">
        <div className="relative flex max-w-sm md:max-w-lg lg:max-w-xl flex-col z-10 mx-auto">
            <TitleText title={title} subTitle={subTitle} />
            <ProjectButton title={buttonText} text={buttonText} />
        </div>
      </div>
      <Suspense fallback={null}>
            <HeroBg words={bgText} />
          </Suspense>
    </div>
  );
};

export default Hero;
