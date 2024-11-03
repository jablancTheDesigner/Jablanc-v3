/* eslint-disable @next/next/no-img-element */
import { ReactElement, Suspense, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { JBProject, JBProjectType, Project } from "../src/dataTypes";
import { usePortfolioContext } from "../context/PortfolioContext";
import dynamic from "next/dynamic";
import AnimatedComponent from "./Animated/AnimatedComponent";
import AnimatedHeader from "./Animated/AnimatedHeader";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const Masonry = dynamic(() => import("react-masonry-list"), {
  ssr: false,
});

const ProjectsList = (): ReactElement => {
  const { projects, setSelectedProject } = usePortfolioContext();
  const pageTite = "Client Work & Projects";

  const handleUrl = (project: JBProject) => {
    if (!project.url) {
      setSelectedProject(project);
      return;
    }
    window.open(project.url, "_blank");
  };

  return (
    <div
      id="projectList"
      className="min-h-full flex text-primary font-league-spartan w-full bg-primary py-28">
      <div className="container mx-auto px-4 relative">
        <div className="gap-4 flex-col mb-8">
          <AnimatedComponent>
            <div className="md:top-[calc(var(--nav-height)+2rem)] flex flex-col py-8 h-auto max-w-lg mx-auto">
              <AnimatedComponent>
                <h2
                  className="text-5xl tracking-tight font-bold leading-[0.85] uppercase text-darker text-center mb-8"
                  data-testid="sub-heading">
                  {pageTite}
                </h2>
              </AnimatedComponent>
            </div>
          </AnimatedComponent>

          <div className="flex flex-col justify-center gap-5">
            {projects.map((item) => (
              <motion.div
                key={item.id}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1], offset: 100 }}
                exit={{ scale: [1, 0], offset: 100 }}
                className={`py-8  w-full leading-snug max-w-5xl mx-auto`}>
                <div className="flex flex-col items-center justify-center gap-9 w-full">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={500}
                    height={item.image.height ?? 350}
                    className="!h-auto mb-4"
                  />
                  <div className="text-xl md:text-3xl font-bold text-darker w-full max-w-lg text-center">
                    <h3 className="mb-4 uppercase">{item.title}</h3>
                    {item.url && (
                      <Link
                        href={item.url}
                        target="_blank"
                        className="text-lg text-secondary hover:bg-white hover:text-dark px-8 py-3 rounded-md bg-dark text-white">
                        Link
                      </Link>
                    )}
                    {!item.url && (
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="text-lg text-secondary hover:bg-white hover:text-dark px-8 py-3 rounded-md bg-dark text-white">
                        Link
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
