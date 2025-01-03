import React from 'react';
import { Table } from '@mantine/core';
import { TableRow } from '../utils/dataProcessing';

interface TableProps {
  data: TableRow[];
}

const DataTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      <Table striped highlightOnHover withTableBorder withColumnBorders withRowBorders>
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.maxCrop}</td>
              <td>{row.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;