---
title: Insert into mysql table if not exists
author: mithrandir
date: 2015-04-03 22:38:00+00:00
slug: insert-into-mysql-table-if-not-exists
permalink: /2015/insert-into-mysql-table-if-not-exists
tags:
 - mysql
 - insert ignore
---

**WHAT:** I needed to insert some records into a table but only if the record was not already present. 

**HOW:**  

`INSERT IGNORE` is the way to do this in mysql, it silently fails the instruction if it finds an existing record and proceeds.

```
INSERT IGNORE INTO destination_table (value1, value2, value3)
SELECT e.value1, 'fixed_value', e.value3
FROM source_table e
WHERE condition1 AND condition2
```
