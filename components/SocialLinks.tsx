import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";

const links = [
  { icon: <FaLinkedinIn />, address: "https://www.linkedin.com" },
  { icon: <FaGithub />, address: "https://www.github.com" },
  { icon: <AiTwotoneMail />, address: "mailto:jablancdesigns@gmail.com" },
];

function SocialLinks() {
  return (
    <div className="h-16 flex fixed bottom-0 left-0 text-2xl text-primary md:w-auto w-full z-[3]">
      <ul className="list-none border-r border-t border-dark mt-auto flex w-full justify-evenly bg-dark">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className="p-0 list-none text-2xl w-auto flex items-center">
              <Link href={link.address}>
                <a className="app-button">{link.icon}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
