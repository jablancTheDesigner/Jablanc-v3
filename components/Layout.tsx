import React, { FC, ReactElement, useState, createContext } from "react";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import PortfolioContextProvider, { usePortfolioContext } from "../context/PortfolioContext";
import CurrentLocation from "./CurrentLocation";
import Footer from "./Footer";

const Layout = ({ children }): ReactElement => {
  return (
    <PortfolioContextProvider>
        {children}
    </PortfolioContextProvider>
  );
};

export default Layout;
