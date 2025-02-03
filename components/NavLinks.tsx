import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { scrollToSection } from "../utilities/utilityFunctions";
import Button from "./Button/Button";

const NavLinks = (): ReactElement => {
  const [links, setLinks] = useState([
    { url: "top", name: "Home" },
    { url: "projectList", name: "Projects" },
    { url: "contact", name: "Contact" },
  ]);

  return (
    <ul className="flex gap-6 items-end">
      {links.map((link, index) => {
        return (
          <>
            <Button text={link.name} onClick={() => {
              scrollToSection(link.url)
            }} color="dark"/>
          </>
        );
      })}
    </ul>
  );
};

export default NavLinks;
