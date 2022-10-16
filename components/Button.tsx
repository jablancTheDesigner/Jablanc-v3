import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';

type Apperance =  'outline' | 'fill';
type Theme = 'primary' | 'dark' | 'accent' | 'transparent' | 'white';

interface Button {
    name: string,
    link?: string, 
    click?: Function, 
    type?: 'button'| 'submit',
    apperance: Apperance,
    theme?: Theme,
}

const Button:FC<Button> = (props) => {

    const [theme, setTheme] = useState(props.theme);
    const [link, setLink] = useState(props.link);

    if(!theme) setTheme('primary');
    if(!link) setLink('#');

    const classnames = "text-2xl h-full flex items-center font-bold px-8 py-4 border-2 transition duration-150 ease-out h-16";

    const styles = {
        'outline': `${classnames} hover:border-dark hover:text-dark border-${theme} text-${theme}`,
        'fill': `${classnames} border-transparent text-white  hover:border-primary bg-${theme}`
    }

    return (
        <Link href={link}>
            <a className={styles[props.apperance]}> 
                {props.name} 
            </a>
        </Link>
    )
}
 export default Button;