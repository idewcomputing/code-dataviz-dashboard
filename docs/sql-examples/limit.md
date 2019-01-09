# LIMIT

Use "LIMIT" at the end to return only a defined number of rows from the top of the result. It is often used with "ORDER BY" like below.

```sql
SELECT Major, StartingMedianSalary FROM Degrees ORDER BY StartingMedianSalary DESC LIMIT 3
```



