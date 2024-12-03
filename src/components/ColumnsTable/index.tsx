import React from "react";

interface Column {
  label: string;
  description: string;
  key: string;
  dataType: string;
  hasParameter: boolean;
}

interface ColumnsTableProps {
  columns: Column[];
}

const ColumnsTable: React.FC<ColumnsTableProps> = ({ columns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Label</th>
          <th>Description</th>
          <th>Key</th>
          <th>Data Type</th>
          <th>Has Parameter</th>
        </tr>
      </thead>
      <tbody>
        {columns.map((column, index: number) => (
          <tr key={index}>
            <td>{column.label}</td>
            <td>{column.description}</td>
            <td>{column.key}</td>
            <td>{column.dataType}</td>
            <td
              className={column.hasParameter ? "hasParameter" : "noParameter"}
            >
              {column.hasParameter ? "Yes" : "No"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColumnsTable;
