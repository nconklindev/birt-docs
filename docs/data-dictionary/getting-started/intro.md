---
title: Introduction to the Data Dictionary
slug: /data-dictionary/getting-started
sidebar_position: 1
---

## What is the Data Dictionary?

The Data Dictionary is a collection of all available data elements that serve as the individual building blocks that are represented as data columns in Dataviews and Report Data Objects (RDOs). Each data element is a distinct object that is defined by the makeup of its attributes and metadata. It is designed to provide a single, specific piece of information that is used to evaluate a measurement about an activity, a set of employees, or the organization.

A user can choose from over a thousand data elements, which are organized into groups called **entities**. The entities categorize the elements based upon related transactional areas. In order to provide users with a suggested set of data columns that can be sensibly combined to generate favorable results, column relationship rules have been established based on these entities and how they are associated to one another. Without the column relationship rules, users would have free reign to combine all available columns without any relationship driving their selection.

This is a comprehensive reference guide to the Data Dictionary that provides essential information about data element metadata and column relationship rules. In addition, it provides guidance for the use of the data element set as well and addresses frequently asked questions.

## Understanding the Column Relationship Rules

### Core Entity Relationship

The first degree of relation in the rules involves the entities into which the data elements are grouped. These entities consolidate data elements that share a transactional theme. The second degree of relation involves the core entity definition that describes how an entity relates to other entities.

There are seven core entities: EMP, ORG, DAY, ORGJOB, PAYCODE, LABORCATEGORY, and ACTIVITY. An entity’s core entity definition can be a combination of one or more of these core entities. An entity is related to another core entity if:

- They have the same exact core entity definition. For example, If the core entity of A is EMP|ORG and the core entity of B is also EMP|ORG then A and B are related.
- The second core entity is the superset of the first core entity. For example, if the core entity of A is EMP|DAY|ORGJOB and the core entity of B is EMP|ORG|DAY|ORGJOB then A and B are related.
- The second core entity is the subset of the first core entity. For example, if the core entity of A is ORGJOB|LABORCATEGORY and the core entity of B is ORGJOB then A and B are related but only if A is selected before B.

## Things to Note During Column Selection

Here are a few tips to help you during the column selection process:

- The order in which you select your columns matters! The entity relationship rules restrict Dataview creation to a single one-to-many entity relationship. Once you select a one-to-many entity relationship, all other one-to-many entity relationships will be removed from the column selection process. However, if you continually select only one-to-one relationships, all one-to-many relationships will still be available. Note that the exception to this rule is when the entities are within the same parent and child entity structure.

:::note

It is highly suggested that, if you are building an Employee Dataview, the first columns you should add are the Employee Detail columns (for example, Employee Name and Employee ID).

:::

- As you pick your columns, the core entity relationship will be the main driver for which columns will still be available for selection. The next selected column will always come from an entity that has the same core entity or a superset of all previous selected entities. (For example, if your first column had a core entity definition of EMP and DAY, then any columns following this selection will always have EMP and DAY, at the minimum, in their core entity definitions).

- During creation of an Employee Dataview, if you do not use the reorder columns component, the first selected column will always be the one pinned to the left side of the Dataview. You will not be able to reposition columns to the left of the pinned column when using the Dataview.

- During creation of a Business Structure Dataview, the selected Location Type (rollupBy) will determine the prepopulated list of pinned columns. By default, only the selected location will be visible.

- If the column relationship rules check box is selected (enabled) and a column is selected, the check box will become grayed out and the user will not be able to uncheck the relationship rules midway through creating the Dataview. To disable the check box, delete all of the selected columns.
