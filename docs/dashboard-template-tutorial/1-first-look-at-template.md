# 1 - First Look at Template



The dashboard template will get you up and running fast with creating a dashboard visualization. The template uses the following tools to make things easier for us.

* Google Sheets - This will function as our "database" of tables.
* Structured Query Language \(SQL\) - SQL will be used to pull the right data from the database for visualizing.
* [Google Charts API](https://developers.google.com/chart/interactive/docs/) - This library will allow us to create charts in our web app.

### Instructions

#### 1 - Create files in a new Repl.it or other code environment.

Use the code from [Getting Started](../) to create your HTML, Javascript, and CSS files. Verify that the dashboard displays an example bar chart and table.

#### 2 - Review the HTML

Notice the basic page structure for the "cards" that contain elements for the charts. See below for reference.

```markup
<div id='page'>
    <div class="card">
		<div id="chart1"></div>
	</div>
	<div class="card">
		<div id="chart2"></div>
	</div>
</div>
```

#### 3 - Review the CSS

Notice the "card" class that creates the shadow effect you see with the charts.

```css
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  background: white;
}
```

#### 4 - Review the Javascript

* Notice that we load example tables from [a Google sheet that you can see here](https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing).
* The function `composeCharts()` runs automatically once the data is loaded.
* In `composeCharts()` we create our charts by specifying SQL \(more on this later\), the chart type, and the HTML element it should be placed.

```javascript
function setup() {
  viz.loadExampleTables().then(composeCharts);
  window.onresize = composeCharts;
}

function composeCharts() {
  viz.chart({
    sql:"SELECT Major, StartingMedianSalary FROM Degrees",
    chartType:"BarChart",
    containerId:"chart1"
  });

  viz.chart({
    sql:"SELECT * FROM Degrees",
    chartType:"Table",
    containerId:"chart2"
  });
}

window.onload = setup;
```

That's the quick overview of the template. We will dig into the details and how to customize things next.

