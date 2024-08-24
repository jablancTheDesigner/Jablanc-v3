import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { scrollToSection } from "../utilities/utilityFunctions";

const NavLinks = () : ReactElement => {
    const [links, setLinks] = useState([
        { url: "top", name: "Home", active: true },
        { url: "projectList", name: "Projects", active: true },
        { url: "contact", name: "Contact", active: true },
    ])

    return (
        <ul className="flex flex-col gap-2 items-end">
            {links.map((link, index) => {
                return (
                  <>
                    {link.active && (
                      <button
                        className="text-base text-white font-semibold cursor-pointer opacity-50"
                        onClick={() => scrollToSection(link.url)}>
                      {link.name}
                    </button>
                    )}
                  </>
                );
              })}
        </ul>
    )
}

export default NavLinks;