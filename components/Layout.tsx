import React, { FC, ReactElement, useState, createContext } from "react";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import PortfolioContextProvider, { usePortfolioContext } from "../context/PortfolioContext";
import Loader from "./Loader";
import Body from "./Body";
import CurrentLocation from "./CurrentLocation";

const Layout = ({ children }): ReactElement => {
  return (
    <PortfolioContextProvider>
        <Nav />
        {children}
        <SocialLinks />
        <Loader />
        <CurrentLocation />
    </PortfolioContextProvider>
  );
};

export default Layout;
