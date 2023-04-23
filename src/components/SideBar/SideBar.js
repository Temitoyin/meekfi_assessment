import PropTypes from "prop-types";
import React from "react";

import Icon from "@components/Icon/icon";

/**
 * Render SideBar component
 * @returns {React.Component} renders button component
 */
const SideBar = () => {
  return (
    <div className="w-[255px] text-center px-[24px] bg-blue-200 h-full hidden lg:block fixed">
      <div className="pt-[40px]">
        <h1 className="font-light text-4xl font-pacifico">Meekfi</h1>
      </div>
      <div className="mt-[62px]">
        <div className="flex bg-white rounded-md h-[40px] items-center pl-[18px]">
          <div className="mr-[10px]">
            <Icon name="overviewSide" />
          </div>
          <div>
            <span className="font-mono">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  node: {},
};

SideBar.propTypes = {
  node: PropTypes.object,
};

export default SideBar;
