# Pie/Donut Chart

```javascript
  viz.chart({
    sql: "SELECT Year, Total FROM Trend2",
    chartType: "PieChart",
    containerId: "chart1",
    options: {
      title: "Title Text",
      pieHole: 0.4,
      titleTextStyle: {
        color: "#777777",
        fontName: "Arial",
        fontSize: 18
      },
      legend: {
        position: "right"
      }
    }
  });
```

