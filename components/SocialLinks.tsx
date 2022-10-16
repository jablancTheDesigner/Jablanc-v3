import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Link from 'next/link';

function SocialLinks(){
    const links = [
        {icon: <FaLinkedinIn/> , address: 'https://www.linkedin.com'},
        {icon: <FaGithub /> , address: 'https://www.github.com'},
        {icon: <AiTwotoneMail /> , address: 'mailto:jablancdesigns@gmail.com'}
    ]  
    return (
        <div className="h-16 flex fixed bottom-0 left-0 text-2xl text-primary md:w-auto w-full">
            <ul className="list-none border-r border-t border-primary mt-auto px-8 flex gap-8 items-center py-4 w-full justify-evenly">
                {links.map((link,i) => {
                    return (
                        <li key={i} className="p-0 list-none text-2xl w-auto flex items-center">
                            <Link href={link.address}>
                                <a className="hover:opacity-60">{link.icon}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialLinks;