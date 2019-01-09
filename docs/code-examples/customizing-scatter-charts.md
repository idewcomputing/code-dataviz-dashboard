# Scatter Charts

The "options" parameter included below demonstrates many style changes you can make to a Scatter Chart.

```javascript
  viz.chart({
    sql: "SELECT Year, Total FROM Trend", chartType: "ScatterChart",
    containerId: "chart3",
    options: {
      title: "Trend in Tech Jobs",
      titleTextStyle: {
        color: "#777777",
        fontName: "Arial",
        fontSize: 18
      },
        legend: {
        position: "right"
      },
      colors: ["#bb0000"],
      vAxis: {
        title: "Jobs in US \n(in Thousands)"
      },
      hAxis: {
        title: "Year",
        format: "####"
      }
    }
  });
```

