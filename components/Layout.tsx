import React, { FC, ReactElement, useState, createContext } from "react";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import PortfolioContextProvider, { usePortfolioContext } from "../context/PortfolioContext";
import Loader from "./Loader";

const Layout = ({ children }): ReactElement => {
  return (
    <PortfolioContextProvider>
      <Nav />
      <main className="min-h-screen flex">{children}</main>
      <SocialLinks />
      <Loader />
    </PortfolioContextProvider>
  );
};

export default Layout;
