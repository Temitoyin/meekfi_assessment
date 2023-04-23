import PropTypes from "prop-types";
import React from "react";

import SideBar from "@components/SideBar/SideBar";

import Navigation from "@components/Navigation/Navigation";
/**
 * Render Layout component
 * @param {null} children the children
 * @returns {React.Component} renders button component
 */
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex relative h-screen w-screen ">
        <div className="mr-[0px] lg:mr-[255px]">
          <SideBar />
        </div>
        <div className="w-full ">
          <div className="">
            <Navigation />
          </div>
          <div className="bg-gray-50 h-full px-[32px] pt-[99px] pb-[99px] md:pb-[0px] overflow-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
