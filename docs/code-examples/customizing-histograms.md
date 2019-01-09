# Histograms

The "options" parameter included below demonstrates many style changes you can make to a Histogram chart.

```javascript
viz.chart({
    sql: "SELECT Major, StartingMedianSalary, MidCareerMedianSalary FROM Degrees WHERE StartingMedianSalary <> 46000",
    chartType: "Histogram",
    containerId: "chart1",
    options: {
      title: "Salaries by Degree",
      titleTextStyle: {
        color: "#777777",
        fontName: "Arial",
        fontSize: 18
      },
        legend: {
        position: "right"
      },
      colors: ["#bb0000", "#ffaa00"],
      vAxis: {
        title: "Frequency",
      }
    }
});
```

