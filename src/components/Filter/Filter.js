import Icon from "@components/Icon/icon";
import React, { useState } from "react";

/**
 * Render Filter component
 * @param {Array} filterData the filter data
 * @returns {React.Component} renders button component
 */
const Filter = ({ filterData }) => {
  const [title, setTitle] = useState(
    (filterData && filterData[0].title) || "Filter"
  );
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = (e) => {
    const title = e.target.getAttribute("data_attribute_title");
    setTitle(title);
    setShowFilter(!showFilter);
  };
  return (
    <div className="border w-[134px] px-[13px] h-[36px] relative">
      <div
        className="w-full h-full flex items-center justify-between cursor-pointer"
        onClick={() => setShowFilter(!showFilter)}
      >
        <p className="mr-[8px]">{title}</p>
        <Icon name="vector-down" />
      </div>
      {showFilter && (
        <div className="bg-white absolute w-[134px] left-0 top-[36px] ">
          {filterData &&
            filterData.map((data, i) => (
              <div
                className="px-[13px] bg-white h-[32px] flex items-center hover:bg-blue-100 hover:text-gray-600 cursor-pointer"
                data_attribute_title={data.title}
                key={i}
                onClick={(e) => {
                  handleClick(e);
                  data.onClick();
                }}
              >
                {/* {console.log(typeof data.onClick, "data")} */}
                <p data_attribute_title={data.title}>{data.title}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
