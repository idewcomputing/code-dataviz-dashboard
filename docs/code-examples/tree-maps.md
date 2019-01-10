# Tree Maps

```javascript
  viz.chart({
    sql: "SELECT Term, Parent, Weight FROM Terms", 
    chartType: "TreeMap",
    containerId: "chart3",
    options: {
      title: "Related Search Terms to STEM Jobs",
      titleTextStyle: {
        color: "#777777",
        fontName: "Arial",
        fontSize: 18
      },
      maxColor: "#ffff00",
      midColor: "#ffbb00",
      minColor: "#ff5500",
      showScale: true
    }
  });
```

