---
title: Deprecated Entities
slug: /data-dictionary/deprecated-entities
---

# Deprecated Entities and Suggested Alternatives

The following entities and all associated data columns have been hidden in the Column Selector UI when Dataviews and Report Data Objects are being created. APIs that enable the creation of Dataviews or reports, as well as the GetData API, do not prevent their use. The Data Dictionary API continues to show all available data columns including these.

| Deprecated Entity                         | Suggested Alternative                                                                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Availability Request                      | [Availability Request Detail](/docs/data-dictionary/availability-request-detail)                                                                                                                         |
| Availability Request Item                 | [Availability Request Detail](/docs/data-dictionary/availability-request-detail)                                                                                                                         |
| Availability Request Item Segment         | [Availability Request Detail](/docs/data-dictionary/availability-request-detail)                                                                                                                         |
| Availability Request Status               | [Availability Request Detail](/docs/data-dictionary/availability-request-detail)                                                                                                                         |
| Availability Request Subtype              | [Availability Request Detail](/docs/data-dictionary/availability-request-detail)                                                                                                                         |
| Holiday Credit Exceptions                 | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Holiday Credit Exceptions Comments        | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Holiday Credit Transactions               | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Hours Worked Comments                     | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Hours Worked Exceptions                   | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Hours Worked Exceptions Comments          | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Hours Worked Transactions                 | [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                                                                     |
| Swap Shift Request                        | [Swap Request](/docs/data-dictionary/swap-request)                                                                                                                                                       |
| Swap Shift Request Status                 | [Swap Request](/docs/data-dictionary/swap-request)                                                                                                                                                       |
| Swap Shift Request Subtype                | [Swap Request](/docs/data-dictionary/swap-request)                                                                                                                                                       |
| Timecard Daily Actual Totals              | [Actual Totals Exclude Corrections](/docs/data-dictionary/actual-totals-exclude-corrections) or [Actual Totals Include Corrections](/docs/data-dictionary/actual-totals-include-corrections)             |
| Timecard Daily Projected Totals           | [Projected Totals Exclude Corrections](/docs/data-dictionary/projected-totals-exclude-corrections) or [Projected Totals Include Corrections](/docs/data-dictionary/projected-totals-include-corrections) |
| Timecard Daily Scheduled Totals           | [Scheduled Totals](/docs/data-dictionary/scheduled-totals)                                                                                                                                               |
| Timecard Shift Actual Totals              | [Actual Totals Exclude Corrections](/docs/data-dictionary/actual-totals-exclude-corrections) or [Actual Totals Include Corrections](/docs/data-dictionary/actual-totals-include-corrections)             |
| Timecard Shift Projected Totals           | [Projected Totals Exclude Corrections](/docs/data-dictionary/projected-totals-exclude-corrections) or [Projected Totals Include Corrections](/docs/data-dictionary/projected-totals-include-corrections) |
| Timecard Shift Scheduled Totals           | [Scheduled Totals](/docs/data-dictionary/scheduled-totals)                                                                                                                                               |
| Timecard Totals                           | [Actual Totals Exclude Corrections](/docs/data-dictionary/actual-totals-exclude-corrections) or [Actual Totals Include Corrections](/docs/data-dictionary/actual-totals-include-corrections)             |
| Worked Span In Punch Exceptions           | [Exceptions](/docs/data-dictionary/exceptions) or [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                   |
| Worked Span In Punch Exceptions Comments  | [Exceptions](/docs/data-dictionary/exceptions) or [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                   |
| Worked Span Out Punch Exceptions          | [Exceptions](/docs/data-dictionary/exceptions) or [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                   |
| Worked Span Out Punch Exceptions Comments | [Exceptions](/docs/data-dictionary/exceptions) or [Timecard Transactions](/docs/data-dictionary/timecard-transactions)                                                                                   |

**The following columns have been deprecated in the [Actual Totals Corrections Only](/docs/data-dictionary/actual-totals-corrections-only) entity:**

- TK_ACTUAL_WAGE_ADD_ONLY_CORRECTIONS
- TK_ACTUAL_WAGE_MULTIPLIER_ONLY_CORRECTIONS

**The following columns have been deprecated in the [Actual Totals Exclude Corrections](/docs/data-dictionary/actual-totals-exclude-corrections) entity:**

- TK_ACTUAL_WAGE_ADD_EXCLUDE_CORRECTIONS
- TK_ACTUAL_WAGE_MULTIPLIER_EXCLUDE_CORRECTIONS

**The following columns have been deprecated in the [Actual Totals Include Corrections](/docs/data-dictionary/actual-totals-include-corrections) entity:**

- TK_ACTUAL_WAGE_ADD_INCLUDE_CORRECTIONS
- TK_ACTUAL_WAGE_MULTIPLIER_INCLUDE_CORRECTIONS

**The PEOPLE_EXPECTED_PAYPERIOD_HOURS column in the [Employee Details](/docs/data-dictionary/employee-details) entity has been deprecated. It has been replaced with the PEOPLE_EXPECTED_PAYPERIOD_HOURS_NEW column with the same label and description appearing in the Column Selection panel.**
