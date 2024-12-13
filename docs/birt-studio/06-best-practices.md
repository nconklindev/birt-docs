---
title: Best Practices
description: "A list of best practices that have been developed by report SMEs within Support and will help when building custom reports."
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

A Report Data Object (RDO) should be used in at most one report and only one report. The idea is that an RDO should contain _only_ the exact number of columns that a single report needs. This helps prevent any future issues or conflicts that may come up if the RDO was to be used in multiple reports. This also helps keep runtimes down in reports that do not make use of all of the columns. This is because even when a column is added into an RDO but not used in the report design, the data is still requested when the report is run, which can increase the runtime of the report.

:::note

This rule can be broken in cases where multiple reports make use of all (or most) of the columns in the RDO, but we don't suggest using the RDO in reports where this is not the case.

:::

## Think of the Employees!

When creating an Employee based RDO, it is best practice to add _at least_ one column from the **Employee Details** entity first. This will set the relationship rules so that only those entities that relate to **Employee Details** can be added. This keeps the RDO conforming to column relationship rules and ensures your report will not have any issues due to the configuration of the RDO.

## Leave Column Relationship Rules On

When building an RDO or Dataview, the Column Relationship Rules checkbox is enabled by default and the control is hidden behind a Feature Switch. The Feature Switch is called "Ability to disable column relationship rules". Enabling this setting will make the checkbox visible again. While this Feature Switch can be enabled to show the checkbox again, we **do not recommend disabling column relationship rules**.

:::danger

By disabling column relationship rules, you are opening your RDO/Dataview up for potential issues. When unrelated entities are used together in an RDO, the report may display unexpected behaviors. Some indications that unrelated entities are being used are:

- Duplicate rows with seemingly the same data
- Blank rows
- "Duplicate" rows where one row shows data in some columns and not others and the subsequent rows showing data in the other columns
- No data
- Errors

If a Support case is entered and the issue is with a report or Dataview that has Column Relationship Rules disabled, Support will not be able to assist until a new RDO or Dataview is created with Column Relationship Rules enabled.

:::
