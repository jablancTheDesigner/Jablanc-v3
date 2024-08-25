import { useState, ReactElement } from "react";
import Link from "next/link";
import { usePortfolioContext } from "../context/PortfolioContext";
import NavLinks from "./NavLinks";
import AnimatedComponent from "./Animated/AnimatedComponent";
import { motion } from "framer-motion";

const links = [
  { url: "#top", name: "Home", active: true },
  { url: "#projectList", name: "Projects", active: true },
  { url: "/blog", name: "Blog", active: false },
  { url: "#contact", name: "Contact", active: true },
];

const Logo = (): ReactElement => {
  return (
    <svg
      className="w-[35px] h-auto mx-auto"
      width={48}
      height={48}
      viewBox="0 0 50 48"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_115_133)">
        <path d="M49.8511 2.291L50 0H0L2.94197 4.30672H45.1223C44.3326 7.70771 41.9637 13.7105 34.9788 14.2078L33.1739 14.3321L34.7442 6.85524H30.2906L28.6211 14.6251L25.8009 14.8205L21.2616 15.1357L20.305 15.1979L21.2075 15.3977L25.476 16.3656L28.1247 16.9649L27.0373 22.0442L25.8099 27.2167L20.8465 48L24.4112 47.0188C30.4604 45.18 36.0944 42.2152 41.0071 38.2854C45.7134 34.405 48.335 30.6976 48.8539 27.2167C49.0247 26.1386 48.9833 25.0383 48.7321 23.9756C47.8567 20.4236 44.7974 18.035 41.8419 16.5076C47.5228 13.1333 49.5939 6.30025 49.8511 2.291ZM44.468 24.9968C44.6305 25.7315 44.6041 26.4945 44.3913 27.2167C43.7912 29.4367 41.684 32.1006 38.196 34.9821C34.7804 37.7167 30.9712 39.9372 26.8929 41.571L30.3041 27.2167L31.3149 22.9766L32.3888 17.9284L34.6449 18.439C37.068 18.9851 43.552 21.2317 44.468 24.9968Z" />
        <path d="M4.28664 6.62439L7.21959 10.9356H21.7038L20.8691 14.9004L20.8104 15.1668L19.9937 19.1627L18.7528 25.2099H18.7167L15.8379 39.6619C12.7979 36.5262 10.2505 32.9616 8.27997 29.086C7.26756 27.1173 6.51833 25.028 6.05092 22.8701H1.60187C2.09428 25.6881 3.01613 28.4168 4.33628 30.964C7.17278 36.5244 11.0664 41.4981 15.8064 45.6158L18.6491 47.9467L22.3536 29.2991L24.0096 21.3072L25.079 16.1347L25.4039 14.5896L27.0734 6.62439H4.28664Z" />
      </g>
      <defs>
        <clipPath id="clip0_115_133">
          <rect width="50" height="48" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Nav = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const linkClasses = "app-button app-button--primary md:text-5xl lg:text-6xl text-4xl !text-dark !font-bold";
  const { setSelectedProject, openProject, setOpenProject, navIsOpen, setNavIsOpen } = usePortfolioContext();

  const handleNavLink = () => {
    setOpen(false);
    setClose(true)
    if(openProject){
      setSelectedProject(null);
      setOpenProject(false);
      setNavIsOpen(false)
    }
  }

  const handleNavOpen = () => {
    setOpen(!open)
    setClose(!!open)
    setNavIsOpen(!navIsOpen)
  }

  return (
    <header className="w-full z-[20] p-8 fixed top-0">
      <nav className="mx-auto relative flex w-full justify-between items-center z-30">
          <Link href="/">
            <a 
              className={`px-4 py-0 flex items-center justify-center w-[75px] fill-primary ${open ? "!fill-white" : "fill-primary"}`}>
              <Logo />
            </a>
          </Link>
          <div className={`flex flex-col ml-auto z-[20] text-right`}>
            <button
              className={`w-16 m-auto relative z-[9] appearance-none cursor-pointer opacity-100 !px-4 py-0 h-full items-center justify-center text-center hover:opacity-80 ${open ? "fill-dark" : "fill-primary"} md:hidden flex`}
              onClick={() => handleNavOpen()}>
              {!open && (
                <svg
                  width="46"
                  height="22"
                  viewBox="0 0 46 22"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="46" height="6" rx="3" />
                  <rect x="19.0944" y="16" width="26.9057" height="6" rx="3" />
                </svg>
              )}
              {open && (
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="12.0001"
                    y="13.5456"
                    width="19.1563"
                    height="4.27119"
                    rx="2.13559"
                    transform="rotate(-45 12.0001 13.5456)"
                  />
                  <rect
                    x="15.0203"
                    y="10.6833"
                    width="19.1563"
                    height="4.27119"
                    rx="2.13559"
                    transform="rotate(45 15.0203 10.6833)"
                  />
                  <rect
                    x="16.5657"
                    y="13.7034"
                    width="19.1563"
                    height="4.27119"
                    rx="2.13559"
                    transform="rotate(135 16.5657 13.7034)"
                  />
                  <rect
                    x="13.5455"
                    y="16.5657"
                    width="19.1563"
                    height="4.27119"
                    rx="2.13559"
                    transform="rotate(-135 13.5455 16.5657)"
                  />
                </svg>
              )}
            </button>
            <div className="md:flex md:flex-col hidden">
              <NavLinks />
            </div>
          </div>
      </nav>

      <motion.div 
            transition={{ type: "spring", stiffness: 700, damping: 5 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: open ? [0, 1] : close ? [1,0] : [0,0]}}
            className="w-full flex fixed top-0 left-0">
            <div className="w-screen h-screen p-4 flex flex-col pt-[var(--nav-height)] justify-center text-center bg-primary">
              <div className="-mt-[var(--nav-height)] flex flex-col max-w-2xl mx-auto">
                {links.map((link, index) => {
                  return (
                    <>
                      {link.active && (
                        <Link href={link.url} key={index}>
                          <a
                            className={`${linkClasses} hover:!text-white`}
                            onClick={() => handleNavLink()}>
                            {link.name}
                          </a>
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
        </motion.div>

    </header>
  );
};

export default Nav;
