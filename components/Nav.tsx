import { useState, ReactElement, useEffect } from "react";
import Link from "next/link";
import { usePortfolioContext } from "../context/PortfolioContext";
import NavLinks from "./NavLinks";
import AnimatedComponent from "./Animated/AnimatedComponent";
import { motion } from "framer-motion";
import Logo from "../public/images/logo.svg";
import BrandLogo from "./BrandLogo";

const links = [
  { url: "#top", name: "Home", active: true },
  { url: "#projectList", name: "Projects", active: true },
  { url: "/blog", name: "Blog", active: false },
  { url: "#contact", name: "Contact", active: true },
];

const Nav = (): ReactElement => {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const linkClasses =
    "app-button app-button--primary md:text-5xl lg:text-6xl text-4xl text-dark !font-bold";
  const {
    setSelectedProject,
    openProject,
    setOpenProject,
    navIsOpen,
    setNavIsOpen,
  } = usePortfolioContext();

  const handleNavLink = () => {
    setNavIsOpen(false);
  };

  const handleNavOpen = () => {
    setIsFirstLoad(false)
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {

    if (navIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navIsOpen]);

  return (
    <>
      <nav className="w-full p-8 top-0 left-0 right-0 mx-auto absolute flex justify-between items-center z-30 container">
        <BrandLogo />
        <div className={`flex flex-col ml-auto z-[20] text-right`}>
          <button
            className={`text-base font-semibold text-white uppercase leading-sung tracking-tight md:hidden block p-4 border border-white rounded-lg w-28`}
            onClick={() => handleNavOpen()}>
            {navIsOpen ? "Close" : "Menu"}
          </button>
          <div className="md:flex md:flex-col hidden">
            <NavLinks />
          </div>
        </div>
      </nav>

      <motion.div
        transition={{ type: "spring", stiffness: 700, damping: 5 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: isFirstLoad ? [0, 0] : navIsOpen ? [0, 1] : [1, 0] }}
        className={`w-full flex fixed top-0 left-0 z-20`}>
        <div className="w-screen h-screen p-4 flex flex-col pt-[var(--nav-height)] justify-center text-center bg-primary">
          <div className="-mt-[var(--nav-height)] flex flex-col max-w-2xl mx-auto">
            {links.map((link, index) => {
              return (
                <>
                  {link.active && (
                    <Link
                      href={link.url}
                      key={index}
                      className={`${linkClasses} hover:!text-white`}
                      onClick={() => handleNavLink()}>
                      {link.name}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
