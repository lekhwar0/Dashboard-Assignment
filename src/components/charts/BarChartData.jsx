import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { barChartData } from "../../data";

const BarChartData = () => {
  return (
    <div>
      <h4 className="bg-gray-100 px-4 py-2 flex items-center gap-2 border rounded-t-md">
        <FaRegChartBar /> Bar chart Example
      </h4>
      <div className="h-[18rem] py-4 border border-t-0 rounded-md rounded-t-none">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Revenue" fill="#0275d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartData;
