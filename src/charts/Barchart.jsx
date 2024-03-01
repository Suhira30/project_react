import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Sales"],
  ["Sun", 60],
  ["Mon", 80],
  ["Tues",64],
  ["Wed", 60],
  ["Thu", 50],
  ["Fri", 25],
  ["Sat", 75],

];

export const options = {
  chart: {
    title: "Active Customer",
    subtitle: "Percentage of active customer along with a week",
  },
};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
