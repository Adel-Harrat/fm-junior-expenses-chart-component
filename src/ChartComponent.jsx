import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const dataFromFrontendMentor = [
  { day: "sun", amount: 25.48 },
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
];

const todayIndex = new Date().getDay();
const data = {
  labels: dataFromFrontendMentor.map((obj) => obj.day),
  datasets: [
    {
      label: "Amount of each day",
      data: dataFromFrontendMentor.map((obj) => obj.amount),
      backgroundColor: dataFromFrontendMentor.map((_, index) =>
        index === todayIndex ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
      ),
      hoverBackgroundColor: dataFromFrontendMentor.map((_, index) =>
        index === todayIndex
          ? "hsl(186, 34%, 60%, 0.8)"
          : "hsl(10, 79%, 65%, 0.8)"
      ),
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return "Amount: $" + context.parsed.y;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide the x-axis grid lines
      },
      ticks: {
        display: true, // Show the x-axis ticks
      },
    },
    y: {
      grid: {
        display: false, // Hide the y-axis grid lines
      },
      ticks: {
        display: false, // Hide the y-axis ticks
      },
    },
  },
};

function ChartComponent() {
  return (
    <article>
      <h1 className="font-bold text-2xl md:text-[2rem] text-tw-dark-brown mb-6">
        Spending - Last 7 days
      </h1>

      <div>
        <Bar data={data} options={options} />
      </div>
    </article>
  );
}

export default ChartComponent;
