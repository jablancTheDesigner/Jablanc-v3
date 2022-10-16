import { useState, useRef } from "react";
import Logo from "./Logo";
import Link from 'next/link';

function Nav(){
    let [open, setOpen] = useState(false);
    const styles = {
        'link': 'hover:text-accent tracking-tight md:text-5xl lg:text-7xl text-4xl font-bold'
    }

    const renderNavTriger = (color: string = '#7696A8') => {
        if(open){
            return (
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.0001" y="13.5456" width="19.1563" height="4.27119" rx="2.13559" transform="rotate(-45 12.0001 13.5456)" fill={color} />
                    <rect x="15.0203" y="10.6833" width="19.1563" height="4.27119" rx="2.13559" transform="rotate(45 15.0203 10.6833)" fill={color} />
                    <rect x="16.5657" y="13.7034" width="19.1563" height="4.27119" rx="2.13559" transform="rotate(135 16.5657 13.7034)" fill={color} />
                    <rect x="13.5455" y="16.5657" width="19.1563" height="4.27119" rx="2.13559" transform="rotate(-135 13.5455 16.5657)" fill={color} />
                </svg>
            )
        }
        return (
            <svg width="46" height="22" viewBox="0 0 46 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="6" rx="3" fill={color}/>
                <rect x="19.0944" y="16" width="26.9057" height="6" rx="3" fill={color} />
            </svg>
        )
    }

    const links = [
        {url:'/', name:'Home'},
        {url:'/projects', name:'Projects'},
        {url:'/blog', name:'Blog'},
        {url:'/contact', name:'Contact'},
    ];

    return (
        <header>
            <nav className="border-b border-primary flex w-full fixed left-1/2 right-0 h-[var(--nav-height)] text-dark p-0 z-[99] -translate-x-1/2">
                    <Link href="/">
                            <a className="relative px-4 py-0 flex items-center justify-center w-[75px] bg-primary">
                                <Logo color="white"></Logo>
                            </a>
                    </Link>
                <div className="relative flex ml-auto">
                    <button className="bg-primary text-white w-16 m-auto relative z-[9] border-none appearance-none cursor-pointer opacity-100 px-4 py-0 flex h-full items-center border-l border-primary hover:opacity-80"
                            onClick={()=> setOpen(!open)}>
                            {renderNavTriger('white')}
                    </button>
                </div>
            </nav>

            <div className={`fixed right-0 top-0 transition-all ease-in-out ${open ? 'opacity-100 z-50' : 'opacity-0 -z-[1]'}`}>
                <div className="w-screen h-screen p-4 flex flex-col fixed top-0 left-0 pt-[var(--nav-height)] justify-center text-center bg-primary/[90%]">
                    <div className="-mt-[var(--nav-height)] flex flex-col max-w-2xl mx-auto">
                        {links.map( (link, index) => {
                            return <Link href={link.url} key={index}>
                                <a className="hover:text-dark drop-shadow-lg tracking-tight md:text-5xl lg:text-7xl text-4xl font-medium mb-4 text-white last-of-type:mb-0" 
                                   onClick={()=>setOpen(false)}>
                                    {link.name}
                                </a>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;