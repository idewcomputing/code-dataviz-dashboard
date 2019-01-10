# 3 - Producing Charts

Making basic charts with the "viz" library is pretty easy. Let's get started.

### Try It Out

1 - Find the following Javascript in your _code.js_ file.

```javascript
  viz.chart({
    sql:"SELECT Major, StartingMedianSalary FROM Degrees",
    chartType:"BarChart",
    containerId:"chart1"
  });
```

This generates a bar chart \(`chartType: "BarChart"`\) using data specified by the SQL statement\(`sql: "SELECT Major, StartingMedianSalary FROM Degrees"`\) and places the chart in an HTML element with an id of "chart1" \(`containerId:"chart1"`\). Notice that you should have a _&lt;div&gt;_ tag with that _id_ in your HTML file.

**2 - Change the** _**chartType**_ **to "ColumnChart"**

In your Javascript, change the chart type to "ColumnChart". Run the web app and notice how the chart changes. It may not look good since there are so many columns squished together. Choosing the right way to visualize the data will be part of the project challenge.

**3 - Change the** _**chartType**_ **to "Histogram"**

In your Javascript, change the chart type to "Histogram". Run the web app and notice how the chart changes.

**4 - Add Another Chart that Uses a Different Data Table**

Copy and add the following Javascript into your _composeCharts\( \)_ function.

```javascript
viz.chart({
    sql:"SELECT Year, Total FROM Trend",
    chartType:"ScatterChart",
    containerId:"chart3"
 });
```

You will also want to add the following HTML to your index.html file to provide a place for your chart.

```markup
<div class="card">
   <div id="chart3"></div>
</div>
```

Run your web app and you should see your new chart. This chart uses data from the "Trend" table in our database \([Example Google Sheets File](https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing)\) to create a scatter plot \(also called scatter chart\).

### More Charts and More Options

See the [Code Examples](../code-examples/) section for different charts and options you will want to use in your final dashboard, like titles and colors.

