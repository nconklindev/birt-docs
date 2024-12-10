---
title: FAQ
description: "Frequently asked questions for BIRT Studio and report development"
sidebar_position: 99
---

In this article, we outline a number of common questions that could come up when creating or editing custom reports in BIRT Studio.

## I added my Report Data Object to my report design. Why do I not see anything?

If you've created a brand new report and just added your Report Data Object following the correct steps and nothing happens, but you see the Save icon appear in the top toolbar, then it has been successfully added. To have data populate on the left sidebar, click anywhere inside the middle bordered text area.

## Why is my CSV output failing?

Be sure to check the CSV parameters in the report design and follow the steps exactly from [Creating CSV Reports](/docs/birt-studio/advanced/creating-csv-reports). Most likely, a column is not properly defined in the parameter according to the RDO column Label.

If you have verified these items, please open a case with Support.

## Why can I not edit a "Read-Only" report?

Any Read-Only report, whether Standard or Custom, are reports that are developed by Engineering and Professional Services outside of BIRT Studio. Support nor customers have access to this tool and therefore these reports cannot be edited. If you have a Read-Only report that needs to be edited, please open a Service Request.

## I want to report on _____ configuration within the application. Can I?

At this time, there are no exposed entities that will allow a user to report on application configuration. The best way to get this data is to utilize the [developer portal](https://developer.ukg.com) and go through the different endpoints to see if there is an endpoint that will provide the data you are looking for.

## Why does "Select Values" not work when trying to add a filter?

The BIRT Studio that is within WFM is not the same BIRT Studio that comes out of the box. That is to say, the product that is within WFM has been heavily customized to tailor it to the needs of the business and to fit within the current infrastructure. Some features do not work as they might if this was being used as a standalone reporting software outside of WFM. The "Select Values" feature is one of them.

## Why can I not select other RDOs when creating a new report?

You are only able to select from the existing list of "Custom" Report Data Objects. Standard, Standard Read-Only and Custom Read-Only RDOs cannot be used when creating a new report. If you need to use a Standard RDO, you need to go through the process of duplicating it first, which will turn it into a "Custom".

## I opened my Custom report and receive a "Render report failed" error every time. What is this error and how do I fix it?

The "Render report failed" error will only occur when there is a column binding inside the report design, but it's corresponding link has been deleted from the Report Data Object. If you have edited a report design recently and remember what column was deleted, adding it back to the RDO and saving will resolve the issue.

If you are not the one that made the change or do not remember what column was deleted, please reach out to Support who can reproduce the issue and review logs to determine the column that was deleted.

:::info

The column that is added back must be added back *exactly* the way it was previously. For example, if you deleted an "Actual Total Hours (Include Corrections)" that was parameterized by "Employee, Pay Code, Date" and you only add back the "Actual Total Hours (Include Corrections)" without changing the parameter, it will not work. It must be the exact same. In this case, it would need to be set to "Employee, Pay Code, Date".

:::

## What is the ExecutionException error that sometimes occurs?

Try reloading the report from "Published Reports" again and click on "Edit Design". If the error does not go away after multiple attempts (2 to 3), open a Support case who will be able to investigate further.

## Why does my report keep failing?

Answering this question simply in an FAQ is not possible. There is no one "right" answer that will suit all use cases. For that reason, please refer to the [Troubleshooting](/docs/birt-studio/troubleshooting) pages for more information.

## I'm a manager with access to the entire organization. Why can I not see anyone else's reports they have run?

This is by design. Any manager that has access to the Report Library will only be able to see the reports that have been *run by* them. This includes scheduled reporting jobs that designate the manager as the "Run As" user.

## I updated a column in my RDO to change the Assignment, but the report is still showing the old Assignment. Why?

When you update a column in the RDO, you must also update the report design to reflect the change. This is because the report design is a snapshot of the RDO at the time it was created. If you update the RDO, the report design will not automatically update. To sync the change with the report design:

1. Open the report design
2. Data > Manage Data
3. Click the "Refresh" icon

## Why am I receiving the pop-up that says "The sample data does not meet the filter conditions..."

This pop-up is not an error and is common during the report design process. In BIRT Studio, the default parameters are today - today for All Home Locations (not All Home). This pop-up can simply mean that the conditions that are set in the report design for those default parameters return nothing. However, when run for a different set of parameters, the report will return data. Test the report by previewing it for a wider timeframe and All Home Locations (or smaller if All Home Locations is too large).

## How do I make _____ report?

While we aim to provide the best documentation possible on reporting, BIRT Studio and Dataviews, we aren't able to create custom tailored articles for all different kinds of reports. Please see the [cookbook](/docs/birt-studio/report-cookbook) for basic recipes on getting started creating specific kinds of reports. **These are not full how-to articles**.

We also have a few articles on creating a specific type of report such as "Hours by Paycode" in the [Community](https://community.ukg.com). There is also an article on the Community that contains several reporting templates that have been created by reporting subject matter experts within Support. The files will be .zip files that can be downloaded and imported using Setup Data Manager (SDM).

:::warning

The templates provided in the external KB article are only getting started points and are not meant to be a complete solution. Some may work as-is, but most will likely require modification to tailor the report to your business's needs.

:::

## I'm receiving a WFP-114330 Error when trying to schedule a report. What does this mean?

The full text of this error is "WFP-114330 Saved location and private Hyperfind parameters are not allowed for different run as user." This error occurs when a report is scheduled to run as a user that does not have access to the saved location or private Hyperfind parameters. In order to use private Hyperfinds or saved locations, a Function Access Profile setting must be set to allowed. The setting is **Manager - Department Manager > Reports > Schedule reports for others**.