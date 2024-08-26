import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { scrollToSection } from "../utilities/utilityFunctions";

const NavLinks = () : ReactElement => {
    const [links, setLinks] = useState([
        { url: "top", name: "Home" },
        { url: "projectList", name: "Projects" },
        { url: "contact", name: "Contact" },
    ])

    return (
        <ul className="flex flex-col gap-2 items-end">
            {links.map((link, index) => {
                return (
                  <>
                      <button
                        className="text-base text-white font-semibold cursor-pointer hover:text-primary uppercase"
                        onClick={() => scrollToSection(link.url)}>
                      {link.name}
                    </button>
                  </>
                );
              })}
        </ul>
    )
}

export default NavLinks;