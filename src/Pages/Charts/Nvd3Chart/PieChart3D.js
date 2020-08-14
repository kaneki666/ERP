import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import { useSelector } from "react-redux";

const PieChart = () => {
  const chart = useRef(null);
  const state = useSelector((state) => state.dashboard);

  useLayoutEffect(() => {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        Cost: "Sales",
        Price: `${state.monthly_sale_total}`,
        color: am4core.color("#A389D4"),
      },
      {
        Cost: "Purchases",
        Price: `${state.monthly_purchase}`,
        color: am4core.color("#1dc4e9"),
      },
      {
        Cost: "Expenses",
        Price: `${state.monthly_expense_total}`,
        color: am4core.color("#3f4d67"),
      },
    ];

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "Price";
    series.dataFields.category = "Cost";
    series.slices.template.propertyFields.fill = "color";

    return () => {
      chart.dispose();
    };
  }, [state]);

  return <div style={{ width: "100%", height: "500px" }} id="chartdiv"></div>;
};
export default PieChart;
