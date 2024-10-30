import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "../styles/WeatherChart.scss";
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Air Temperature (°C)',
      data: [19, 19, 20, 21, 22, 23, 24, 25.5, 25, 24, 22, 20],
      type: 'line',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'rgba(255, 99, 132, 1)',
        font: {
          weight: 'bold',
        },
      },
    },
    {
      label: 'Rainfall (mm)',
      data: [9, 7, 5, 2, 1, 0, 0, 0, 5, 6, 7, 11],
      type: 'bar',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'rgba(54, 162, 235, 1)',
        font: {
          weight: 'bold',
        },
      },
    },
    {
      label: 'Water Temperature (°C)',
      data: [16, 15.5, 16, 17, 18, 19, 20, 21, 22, 21, 19, 17],
      type: 'line',
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      fill: false,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'rgba(75, 192, 192, 1)',
        font: {
          weight: 'bold',
        },
      },
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 30,
      ticks: {
        stepSize: 5,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      display: true,
      formatter: (value) => value,
    },
  },
};

function WeatherChart() {
  return (
    <div className='weather-chart-container'>
      <Line data={data} options={options} />
    </div>
  );
}

export default WeatherChart;
