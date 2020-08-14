import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const TimeLineChart = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let alarm = "https://image.flaticon.com/icons/svg/875/875344.svg";

    let water = "https://image.flaticon.com/icons/svg/3079/3079173.svg";
    let exercise = "https://image.flaticon.com/icons/svg/3079/3079366.svg";
    let breakfast = "https://image.flaticon.com/icons/svg/2125/2125212.svg";
    let work = "https://image.flaticon.com/icons/svg/572/572711.svg";
    let car = "https://image.flaticon.com/icons/svg/607/607419.svg";
    let coffee = "https://image.flaticon.com/icons/svg/901/901391.svg";
    let dinner = "https://image.flaticon.com/icons/svg/816/816696.svg";
    let book = "https://image.flaticon.com/icons/svg/2125/2125212.svg";
    let home = "https://image.flaticon.com/icons/svg/572/572818.svg";
    let beer = "https://image.flaticon.com/icons/svg/2151/2151061.svg";
    let dance = "https://image.flaticon.com/icons/svg/2557/2557541.svg";
    let drink = "https://image.flaticon.com/icons/svg/1275/1275283.svg";
    let drunk = "https://image.flaticon.com/icons/svg/875/875344.svg";
    let bed = "https://image.flaticon.com/icons/svg/3079/3079369.svg";

    let chart = am4core.create("charttimeline", am4plugins_timeline.CurveChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.data = [
      {
        category: "",
        start: "2019-01-10 10:00",
        end: "2019-01-10 10:15",
        color: colorSet.getIndex(15),
        icon: alarm,
        text: "Sold Pants, 1400tk",
      },
      {
        category: "",
        start: "2019-01-10 10:15",
        end: "2019-01-10 10:20",
        color: colorSet.getIndex(14),
        icon: water,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 10:30",
        end: "2019-01-10 10:35",
        color: colorSet.getIndex(13),
        icon: exercise,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 11:00",
        end: "2019-01-10 11:05",
        color: colorSet.getIndex(12),
        icon: breakfast,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 11:30",
        end: "2019-01-10 11:35",
        color: colorSet.getIndex(11),
        icon: car,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 11:40",
        end: "2019-01-10 11:45",
        color: colorSet.getIndex(10),
        icon: work,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "e",
        start: "2019-01-10 12:10",
        end: "2019-01-10 12:15",
        color: colorSet.getIndex(10),
        icon: coffee,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "e",
        start: "2019-01-10 12:30",
        end: "2019-01-10 12:35",
        color: colorSet.getIndex(10),
        icon: dinner,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "e",
        start: "2019-01-10 14:00",
        end: "2019-01-10 14:10",
        color: colorSet.getIndex(10),
        icon: coffee,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 14:30",
        end: "2019-01-10 14:35",
        color: colorSet.getIndex(8),
        icon: car,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 14:50",
        end: "2019-01-10 15:00",
        color: colorSet.getIndex(7),
        icon: home,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "e",
        start: "2019-01-10 15:30",
        end: "2019-01-10 25:35",
        color: colorSet.getIndex(7),
        icon: book,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 15:40",
        end: "2019-01-10 15:45",
        color: colorSet.getIndex(6),
        icon: beer,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 15:55",
        end: "2019-01-10 16:00",
        color: colorSet.getIndex(5),
        icon: beer,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 16:15",
        end: "2019-01-10 16:20",
        color: colorSet.getIndex(4),
        icon: dance,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-10 16:40",
        end: "2019-01-11 16:45",
        color: colorSet.getIndex(3),
        icon: drink,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-11 17:15",
        end: "2019-01-11 17:20",
        color: colorSet.getIndex(2),
        icon: drunk,
        text: "Sold T-shirts, 2100tk",
      },
      {
        category: "",
        start: "2019-01-11 17:55",
        end: "2019-01-11 18:00",
        color: colorSet.getIndex(1),
        icon: bed,
        text: "Sold T-shirts, 2100tk",
      },
    ];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = 10;
    categoryAxis.renderer.radius = 30;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    dateAxis.renderer.points = getPoints();

    dateAxis.renderer.autoScale = false;
    dateAxis.renderer.autoCenter = false;
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 5, timeUnit: "minute" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.min = new Date(2019, 0, 10, 7, 55).getTime();
    dateAxis.max = new Date(2019, 0, 11, 1, 1).getTime();

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.6;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.fill = new am4core.InterfaceColorSet().getFor("text");
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(30);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.background.radius = 18;
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.7;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.background.fillOpacity = 0.8;
    imageBullet1.background.strokeOpacity = 0;
    imageBullet1.dy = -2;
    imageBullet1.background.pointerBaseWidth = 10;
    imageBullet1.background.pointerLength = 10;
    imageBullet1.tooltipText = "{text}";

    series.tooltip.pointerOrientation = "up";

    imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
      if (target.dataItem) {
        let position = dateAxis.valueToPosition(
          target.dataItem.openDateX.getTime()
        );
        return dateAxis.renderer.positionToAngle(position);
      }
      return value;
    });

    let hs = imageBullet1.states.create("hover");
    hs.properties.scale = 1.3;
    hs.properties.opacity = 1;

    let textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = -100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.parent = chart.curveContainer;
    chart.scrollbarX.height = 300;
    chart.scrollbarX.orientation = "vertical";
    chart.scrollbarX.x = 128;
    chart.scrollbarX.y = -140;
    chart.scrollbarX.isMeasured = false;
    chart.scrollbarX.opacity = 0.5;

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.disabled = true;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    chart.zoomOutButton.disabled = true;

    let previousBullet;

    chart.events.on("inited", function () {
      setTimeout(function () {
        hoverItem(series.dataItems.getIndex(0));
      }, 2000);
    });

    function hoverItem(dataItem) {
      let bullet = dataItem.bullets.getKey(imageBullet1.uid);
      let index = dataItem.index;

      if (index >= series.dataItems.length - 1) {
        index = -1;
      }

      if (bullet) {
        if (previousBullet) {
          previousBullet.isHover = false;
        }

        bullet.isHover = true;

        previousBullet = bullet;
      }
      setTimeout(function () {
        hoverItem(series.dataItems.getIndex(index + 1));
      }, 1000);
    }

    function getPoints() {
      let points = [
        { x: -1300, y: 200 },
        { x: 0, y: 200 },
      ];

      let w = 400;
      let h = 400;
      let levelCount = 4;

      let radius = am4core.math.min(w / (levelCount - 1) / 2, h / 2);
      let startX = radius;

      for (var i = 0; i < 25; i++) {
        let angle = 0 + (i / 25) * 90;
        let centerPoint = { y: 200 - radius, x: 0 };
        points.push({
          y: centerPoint.y + radius * am4core.math.cos(angle),
          x: centerPoint.x + radius * am4core.math.sin(angle),
        });
      }

      for (var i = 0; i < levelCount; i++) {
        if (i % 2 != 0) {
          points.push({
            y: -h / 2 + radius,
            x: startX + (w / (levelCount - 1)) * i,
          });
          points.push({
            y: h / 2 - radius,
            x: startX + (w / (levelCount - 1)) * i,
          });

          let centerPoint = {
            y: h / 2 - radius,
            x: startX + (w / (levelCount - 1)) * (i + 0.5),
          };
          if (i < levelCount - 1) {
            for (var k = 0; k < 50; k++) {
              let angle = -90 + (k / 50) * 180;
              points.push({
                y: centerPoint.y + radius * am4core.math.cos(angle),
                x: centerPoint.x + radius * am4core.math.sin(angle),
              });
            }
          }

          if (i == levelCount - 1) {
            points.pop();
            points.push({ y: -radius, x: startX + (w / (levelCount - 1)) * i });
            let centerPoint = {
              y: -radius,
              x: startX + (w / (levelCount - 1)) * (i + 0.5),
            };
            for (var k = 0; k < 25; k++) {
              let angle = -90 + (k / 25) * 90;
              points.push({
                y: centerPoint.y + radius * am4core.math.cos(angle),
                x: centerPoint.x + radius * am4core.math.sin(angle),
              });
            }
            points.push({ y: 0, x: 1300 });
          }
        } else {
          points.push({
            y: h / 2 - radius,
            x: startX + (w / (levelCount - 1)) * i,
          });
          points.push({
            y: -h / 2 + radius,
            x: startX + (w / (levelCount - 1)) * i,
          });
          let centerPoint = {
            y: -h / 2 + radius,
            x: startX + (w / (levelCount - 1)) * (i + 0.5),
          };
          if (i < levelCount - 1) {
            for (var k = 0; k < 50; k++) {
              let angle = -90 - (k / 50) * 180;
              points.push({
                y: centerPoint.y + radius * am4core.math.cos(angle),
                x: centerPoint.x + radius * am4core.math.sin(angle),
              });
            }
          }
        }
      }

      return points;
    }

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }} id="charttimeline"></div>
  );
};
export default TimeLineChart;
