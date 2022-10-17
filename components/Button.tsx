import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { TbClick } from 'react-icons/tb';

type Apperance =  'outline' | 'fill';
type Theme = 'primary' | 'dark' | 'accent' | 'transparent' | 'white';

interface Button {
    name: string,
    link?: string, 
    click?: (...args: any[])=> void, 
    type?: 'button'| 'submit',
}

const Button:FC<Button> = (props) => {

    const [link, setLink] = useState(props.link);

    if(!link) setLink('#');

    return (
        <Link href={link}>
            <a className="app-button" onClick={props.click ? () => props.click : null}> 
                {props.name} 
            </a>
        </Link>
    )
}
 export default Button;