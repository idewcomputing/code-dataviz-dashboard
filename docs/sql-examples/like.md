# LIKE

The LIKE operator is used with the WHERE clause and searches for a _string_ pattern in a column. The statement below will return only the rows where the "Major" is "Accounting".

```sql
SELECT Major, StartingMedianSalary FROM Degrees WHERE Major LIKE 'Accounting'
```

The statement below uses "%" as wildcard. So any row with a "Major" that begins with "A" will be returned--Accounting, Agriculture, Art, etc.

```sql
SELECT Major, StartingMedianSalary FROM Degrees WHERE Major LIKE 'A%'
```

