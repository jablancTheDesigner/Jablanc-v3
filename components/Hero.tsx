import Button from "./Button";
import {FC, ReactElement} from 'react';
import Link from 'next/link';

const Hero:FC<any> = (props): ReactElement => {
    const styles = {
      'hero': 'hero min-h-screen flex flex-col items-center justify-center bg-dark',
      'headline':'relative z-1 relative text-center flex max-w-2xl flex-col z-10',
      'h1': 'text-white z-2 relative tracking-tight md:text-6xl lg:text-7xl text-4xl font-bold p-8 drop-shadow-lg'
    }

    const showArgs = (e: Event) => {
      e.preventDefault();
      console.log('clicked')
    }

    return (
      <div className={styles.hero}>
          <div className={styles.headline}>
            <h1 className={styles.h1}>
              Hi I&apos;m Jahmal, a Frontend Developer & Designer based in Alpharetta, GA.
            </h1>
            <div className="flex items-center gap-8 justify-center md:flex-row flex-col">
              <Link href="/projects">
                  <a className="app-button"> 
                  The Work
                  </a>
              </Link>
            </div>
          </div>
          <div className="hero__background absolute left-1/2 -translate-x-1/2 top-0 leading-[.7] text-center w-screen h-screen overflow-hidden flex items-center justify-between">
            <h1 className="text-primary font-bold tracking-tighter break-none lg:text-[22rem] md:text-[19rem] text-[15rem] opacity-5 text-center">
              <span className="block mx-auto animate-pulse">FRONT END </span>
              <span className="block mx-auto animate-pulse">DEVELOPER</span>
              <span className="block mx-auto animate-pulse">DESIGNER</span>
            </h1>
          </div>
      </div>
    )
}

export default Hero;