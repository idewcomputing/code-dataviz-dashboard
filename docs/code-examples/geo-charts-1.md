# Geo Charts

![](../.gitbook/assets/screen-shot-2019-03-04-at-1.27.40-pm.png)

```text
  viz.chart({
    sql: "SELECT * FROM Geo",
    chartType: "GeoChart",
    containerId: "chart1",
    options: {
      region: 'US',
      displayMode: 'regions',
      resolution: 'provinces',
    }
  });
```

