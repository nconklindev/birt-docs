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

type CoreEntityGroup = {
  [key: string]: CoreEntity[];
};

interface CoreEntityTableProps {
  coreEntities: CoreEntity[] | CoreEntityGroup;
}

export default function CoreEntityTable({
  coreEntities,
}: CoreEntityTableProps) {
  const renderTable = (entities: CoreEntity[], title?: string) => {
    const coreEntitiesList = (type: CoreEntity) => entities.includes(type);

    return (
      <div className="table-wrapper">
        {title && <h3>{title}</h3>}
        <table className="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Organization</th>
              <th>Day</th>
              <th>Organizational Job</th>
              <th>Paycode</th>
              <th>Labor Category</th>
              <th>Activity</th>
              <th>Work Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text--center">
              <td>{coreEntitiesList("employee") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("organization") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("day") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("orgJob") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("paycode") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("laborCategory") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("activity") ? <Check /> : ""}</td>
              <td>{coreEntitiesList("workUnit") ? <Check /> : ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  if (Array.isArray(coreEntities)) {
    return renderTable(coreEntities);
  }

  return (
    <>
      {Object.entries(coreEntities).map(([groupName, entities]) => (
        <div key={groupName}>
          {renderTable(
            entities,
            groupName.charAt(0).toUpperCase() + groupName.slice(1),
          )}
        </div>
      ))}
    </>
  );
}
