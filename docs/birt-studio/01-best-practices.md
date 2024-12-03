---
title: Best Practices
description: "A list of best practices that have been developed by report SMEs within Support and will help when building custom reports."
sidebar_position: 99 # Use 99 so that the folder hierarchy takes precedence
---

# Best Practices

These are a list of best practices that have been developed by report SMEs within Support and will help when building custom reports.

:::info

None of these are a must, but not following some of these have been known to cause issues with reports or add to report development time due to confusion, unclear namings or other reason.

:::

## Naming Conventions

When naming your report, it is best to follow a standard naming convention. Typically we recommend naming reports in **PascalCase** or **camelCase**. This will help you and others understand what the report is for and what it does. Here are some examples of what would be considered good naming conventions:

- EmployeeHoursByJob
- EmployeeHoursByJobAndDate
- PunchDetailReport
- TimecardAudit
- EmployeeActivityHours

## Each Report Data Object Has a Purpose

A Report Data Object (RDO) should be used in at most one report and only one report. The idea is that an RDO should contain *only* the exact number of columns that a single report needs. This helps prevent any future issues or conflicts that may come up if the RDO was to be used in multiple reports. This also helps keep runtimes down in reports that do not make use of all of the columns. This is because even when a column is added into an RDO but not used in the report design, the data is still requested when the report is run, which can increase the runtime of the report.

:::note

This rule can be broken in cases where multiple reports make use of all (or most) of the columns in the RDO, but we don't suggest using the RDO in reports where this is not the case.

:::

