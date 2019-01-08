# Customizing Bar Charts

```javascript
viz.chart({
    sql: "SELECT Major, StartingMedianSalary, MidCareerMedianSalary FROM Degrees",
    chartType: "BarChart",
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
      hAxis: {
        title: "Annual Salary",
        format: "currency"
      }
    }
});
```



