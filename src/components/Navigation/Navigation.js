import Icon from "@components/Icon/icon";
import React from "react";

/**
 * Render Navigation component
 * @returns {React.Component} renders button component
 */
const Navigation = () => {
  return (
    <div className="flex justify-between w-full h-[70px] px-[34px] items-center lg:w-[calc(100vw-255px)] fixed bg-white">
      <div>
        <h1 className="font-mono">Dashboard</h1>
      </div>
      <div className="flex  justify-between items-center w-[160px] px-[17px]">
        <div className="mr-[4px]">
          <Icon name="profile" />
        </div>

        <p className="font-mono">Hello User</p>
        <Icon name="vector-down" />
      </div>
    </div>
  );
};

export default Navigation;
