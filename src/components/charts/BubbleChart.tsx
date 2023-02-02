import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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
      label: 'Red dataset',
      data: Array.from({ length: 50 }, () => ({
        x: Math.random()*200-100,
        y: Math.random()*200-100,
        r: Math.random()*25-5,
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: Array.from({ length: 50 }, () => ({
        x: Math.random()*200-100,
        y: Math.random()*200-100,
        r: Math.random()*25-5,
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  return <Bubble options={options} data={data} />;
}
