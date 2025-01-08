---
title: Report Cookbook
description: Basic recipes for creating specific types of reports
---

## What Is This?

This page should be treated as a way to generate ideas for your next report. This page is not meant to be a
comprehensive walkthrough of how to create specific reports within BIRT Studio. Instead, it shows different patterns to
creating different kinds of reports and includes certain entities and columns that can be used together to achieve a
desired result.

The recipes provided here are only a getting started point and can of course be modified to whatever is needed. None of
the recipes below will be for reports that require specific computed columns, filters, groups, or aggregations. If you
need help with a specific report, please open a case with Support.

## Hours by XXX

### Report Description

The "Hours by XXX" report is a very common reporting recipe. It can be made to report on hours by Paycode, Labor
Category, Cost Center, Location, etc. Use the below entity and column suggestions to build your desired report.

### Report Data Object

**Entities**

-   Employee Details
-   Actual Total Hours (Include Corrections)
-   Paycode
-   Worked Job
-   Labor Category

**Columns**

-   Employee Full Name
-   Employee ID
-   Paycode Name
-   Actual Total Hours
    -   Assignment: Employee, Pay Code, Date
-   Actual Total Wages
-   Location Name (Worked)
    -   Assignment: As needed
-   Labor Category Level X Entry Name
-   Cost Center Name
