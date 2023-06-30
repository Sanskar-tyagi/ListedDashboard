import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import style from "./Chart.module.css";
const data = [
  {
    name: "Week 1",
    Guest: 0,
    User: 80,
  },

  {
    name: "Week 2",
    Guest: 100,
    User: 139,
  },
  {
    name: "Week 3",
    Guest: 200,
    User: 98,
  },
  {
    name: "Week 4",
    Guest: 278,
    User: 400,
  },
  {
    name: "Week 5",
    Guest: 189,
    User: 280,
  },
];

export default function Chart() {
  return (
    <div className={`${style.bgContainer} w-4/5`}>
      <div className="flex flex-col justify-center ml-14">
        <h3 className={style.h3}>Activities</h3>
        <p className={style.p}>May - June 2021</p>
      </div>
      <ResponsiveContainer width="95%" aspect={2 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="User"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Guest" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
