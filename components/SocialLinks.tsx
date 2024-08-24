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
    <div className="flex justify-end text-lg text-primary w-auto items-end">
      <ul className="list-none flex flex-col w-full justify-evenly gap-8">
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className="p-0 list-none text-2xl flex items-end min-w-[24px]">
              <Link href={link.address}>
                <a className="text-3xl lg:text-2xl" target="_blank">{link.icon}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
