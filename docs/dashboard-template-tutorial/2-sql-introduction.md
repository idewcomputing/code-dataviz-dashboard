# 2 - SQL Introduction

[Structured Query Language \(SQL\)](https://www.w3schools.com/sql/sql_intro.asp) is a standard language for accessing and manipulating databases. Databases are just a group of data tables. Below is an example of a table called "Degrees" that could be in a database.

| Major | StartingMedianSalary | MidCareerMedianSalary |
| :--- | :--- | :--- |
| Accounting | 46000.00 | 77100.00 |
| Aerospace Engineering | 57700.00 | 101000.00 |
| Agriculture | 42600.00 | 71900.00 |
| Anthropology | 36800.00 | 61500.00 |

We could then use SQL to "filter" the table. For example the following SQL statment..

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

