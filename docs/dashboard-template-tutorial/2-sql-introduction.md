# 2 - SQL Introduction

[Structured Query Language \(SQL\)](https://www.w3schools.com/sql/sql_intro.asp) is a standard language for accessing and manipulating databases. Databases are just a group of data tables. Below is an example of a table called "Degrees" that could be in a database.

| Major | StartingMedianSalary | MidCareerMedianSalary |
| :--- | :--- | :--- |
| Accounting | 46000.00 | 77100.00 |
| Aerospace Engineering | 57700.00 | 101000.00 |
| Agriculture | 42600.00 | 71900.00 |
| Anthropology | 36800.00 | 61500.00 |

We could then use SQL to "filter" the table. For example the following SQL statement..

```sql
SELECT Major, StartingMedianSalary FROM Degrees
```

would generate the following table.

| Major | StartingMedianSalary |
| :--- | :--- |
| Accounting | 46000.00 |
| Aerospace Engineering | 57700.00 |
| Agriculture | 42600.00 |
| Anthropology | 36800.00 |

We simply `SELECT` columns `FROM` a table. Above we selected the columns "Major" and "StartingMedianSalary" from the "Degrees" table. 

We can also use `*` \(a wild card\) for the columns to get all the columns. So, `SELECT * FROM Degrees` will result in the full table. 

### Try It OUT

**1 - Find the following Javascript in your** _**code.js**_ **file.**

```text
viz.chart({
    sql:"SELECT * FROM Degrees",
    chartType:"Table",
    containerId:"chart2"
});
```

Notice how this code generates the table in your web view, where the table has a lot of columns \(actually, all of them\). 

**2 - Now change the SQL to the following to select only two columns.**

`SELECT Major, StartingMedianSalary FROM Degrees`

Run your web app and notice how the table has changed.

**3 - Now try the following SQL to get all the columns from a different table.**

 `SELECT * FROM States`

This gets a different table, "States", that can be found in our example database.

**4 - Go to** [**this Google Sheet**](https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing) **to see the example database and notice how each sheet \(tab\) is a table with a unique name.**

You will use SQL to get the right data from a database \(Google Sheets file\) for the charts you want to display. Next, we talk about producing the actual charts. 

