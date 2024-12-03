import React from "react";
import { Check } from "lucide-react";

type CoreEntity =
  | "employee"
  | "organization"
  | "day"
  | "orgJob"
  | "paycode"
  | "laborCategory"
  | "activity"
  | "workUnit";

type SimpleRelationship = "1:1" | "1:N";

interface ComplexRelationship {
  type: "complex";
  cardinality: {
    "1:1"?: CoreEntity[];
    "1:N"?: CoreEntity[];
  };
}

type Relationship = SimpleRelationship | ComplexRelationship | "";

interface RelationshipTableProps {
  relationship: Relationship;
  simple?: boolean;
}

const entityNameMap: Record<CoreEntity, string> = {
  employee: "Employee",
  organization: "Organization",
  day: "Day",
  orgJob: "Organizational Job",
  paycode: "Paycode",
  laborCategory: "Labor Category",
  activity: "Activity",
  workUnit: "Work Unit",
};

export default function RelationshipTable({
  relationship,
  simple = false,
}: RelationshipTableProps) {
  if (simple) {
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>One-To-One</th>
              <th>One-To-Many</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text--center">
              <td>{relationship === "1:1" ? <Check /> : ""}</td>
              <td>{relationship === "1:N" ? <Check /> : ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (typeof relationship === "object" && relationship.type === "complex") {
    const oneToOneEntities = relationship.cardinality["1:1"] || [];
    const oneToManyEntities = relationship.cardinality["1:N"] || [];

    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>One-To-One</th>
              <th>One-To-Many</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {oneToOneEntities
                  .map((entity) => entityNameMap[entity])
                  .join(", ")}
              </td>
              <td>
                {oneToManyEntities
                  .map((entity) => entityNameMap[entity])
                  .join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (relationship === "") {
    return <div>No relationship</div>;
  }

  return <div>Error: Invalid relationship format</div>;
}
