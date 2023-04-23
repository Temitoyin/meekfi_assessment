import BarChart from "@components/Chart/BarChart/BarChart";
import LineChart from "@components/Chart/LineChart/LineChart";
import PieChart from "@components/Chart/PieChart/PieChart";
import Layout from "@components/Layout/Layout";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col justify-between h-auto sm:h-[219px] lg:h-[344px] 2xl:h-[402px] mb-[16px] md:flex-row">
          <div className=" w-full md:w-[49.5%] mb-[16px] md:mb-[0px]">
            <BarChart />
          </div>
          <div className="w-full md:w-[49.5%]">
            <PieChart />
          </div>
        </div>
        <div className=" w-full md:w-[49.5%] h-auto xl:h-[402px]">
          <LineChart />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
