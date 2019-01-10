# Bubble Charts

The "options" parameter included below demonstrates many style changes you can make to a Bubble Chart.

```javascript
  viz.chart({
    sql: "SELECT State, PercentTechJobs, EdSpendingOverGdpPercent, 'Source', GDP FROM States", 
    chartType: "BubbleChart",
    containerId: "chart3",
    options: {
      title: "Trend in STEM Jobs",
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
        title: "Percent of Spending\non Education Spending",
        format: "percent"
      },
      hAxis: {
        title: "Percent of Jobs in STEM",
        format: "percent"
      }
    }
  });
```

