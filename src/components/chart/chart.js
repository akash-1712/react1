import React from "react";
import "./chart.css";
import ChartBar from "./chartBar";
const chart = (props) => {
  const dataPointValue = props.dataPoint.map((val) => val.value);
  const totalMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            label={dataPoints.label}
            maxValue={totalMax}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default chart;
