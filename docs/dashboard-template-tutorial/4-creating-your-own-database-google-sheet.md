# 4 - Creating Your Own Database \(Google Sheet\)

{% hint style="info" %}
For reference, when you want to find real-world data, consider using this resource.

[https://www.freecodecamp.org/news/https-medium-freecodecamp-org-best-free-open-data-sources-anyone-can-use-a65b514b0f2d/](https://www.freecodecamp.org/news/https-medium-freecodecamp-org-best-free-open-data-sources-anyone-can-use-a65b514b0f2d/)
{% endhint %}

### 1 - Create a Google Sheets File and Add Data

Create a Google Sheet file then create a simple table, like below, that could be used for a Scatter Chart. Also, name your individual sheet \(the tab at the bottom\) something like "myData".

| x | y |
| :--- | :--- |
| 3 | 4 |
| 4 | 6 |

### 2 - Publish Your Google Sheets File

Create a Google Sheets file and publish it by selection `file`&gt;`Publish to the web...` then click the _Publish_ button. 

### 2 - Get the Public Shareable Link

Next click the Share button in the upper-righthand corner and copy the shareable link. Make sure it is set to "Anyone with link can view".

### 3 - Load Your File in Javascript

In your javascript file, find this line in the _setup\(\)_ function: `viz.loadExampleTables().then(composeCharts);` Copy the code below and paste it just after this line. Now replace the link with your shareable link.

```javascript
viz.loadTables('https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing')
    .then(composeCharts);
```

Now you can access your database in your SQL statements. Remember that your individual sheet names are the tables you can select from in SQL. So if you want to get all the columns from a sheet \(table\) called "myData", then you would use the following:`SELECT * FROM myData`

{% hint style="info" %}
#### Merging your database with the example database.

Ensure your database \(Google sheets file\) doesn't use any table names \(individual sheet names\) already in the example database. as this would cause a conflict.
{% endhint %}

### 4 - Create a Chart from Your Database

Use the same process you used earlier to produce a scatter chart from your data. Essentially, you want to confirm that you understand how to create your own data and chart it in your dashboard.

