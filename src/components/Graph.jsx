import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ data, data_values, submitObject }) => {
  // Destruction
  const { startDate, endDate, group_crime, crime } = submitObject;

  const data_graph = {
    labels: data_values.fecha,

    datasets: [
      {
        label: `${crime} `,
        data: data_values.cantidad,
        borderWidth: 1,
        backgroundColor: "#4c1d95",
        borderColor: "#4c1d95",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `${group_crime} ${group_crime === crime ? "(total)" : ""}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Fecha",
        },
      },

      y: {
        title: {
          display: true,
          text: "Cantidad de delitos",
        },
      },
    },
  };
  return (
    <div className="w-full h-96 lg:h-full m-auto p-2 rounded-xl bg-[#4c1d954D] lg:col-span-2">
      <div className="h-full bg-indigo-50 p-6 rounded-md">
        <Line data={data_graph} options={options}></Line>
      </div>
    </div>
  );
};

export default Graph;
