# Getting Started

Just create the HTML, CSS, and Javascript files below and you are off to the races. Click on the file name   to get the code content for each.

{% code-tabs %}
{% code-tabs-item title="index.html" %}
```markup
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Dashboard Template</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<h1>Data Dashboard</h1>
	<div id='page'>
    	<div class="card">
			<div id="chart1"></div>
		</div>
		<div class="card">
			<div id="chart2"></div>
		</div>
	</div>

	<!--Javascript-->
	<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="https://cdn.jsdelivr.net/alasql/0.2/alasql.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/idewcomputing/code-dataviz-dashboard/src/viz.js"></script>
	<script src="code.js"></script>
</body>

</html>
```
{% endcode-tabs-item %}

{% code-tabs-item title="code.js" %}
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
{% endcode-tabs-item %}

{% code-tabs-item title="style.css" %}
```css
body {
  padding: 15px;
  margin: 0;
  background: #eee;
}

#page {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
  grid-gap: 15px;
}

h1 {
  font-family: 'Arial';
  text-align: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  background: white;
}

.description {
  padding: 15px 7px;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

