import { Check } from "lucide-react";

type SupportedType =
  | "employee"
  | "businessStructure"
  | "employeeTimeSeries"
  | "businessStructureTimeSeries"
  | "workUnit";

interface SupportedTypesTableProps {
  supportedTypes: SupportedType[];
}

export default function SupportedTypesTable({
  supportedTypes,
}: SupportedTypesTableProps) {
  const isSupported = (type: SupportedType) => supportedTypes.includes(type);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Business Structure</th>
            <th>Employee Time-Series</th>
            <th>Business Structure Time-Series</th>
            <th>Work Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text--center">
            <td>{isSupported("employee") ? <Check /> : ""}</td>
            <td>{isSupported("businessStructure") ? <Check /> : ""}</td>
            <td>{isSupported("employeeTimeSeries") ? <Check /> : ""}</td>
            <td>
              {isSupported("businessStructureTimeSeries") ? <Check /> : ""}
            </td>
            <td>{isSupported("workUnit") ? <Check /> : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
