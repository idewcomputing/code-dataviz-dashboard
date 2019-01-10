# 4 - Creating Your Own Database \(Google Sheet\)

### 1 - Create a Google Sheets File and Publish

Create a Google Sheets file and publish it by selection `file`&gt;`Publish to the web...` then click the _Publish_ button. 

### 2 - Get the Public Shareable Link

Next click the Share button in the upper-righthand corner and copy the shareable link. Make sure it is set to "Anyone with link can view".

### 3 - Load Your File in Javascript

In your javascript file, replace this line `viz.loadExampleTables().then(composeCharts);` with the following, except use your shareable link.

```javascript
viz.loadTables('https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing')
    .then(composeCharts);
```

Now you can access your database in your SQL statements. Remember that your individual sheet names are the tables you can select from in SQL. So if you want to get all the columns from a sheet \(table\) called "myData", then you would use the following:`SELECT * FROM myData`

