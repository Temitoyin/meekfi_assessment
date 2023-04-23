import Filter from "@components/Filter/Filter";
import React from "react";

/**
 * Render Chart component
 * @param {string} title the heading title
 * @param {Array} filterData the data for the filter component
 * @param {string} type the type of chat
 * @param {null} children the childern
 * @returns {React.Component} renders button component
 */
const Chart = ({ title, children, filterData, type }) => {
  return (
    <div className="w-full shadow bg-white h-full p-[16px]">
      <div className="flex justify-between items-center ">
        <p className="text-sm font-semibold sm:tex-base font-mono">{title}</p>
        <div>
          <Filter filterData={filterData} />
        </div>
      </div>
      <div
        className={
          type === "pie"
            ? "flex items-center h-[90%] justify-center"
            : "w-full h-full"
        }
      >
        {children}
      </div>
    </div>
  );
};
export default Chart;
