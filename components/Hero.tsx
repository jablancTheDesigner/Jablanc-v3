import { ReactElement, useEffect } from "react";
import { JBHeroType } from "../src/dataTypes";
import {
  DiHtml5,
  DiSass,
  DiReact,
  DiAngularSimple,
  DiJavascript1,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import AnimatedComponent from "./Animated/AnimatedComponent";
import SocialLinks from "./SocialLinks";
import Nav from "./Nav";

const Hero = (): ReactElement => {
  const icons = [
    DiHtml5,
    DiSass,
    DiReact,
    DiAngularSimple,
    DiJavascript1,
    DiPhotoshop,
    DiIllustrator,
    SiTailwindcss,
  ];

  return (
    <>
      <div
        id="hero"
        className="hero h-full flex flex-col items-center justify-center bg-darker relative z-10 md:min-h-[650px]">
        <Nav />
        <div className="container m-auto relative flex flex-col items-center justify-center px-4">
          <div className="relative flex max-w-3xl flex-col z-10 md:w-full ">
            <AnimatedComponent>
              <div className="flex items-center gap-8 justify-center">
                <div className="text-white z-2 relative font-league-spartan text-center flex flex-col gap-4 items-center">
                  <h2
                    className="text-3xl md:text-5xl tracking-tight font-bold leading-none uppercase mb-6"
                    data-testid="sub-heading">
                      Hi! I&apos;m Jahmal, <span className="text-primary">a Frontend Engineer & Designer</span> <span className="text-gray-600">based in Austin, TX.</span> <span className="text-white">I like to build things for the web.</span>
                  </h2>
                  <SocialLinks />
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
