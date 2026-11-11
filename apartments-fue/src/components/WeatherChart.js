import { useMemo } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslation } from "react-i18next";
import "../styles/WeatherChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Validated against the light chart surface (#fff) on all six checks:
// lightness band, chroma floor, protan/tritan separation, normal-vision
// floor and contrast. Air takes the brand terracotta; sea needs a cool
// hue for separation, and a warm sibling of it failed the chroma floor.
const AIR = "#c2612f";
const SEA = "#0081b4";
const RAIN = "#0081b4";

const INK = "#4a3b33";
const MUTED = "#6b5648";
const GRID = "rgba(36, 28, 23, 0.09)";

const AIR_TEMP = [19, 19, 20, 21, 22, 23, 24, 25.5, 25, 24, 22, 20];
const SEA_TEMP = [16, 15.5, 16, 17, 18, 19, 20, 21, 22, 21, 19, 17];
const RAINFALL = [9, 7, 5, 2, 1, 0, 0, 0, 5, 6, 7, 11];

// Direct labels on the peak and trough only. The old chart printed a number
// above all 36 data points, which buried the shape of the curves under text.
const peakIndex = (values) => values.indexOf(Math.max(...values));
const troughIndex = (values) => values.indexOf(Math.min(...values));

const baseScales = (max, stepSize) => ({
  x: {
    grid: { display: false },
    border: { color: GRID },
    ticks: { color: MUTED, font: { size: 11 } },
  },
  y: {
    beginAtZero: true,
    max,
    grid: { color: GRID, drawTicks: false },
    border: { display: false },
    ticks: { color: MUTED, font: { size: 11 }, stepSize, padding: 8 },
  },
});

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  // Headroom so the top y-tick clears the legend, and so the peak/trough
  // datalabels aren't clipped at the plot edges.
  layout: { padding: { top: 14, right: 8, bottom: 2 } },
  plugins: {
    tooltip: {
      backgroundColor: "#1c1a17",
      titleFont: { size: 12, weight: "600" },
      bodyFont: { size: 12 },
      padding: 10,
      cornerRadius: 6,
      displayColors: true,
      boxWidth: 8,
      boxHeight: 8,
      usePointStyle: true,
    },
    datalabels: { display: false },
  },
};

function WeatherChart() {
  const { t, i18n } = useTranslation();

  // Month labels come from the browser's own locale data, so they follow
  // the selected language without needing 12 keys × 6 locales.
  const months = useMemo(() => {
    const format = new Intl.DateTimeFormat(i18n.resolvedLanguage || "en", {
      month: "short",
    });
    return Array.from({ length: 12 }, (_, m) =>
      format.format(new Date(2024, m, 1))
    );
  }, [i18n.resolvedLanguage]);

  const tempData = {
    labels: months,
    datasets: [
      {
        label: t("Chart_air_temp"),
        data: AIR_TEMP,
        borderColor: AIR,
        backgroundColor: AIR,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        pointBorderColor: "#fff",
        tension: 0.35,
        datalabels: {
          display: (ctx) =>
            ctx.dataIndex === peakIndex(AIR_TEMP) ||
            ctx.dataIndex === troughIndex(AIR_TEMP),
          align: "top",
          offset: 6,
          color: INK,
          font: { size: 11, weight: "600" },
          formatter: (value) => `${value}°`,
        },
      },
      {
        label: t("Chart_sea_temp"),
        data: SEA_TEMP,
        borderColor: SEA,
        backgroundColor: SEA,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        pointBorderColor: "#fff",
        tension: 0.35,
        datalabels: {
          display: (ctx) =>
            ctx.dataIndex === peakIndex(SEA_TEMP) ||
            ctx.dataIndex === troughIndex(SEA_TEMP),
          align: "bottom",
          offset: 6,
          color: INK,
          font: { size: 11, weight: "600" },
          formatter: (value) => `${value}°`,
        },
      },
    ],
  };

  const tempOptions = {
    ...baseOptions,
    scales: baseScales(30, 5),
    plugins: {
      ...baseOptions.plugins,
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          color: INK,
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 16,
          font: { size: 12 },
        },
      },
      tooltip: {
        ...baseOptions.plugins.tooltip,
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} °C`,
        },
      },
    },
  };

  const rainData = {
    labels: months,
    datasets: [
      {
        label: t("Chart_rainfall"),
        data: RAINFALL,
        backgroundColor: RAIN,
        hoverBackgroundColor: "#00648c",
        borderRadius: 4,
        borderSkipped: false,
        maxBarThickness: 28,
      },
    ],
  };

  const rainOptions = {
    ...baseOptions,
    scales: baseScales(12, 3),
    plugins: {
      ...baseOptions.plugins,
      // One series — the heading names it, so a legend box would be noise.
      legend: { display: false },
      tooltip: {
        ...baseOptions.plugins.tooltip,
        callbacks: {
          label: (ctx) => ` ${ctx.parsed.y} mm`,
        },
      },
    },
  };

  return (
    <div className="weather">
      {/* Two charts, not one.
          The previous version plotted air temperature (°C), sea temperature
          (°C) and rainfall (mm) against a single 0–30 y-axis, so 9 mm of
          rain sat at the same height as 9 °C — the units aren't comparable
          and the shared scale implied they were. Split by unit instead. */}
      <section className="weather__panel">
        <h3 className="weather__title">{t("Chart_temp_title")}</h3>
        <div className="weather__plot">
          <Line data={tempData} options={tempOptions} />
        </div>
      </section>

      <section className="weather__panel">
        <h3 className="weather__title">{t("Chart_rain_title")}</h3>
        <div className="weather__plot">
          <Bar data={rainData} options={rainOptions} />
        </div>
      </section>

      {/* Table view: the numbers are reachable without reading the plot,
          which also covers colour-blind and screen-reader users. */}
      <details className="weather__table">
        <summary>{t("Chart_show_table")}</summary>
        <div className="weather__table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">{t("Chart_month")}</th>
                {months.map((month) => (
                  <th scope="col" key={month}>
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: `${t("Chart_air_temp")} (°C)`, values: AIR_TEMP },
                { label: `${t("Chart_sea_temp")} (°C)`, values: SEA_TEMP },
                { label: `${t("Chart_rainfall")} (mm)`, values: RAINFALL },
              ].map(({ label, values }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {values.map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

export default WeatherChart;
