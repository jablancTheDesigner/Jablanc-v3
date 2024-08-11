import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
import { TiLocationOutline } from "react-icons/ti";

const links = [
  { icon: <FaLinkedinIn />, address: "https://www.linkedin.com/in/jahmal-blanchard-bb988433/" },
  { icon: <FaGithub />, address: "https://github.com/jablancTheDesigner" },
  { icon: <AiTwotoneMail />, address: "mailto:jablancdesigns@gmail.com" },
];

function SocialLinks() {
  return (
    <div className="flex justify-end text-lg text-primary md:w-auto w-full items-end my-8">
      <ul className="list-none flex flex-col w-full justify-evenly">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className="p-0 list-none text-2xl flex items-end">
              <Link href={link.address}>
                <a className="px-8 pt-8 text-xl" target="_blank">{link.icon}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
