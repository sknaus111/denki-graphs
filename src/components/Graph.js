import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

function Graph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Test Data",
        data: [10, 20, 30, 40],
        borderColor: "blue",
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default Graph;