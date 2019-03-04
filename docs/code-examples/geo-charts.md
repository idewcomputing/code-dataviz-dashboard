# Geo Charts \(Markers\)

![](../.gitbook/assets/screen-shot-2019-03-04-at-1.16.16-pm.png)

```text
viz.chart({
    sql: "SELECT Lat, Long, Name FROM Locations",
    chartType: "GeoChart",
    containerId: "chart1",
    options: {
      region: 'US'
    }
  });
```

