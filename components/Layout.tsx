import React, { FC, ReactElement, useState, createContext } from "react";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import PortfolioContextProvider, { usePortfolioContext } from "../context/PortfolioContext";
import CurrentLocation from "./CurrentLocation";

const Layout = ({ children }): ReactElement => {
  return (
    <PortfolioContextProvider>
        <Nav />
        {children}
        <SocialLinks />
        <CurrentLocation />
    </PortfolioContextProvider>
  );
};

export default Layout;
