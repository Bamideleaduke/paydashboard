import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartOptions,
  TooltipItem,
} from 'chart.js';
import Arrow from "../../Assets/icons/downArrow.svg"
import "./ChartStyle.css"


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Money In',
        data: [
          200000, 400000, 200000, 70000, 200000, 300000, 200000, 70000, 300000,
          40000, 50000, 200000,
        ] as number[],
        backgroundColor: 'rgba(250, 250, 255, 1)',
        borderColor: 'rgba(85, 64, 235, 1)',
        // borderWidth: 5,
        borderRadius: 5,
        borderWidth: { top: 5, right: 0, bottom: 2, left: 0 },
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            const value = context.raw as number;
            return `NGN ${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        axis: 'y',
        offset: true,
        // min: 0,
        max: 500000,

        grid: {
          display: true,

          color: (context) => {
            const value = context.tick.value;
            if (value === 0 || value === 250000 || value === 500000) {
              return 'rgba(0, 0, 0, 0.1)';
            }
            return 'rgba(0, 0, 0, 0)';
          },
          lineWidth: (context) => {
            const value = context.tick.value;
            return value === 0 || value === 250000 || value === 500000 ? 1 : 0;
          },
        },
        ticks: {
          //   stepSize: 500000,
          padding: 20,
          callback: function (value: number | string) {
            if (value === 0 || value === 250000 || value === 500000) {
              return `N${Number(value).toLocaleString()}`;
            }
            return '';
          },
        },
      },
    },
  };

  return (
    <div>
        <div className='chart header'>
            <div className='money-flow'>
                <div className='inflow'>
                    Money In
                </div>
                <div className='outflow'>
                    Money Out
                </div>
            </div>
            <div className='see-all'> <button>Last 30 days <img src={Arrow} alt="see all cards" /> </button></div>
        </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
