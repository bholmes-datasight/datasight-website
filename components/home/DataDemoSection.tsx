"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Mock data used when backend is unavailable
const MOCK_FORECAST = {
  data: [
    {
      x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      y: [42, 47, 53, 58, 61, 67, 72, 78, 81, 88, 94, 102],
      type: "scatter",
      mode: "lines+markers",
      name: "Revenue",
      line: { color: "#C9A84C", width: 2.5 },
      marker: { color: "#C9A84C", size: 6 },
    },
    {
      x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      y: [38, 43, 48, 54, 58, 63, 68, 74, 78, 83, 88, 95],
      type: "scatter",
      mode: "lines",
      name: "Forecast",
      line: { color: "#9A9A9A", width: 1.5, dash: "dot" },
    },
  ],
  layout: {
    title: { text: "Revenue vs Forecast", font: { color: "#3C3F4A", size: 13, family: "Inter" } },
    paper_bgcolor: "#F5F5F3",
    plot_bgcolor: "#F5F5F3",
    font: { family: "Inter", color: "#3C3F4A", size: 11 },
    xaxis: { gridcolor: "#EEEEEE", linecolor: "#DDDDDD" },
    yaxis: { gridcolor: "#EEEEEE", linecolor: "#DDDDDD", tickprefix: "£" },
    legend: { orientation: "h", y: -0.2 },
    margin: { t: 40, r: 20, b: 60, l: 55 },
  },
};

const MOCK_SEGMENTS = {
  data: [
    {
      x: [2.1, 3.5, 1.8, 4.2, 2.9, 3.8, 1.5, 4.6, 2.4, 3.1],
      y: [48, 72, 31, 89, 61, 78, 24, 95, 55, 66],
      mode: "markers",
      type: "scatter",
      name: "High Value",
      marker: { color: "#C9A84C", size: 12, opacity: 0.85 },
    },
    {
      x: [0.8, 1.2, 0.5, 1.9, 1.1, 0.7, 1.6, 1.3, 0.9, 1.4],
      y: [18, 22, 12, 35, 19, 15, 28, 24, 16, 21],
      mode: "markers",
      type: "scatter",
      name: "Growth",
      marker: { color: "#3C3F4A", size: 10, opacity: 0.75 },
    },
    {
      x: [5.1, 6.2, 4.8, 5.9, 6.5, 5.4, 4.6, 6.1, 5.7, 6.3],
      y: [105, 128, 98, 119, 135, 110, 92, 124, 115, 130],
      mode: "markers",
      type: "scatter",
      name: "Enterprise",
      marker: { color: "#9A9A9A", size: 14, opacity: 0.8 },
    },
  ],
  layout: {
    title: { text: "Customer Segmentation", font: { color: "#3C3F4A", size: 13, family: "Inter" } },
    paper_bgcolor: "#F5F5F3",
    plot_bgcolor: "#F5F5F3",
    font: { family: "Inter", color: "#3C3F4A", size: 11 },
    xaxis: { title: "Engagement Score", gridcolor: "#EEEEEE" },
    yaxis: { title: "Annual Spend (£k)", gridcolor: "#EEEEEE" },
    legend: { orientation: "h", y: -0.25 },
    margin: { t: 40, r: 20, b: 80, l: 65 },
  },
};

const plotConfig = {
  displayModeBar: false,
  responsive: true,
};

export default function DataDemoSection() {
  const [forecastData, setForecastData] = useState(MOCK_FORECAST);
  const [segmentData, setSegmentData] = useState(MOCK_SEGMENTS);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return;

    Promise.all([
      fetch(`${apiUrl}/api/charts/forecast`).then((r) => r.json()).catch(() => null),
      fetch(`${apiUrl}/api/charts/segments`).then((r) => r.json()).catch(() => null),
    ]).then(([forecast, segments]) => {
      if (forecast) setForecastData(forecast);
      if (segments) setSegmentData(segments);
    });
  }, []);

  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 border-t border-gold pt-8">
          <p className="section-label text-gold mb-3">Analytics</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-dark max-w-xl">
            See our work in action
          </h2>
          <p className="mt-4 text-sm text-dark/60 max-w-2xl leading-relaxed">
            Examples of the analytics and dashboards we build for clients — from revenue forecasting to customer segmentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { data: forecastData, label: "Time-Series Forecasting" },
            { data: segmentData, label: "Customer Segmentation" },
          ].map(({ data, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-light border border-dark/10"
            >
              <div className="px-6 pt-5 pb-1 border-b border-dark/8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mid">
                  {label}
                </p>
              </div>
              <Plot
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data={data.data as any}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                layout={{ ...data.layout, autosize: true } as any}
                config={plotConfig}
                style={{ width: "100%", height: "320px" }}
                useResizeHandler
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
