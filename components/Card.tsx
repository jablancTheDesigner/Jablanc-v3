import {  motion } from 'framer-motion';
import { FC, ReactElement } from 'react';
import { Project } from '../src/project';
import Image from 'next/image';

interface Card {
    content: Project
}

const Card:FC<Card> = ({content}): ReactElement => {
    return (
        <motion.div key={content.id} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            initial={{scale: 0}}
            whileInView={{ scale: [0,1], offset: 100}}
            exit={{ scale: [1, 0]}}
            className="md:h-screen cursor-pointer relative flex flex-col items-center justify-center">
            <motion.h2 
                className="md:text-4xl text-2xl tracking-tight font-league-spartan font-medium text-white text-center py-3 mb-4">{content.title}
            </motion.h2>
            <motion.div className="transition-all ease-in-out box-content">
                <Image src='https://placehold.jp/1000x650.jpg' width='1000px' height='650px' alt="Preview project Image" />
            </motion.div> 
            <motion.p className="text-gray-300 text-lg font-thin font-league-spartan mt-4 hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nam alias ullam illum minus in necessitatibus. 
            </motion.p>
        </motion.div>
    )
}

export default Card;