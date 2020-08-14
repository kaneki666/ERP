import React from "react";
import NVD3Chart from "react-nvd3";

function getDatum() {
  var sin = [
      { x: 1, y: 3 },
      { x: 2, y: 4 },
      { x: 3, y: 2 },
      { x: 4, y: 5 },
      { x: 5, y: 6 },
    ],
    sin2 = [
      { x: 1, y: 10 },
      { x: 2, y: 9 },
      { x: 3, y: 7 },
      { x: 4, y: 3 },
      { x: 5, y: 4 },
    ],
    cos = [];

  return [
    {
      values: sin,
      key: "Sales",
      color: "#A389D4",
    },
    {
      values: sin2,
      key: "Costs",
      color: "#1de9b6",
      area: true,
    },
  ];
}

const LineChart = () => {
  const data = getDatum();
  return (
    <div>
      {React.createElement(NVD3Chart, {
        xAxis: {
          tickFormat: function (d) {
            return d;
          },
          axisLabel: "Time (Day)",
        },
        yAxis: {
          axisLabel: "Price (tk)",
          tickFormat: function (d) {
            return parseFloat(d).toFixed(2);
          },
        },
        type: "lineChart",
        datum: data,
        x: "x",
        y: "y",
        height: 300,
        renderEnd: function () {
          console.log("renderEnd");
        },
      })}
    </div>
  );
};

export default LineChart;
