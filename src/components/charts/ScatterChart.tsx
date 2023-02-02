import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random()*200-100,
        y: Math.random()*200-100,
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function App() {
  return <Scatter options={options} data={data} />;
}