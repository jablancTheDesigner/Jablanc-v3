import { FC, ReactElement } from 'react';
import Nav from './Nav';
import SocialLinks from './SocialLinks';
import Head from 'next/head';

const Layout:FC<any> = ({children}): ReactElement => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <SocialLinks />
        </>
    )
}

export default Layout;