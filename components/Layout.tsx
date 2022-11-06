import { FC, ReactElement } from 'react';
import Nav from './Nav';
import SocialLinks from './SocialLinks';
import Head from 'next/head';

const Layout:FC<any> = ({children}): ReactElement => {
    return (
        <>
            <Nav />
            <main className='min-h-screen flex'>{children}</main>
            <SocialLinks />
        </>
    )
}

export default Layout;