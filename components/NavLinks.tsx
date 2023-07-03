import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";

const NavLinks = () : ReactElement => {
    const [links, setLinks] = useState([
        { url: "top", name: "Home", active: true },
        { url: "projectList", name: "Projects", active: true },
    ])

    const scrollToLink = (link) => {
        const scrollOffset = document.getElementById(`${link}`).offsetTop
        window.scroll({
            top: scrollOffset,
            behavior: 'smooth'
          });
    }
    return (
        <ul className="flex flex-col gap-2">
            {links.map((link, index) => {
                return (
                  <>
                    {link.active && (
                      <p
                      className="text-base text-white font-semibold cursor-pointer opacity-50"
                      onClick={() => scrollToLink(link.url)}>
                      {link.name}
                    </p>
                    )}
                  </>
                );
              })}
        </ul>
    )
}

export default NavLinks;