import Button from "./Button";
import {FC, ReactElement} from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero:FC<any> = (props): ReactElement => {
    const styles = {
      'hero': 'hero min-h-screen flex flex-col items-center justify-center bg-dark',
      'headline':'relative z-1 relative text-center flex max-w-lg lg:max-w-2xl md:max-w-xl flex-col z-10',
    }

    const bgWords: string[] = [
      'FrontEnd',
      'Developer',
      'Designer'
    ]

    return (
      <div className={styles.hero}>
          <div 
            className={styles.headline}>
            <motion.h1 
              className="text-dark z-2 relative tracking-tighter md:text-6xl lg:text-7xl text-4xl font-semibold p-4 md:p-8  font-league-spartan"
              initial={{scale: 0, opacity: 0}}
              whileInView={{scale: [0, 1.2, 0.9,  1], opacity: [0,1]}}
              transition={{type: "spring", stiffness: 400, damping: 17 }}>
              Hi I&apos;m Jahmal, a Frontend Developer & Designer based in Alpharetta, GA.
            </motion.h1>
            <motion.div 
              className="flex items-center gap-8 justify-center md:flex-row flex-col relative"
              initial={{top: 50, opacity: 0}}
              whileInView={{top: [-30, 10, 0], opacity: 1}}
              transition={{type: "spring", stiffness: 400, damping: 17, delay: .75 }}>
              <Link href="/projects">
                  <a className="app-button"> 
                  The Work
                  </a>
              </Link>
            </motion.div>
          </div>
          
          <div className="hero__background absolute left-0 top-0 leading-[0.7] text-center w-screen h-screen overflow-hidden flex flex-col  break-all justify-center">
            
              {bgWords.map( (word,idx) => {
                return (
                  <div className="opacity-10" key={idx}>
                    <h1 className="text-primary font-bold tracking-tighter break-none lg:text-[15rem] md:text-[11rem] text-[7rem]  text-center  animate-pulse uppercase whitespace-nowrap" key={idx}>
                      {word}
                    </h1>
                  </div>
                )
              })}

          </div>
      </div>
    )
}

export default Hero;