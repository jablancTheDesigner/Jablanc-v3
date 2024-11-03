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
} from "react-icons/di";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ content }: JBCard): ReactElement => {
  const ProjectCardStyles =
    "relative flex flex-col justify-between items-center text-white py-8 uppercase w-full";

  return (
    <motion.div
      key={content.id}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1], offset: 100 }}
      exit={{ scale: [1, 0], offset: 100 }}
      className="flex flex-col">
      <div className="relative w-full h-[400px]">
        <Image
          src={content.thumbnail}
          alt="Project thumbnail"
          layout="fill"
          objectFit="cover"
          objectPosition={content.type === "branding" ? "center" : "top left"}
        />
      </div>

      <div className="relative flex flex-col items-center text-white py-8 uppercase w-full">
        {/*  Title */}
        <motion.h2 className="md:text-4xl text-3xl tracking-tight font-league-spartan font-bold md:text-left text-center text-white">
          {content.title}
        </motion.h2>

        {/* Content */}
        <div className="mt-4 flex gap-4 text-2xl mx-auto md:mx-0 justify-center md:justify-start">
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

        <div className="text-xl flex gap-4 mt-4">
          {content.codeLink && (
            <a
              href={content.codeLink}
              className="flex gap-2 hover:opacity-60"
              target="_blank"
              rel="noreferrer">
              Code <AiFillGithub />
            </a>
          )}
          {content.url && (
            <a
              href={content.url}
              className="flex gap-2 hover:opacity-60"
              target="_blank"
              rel="noreferrer">
              Demo <FiExternalLink />
            </a>
          )}
          {content.type == "branding" && (
            <Link href={`/project/${content.slug}`}>
              <a className="flex gap-2 hover:opacity-60">
                Case Study <MdOutlineArrowForwardIos />
              </a>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
