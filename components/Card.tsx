import {  motion } from 'framer-motion';
import { FC, ReactElement, useState } from 'react';
import { Project } from '../src/project';
import Image from 'next/image';

interface Card {
    content: Project,
    layout: string
}

const Card:FC<Card> = ({content, layout}): ReactElement => {

    let isGrid = layout == 'grid';

    return (
        <motion.div key={content.id} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            initial={{scale: 0}}
            whileInView={{ scale: [0,1], offset: 100}}
            exit={{ scale: [1, 0], offset: 100}}
            className={`cursor-pointer relative flex flex-col justify-center mb-16 ${isGrid ? 'md:h-screen max-h-[800px]' : 'h-auto pb-4  border-b last-of-type:border-none'}`}>
            <motion.h2 
                className={`md:text-4xl text-2xl tracking-tight font-league-spartan font-medium text-white py-3 ${isGrid ? 'text-center' : 'text-left'}`}>{content.title}
            </motion.h2>
            <p className={`${isGrid ? 'text-center' : 'text-left'}`}>
                {content.url && <a href={content.url} target="_blank" rel="noreferrer">({content.url})</a>}
            </p>
            {isGrid && <motion.div className="transition-all ease-in-out box-content my-6">
                <Image src='https://placehold.jp/1000x650.jpg' width='1000px' height='650px' alt="Preview project Image" />
            </motion.div>}
            {content.description && <motion.p className="text-gray-300 text-lg font-thin font-league-spartan mt-4">
                {content.description}
            </motion.p>}
        </motion.div>
    )
}

export default Card;