import React from "react";
import { FaChartArea } from "react-icons/fa";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

import { lineChartData } from "../../data";

const LineChartData = () => {
  return (
    <div>
      <h4 className="bg-gray-100 px-4 py-2 flex items-center gap-2 border rounded-t-md">
        <FaChartArea /> Area chart Example
      </h4>
      <div className="h-[18rem] py-4 border border-t-0 rounded-md rounded-t-none">
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={300}
            data={lineChartData}
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
            <Area
              type="monotone"
              dataKey="Sessions"
              stroke="#0275d8"
              fill="#cce3f7"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              dot={{ height: 8, width: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartData;
