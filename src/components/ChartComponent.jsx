import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  // Register required components
  ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  export default function ChartComponent({ data }) {
    const chartData = {
      labels: data.map((sensor) => sensor.name),
      datasets: [
        {
          label: "Sensor Values",
          data: data.map((sensor) => sensor.value),
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    };
  
    return <Line data={chartData} options={options} />;
  }
  