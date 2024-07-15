"use client";

import dynamic from "next/dynamic";
import React from "react";

type Props = {};

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type ItemOption = {
  label: string;
  value: number;
  color: string;
};

const TradingChart = (props: Props) => {
  const chartData: any = {
    chart: {
      type: "line",
      fontFamily: "Roboto",
      width: "auto",
      height: "auto",
      redrawOnWindowResize: true,
      selection: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#066e79", "#e8f6fa"],
    stroke: {
      //   curve: "stepline",
      curve: "smooth",
      //   curve: "straight",
      //   list of curve types: https://apexcharts.com/docs/options/stroke/#curve
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      //   text: "Date",
      align: "left",
    },
    legend: {
      show: false,
    },
    toolbar: {
      show: false,
    },
    // hide zoom in/out buttons
    zoom: {
      enabled: false,
    },
    // hide x-axis labels
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
  };
  return (
    <div className="w-full h-[400px]">
      <ApexChart
        options={chartData}
        series={[
          {
            data: [
              14, 24, 24, 21, 12, 23, 33, 16, 16, 16, 28, 12, 13, 33, 23, 26,
              22, 21,
            ],
          },
        ]}
        type="line"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default TradingChart;
