"use client";
import { motion } from "framer-motion";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
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
import { IoLogoFirebase } from "react-icons/io5";
import { JBProject } from "../src/dataTypes";

import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
import Loader from "./Loader";

interface StatsCardPropsType {
  count: string;
  title: string;
  description: string;
}

const imageLoader = ({ src, width, quality }) => {
  return `https://placehold.jp/500x400.png`;
};

const SelectedProject = (): ReactElement => {
  const { selectedProject, setSelectedProject, setOpenProject } =
    usePortfolioContext();

  const labelStyles = "mb-2 text-sm uppercase font-bold text-primary";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setSelectedProject(undefined);

  return (
    <Dialog
      size="sm"
      className="bg-dark"
      open={selectedProject?.id ? true : false}
      handler={handleOpen}
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}>
      {selectedProject?.id && (
        <div className="mx-auto relative p-4 text-center">
          <Typography
            className="text-3xl leading-snug text-white mb-1"
            variant="h2"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            {selectedProject.title}
          </Typography>
          <Typography
            className="text-xl leading-snug text-white mb-1"
            variant="h2"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            Client: {selectedProject.client}
          </Typography>
          <Typography
            className="text-base max-w-xs font-normal leading-normal !text-gray-400 mb-12 mx-auto mt-4"
            variant="paragraph"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            {selectedProject.description}
          </Typography>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-auto w-full relative flex justify-center">
              <Image
                alt={"bbn"}
                src={selectedProject.imageUrl}
                width={500}
                height={400}
                style={{
                  width: "100%",
                }}
                className="h-full w-full object-cover object-center rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default SelectedProject;