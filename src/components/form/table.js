import React, { useState } from "react";
import { Table, Checkbox } from "@mantine/core";

const data = [
  { payer: "Aetna", records: 98, uniqueNPIs: 44, cost: 196.0 },
  { payer: "BCBS", records: 98, uniqueNPIs: 44, cost: 90.0 },
  { payer: "Cigna", records: 98, uniqueNPIs: 44, cost: 176.0 },
  { payer: "UHC", records: 98, uniqueNPIs: 44, cost: 204.0 },
];

function CustomTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Sorting logic
  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    if (sortOrder === "asc") {
      return valueA > valueB ? 1 : -1;
    }
    return valueA < valueB ? 1 : -1;
  });

  // Checkbox logic
  const toggleRowSelection = (payer) => {
    if (selectedRows.includes(payer)) {
      setSelectedRows(selectedRows.filter((row) => row !== payer));
    } else {
      setSelectedRows([...selectedRows, payer]);
    }
  };

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.payer));
    }
  };

  // Header sorting handler
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <div className=" bg-white shadow-md rounded-md">
      <Table>
        <thead className="bg-[#488AC8] text-white text-center ">
          <tr>
            <th className="p-3  font-semibold">
              {/* <Checkbox
                checked={selectedRows.length === data.length}
                indeterminate={
                  selectedRows.length > 0 && selectedRows.length < data.length
                }
                onChange={toggleAllRows}
              /> */}
            </th>
            <th
              className="p-3  cursor-pointer font-semibold"
              onClick={() => handleSort("payer")}
            >
              Payer {sortBy === "payer" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-3 cursor-pointer font-semibold"
              onClick={() => handleSort("records")}
            >
              Number of Records{" "}
              {sortBy === "records" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-3  cursor-pointer font-semibold"
              onClick={() => handleSort("uniqueNPIs")}
            >
              Number of unique NPIs{" "}
              {sortBy === "uniqueNPIs" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="p-3 text-left cursor-pointer font-semibold"
              onClick={() => handleSort("cost")}
            >
              Cost to Buy {sortBy === "cost" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sortedData.map((row, index) => (
            <tr
              key={row.payer}
              className="border-b font-semibold  text-[14px] text-[#69738B]"
            >
              <td className="p-3 border-r ">
                <Checkbox
                  checked={selectedRows.includes(row.payer)}
                  onChange={() => toggleRowSelection(row.payer)}
                />
              </td>
              <td className="p-3">{row.payer}</td>
              <td className="p-3">{row.records}</td>
              <td className="p-3">{row.uniqueNPIs}</td>
              <td className="p-3 font-bold ">
                <div className="flex text-[#1C2F5B] items-center w-[65%] p-1  gap-1   bg-[#EDF1FF] rounded-md  ">

             
                <div className="w-[18px] h-[18px] text-white text-[16px] rounded-full  bg-[#488AC8] flex items-center justify-center"> $ 
                    
                </div>
                <div>{row.cost.toFixed(2)}</div>
                    </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
