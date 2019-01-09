# WHERE

The WHERE clause is used to filter records based on a condition. The following SQL statement  will return a table that only contains rows where the "StartingMedianSalary" is greater than 60000.

```sql
SELECT Major, StartingMedianSalary FROM Degrees WHERE StartingMedianSalary > 60000
```

You can use the following operators for the comparison.

| Operator | Description |
| :--- | :--- |
| = | Equal |
| &lt;&gt; | Not equal. |
| &gt; | Greater than |
| &lt; | Less than |
| &gt;= | Greater than or equal |
| &lt;= | Less than or equal |

