# Custom Grid 1

![](../.gitbook/assets/grid1.JPG)

### HTML

Notice that the "card" for the first chart also has a class called "full-width". We will use this class to make a chart span the full width of the page, while the others will fall into a grid with 3 charts per row.

```markup
	<div id='page'>
    	<div class="card full-width">
			<div id="chart1"></div>
		</div>
		<div class="card">
			<div id="chart2"></div>
		</div>
		<div class="card">
			<div id="chart3"></div>
		</div>
		<div class="card">
			<div id="chart4"></div>
		</div>
	</div>
```

### CSS

First, notice the "\#page" style defines the normal grid design of 3 elements \(or columns\) per row. `grid-template-columns: 1fr 1fr 1fr;` Next, the ".full-width" style specifies the element to start at the first position and span 3 columns. `grid-column: 1 / span 3;`

```css
#page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}

.full-width {
  grid-column: 1 / span 3;
}
```

