import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Basic Tees", "Super Hoodies", "Custom Short Pants"],
  datasets: [
    {
      data: [12, 1, 3],
      backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
    },
  ],
};

export default function Piechrt() {
  return (
    <div class="flex flex-col w-full  bg-white dark:bg-white rounded-md border border-slate-200 gap-5 p-8">
      <header class="dark:border-slate-700">
        <h2 class="text-slate-800 text-xl font-bold dark:text-slate-900 ca8f5">
          Top products
        </h2>
      </header>
      <div class="flex justify-center ">
        <div>
          <Pie data={data} />{" "}
        </div>
      </div>
    </div>
  );
}
