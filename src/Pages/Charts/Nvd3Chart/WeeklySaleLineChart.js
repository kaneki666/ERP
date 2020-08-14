import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useSelector } from "react-redux";

const WeeklySales = () => {
  const chart = useRef(null);
  const state = useSelector((state) => state.dashboard);
  let total;
  useLayoutEffect(() => {
    let chart = am4core.create("chartweeklydivline", am4charts.XYChart);
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance

    // Add data
    chart.data = state.weekly_sale;
    const reducer = (accumulator, item) => {
      return accumulator + item.total;
    };

    total = chart.data.reduce(reducer, 0);

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "total";
    series.dataFields.dateX = "date";
    series.tensionX = 0.8;
    series.strokeWidth = 3;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    // Add a guide
    let range = valueAxis.axisRanges.create();
    range.value = 90.4;
    range.grid.stroke = am4core.color("#396478");
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.grid.strokeDasharray = "3,3";
    range.label.inside = true;
    range.label.text = "Average";
    range.label.fill = range.grid.stroke;
    range.label.verticalCenter = "bottom";
    return () => {
      chart.dispose();
    };
  }, [state]);

  return (
    <div>
      <h3 style={{ color: "white" }}>Weekly Sales Total</h3>
      <div className="col-9">
        <h3
          style={{ color: "white" }}
          className="f-w-300 d-flex align-items-center m-b-0"
        >
          <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
          {total}
        </h3>
      </div>

      <div
        style={{ width: "100%", minHeight: "300px" }}
        id="chartweeklydivline"
      ></div>
    </div>
  );
};

export default WeeklySales;
