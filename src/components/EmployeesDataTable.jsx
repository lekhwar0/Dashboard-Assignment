import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaTable } from "react-icons/fa";

import allEmployees from "../data/allEmployeesData.json";

const EmployeesDataTable = () => {
  const [filteredEmployeesData, setFilteredEmployeesData] =
    useState(allEmployees);

  const customStyles = {
    headRow: {
      style: {
        minHeight: "40px",
        backgroundColor: "transparent",
        color: "black",
        border: "1px solid #DEE2E6",
        borderTop: "0px",
        borderBottom: "0px",
        borderLeft: "0px",
      },
    },
    headCells: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "700",
        textTransform: "capitalize",
        border: "1px solid #DEE2E6",
        borderRight: "0px",
      },
    },
    cells: {
      style: {
        minHeight: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        border: "1px solid #DEE2E6",
        borderTop: "0px",
        borderBottom: "0px",
        borderRight: "0px",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },

    rows: {
      style: {
        minHeight: "40px",
        border: "1px solid #DEE2E6",
        borderTop: "0px",
        borderBottom: "0px",
        borderLeft: "0px",
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
      cell: (row) => row.position,
    },
    {
      name: "Office",
      selector: (row) => row.office,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
      wrap: true, // Allow column text to wrap
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
      wrap: true,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true,
      wrap: true,
    },
  ];

  const handleEmployeesDataOnChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredResults = allEmployees.filter(
      (row) =>
        row.fullName.toLowerCase().includes(keyword) ||
        row.position.toLowerCase().includes(keyword) ||
        row.office.toLowerCase().includes(keyword) ||
        row.age.toLowerCase().includes(keyword) ||
        row.startDate.toLowerCase().includes(keyword) ||
        row.salary.toLowerCase().includes(keyword)
    );
    setFilteredEmployeesData(filteredResults);
  };

  useEffect(() => {
    setFilteredEmployeesData(allEmployees);
    // eslint-disable-next-line
  }, [allEmployees]);

  return (
    <div>
      <h4 className="bg-gray-100 px-4 py-2 flex items-center gap-2 border rounded-t-md">
        <FaTable /> Data Table Example
      </h4>

      <div className="p-4 border border-t-0 rounded-md rounded-t-none">
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleEmployeesDataOnChange}
            className="w-full md:w-1/2 p-2 mb-4 border outline-blue-500 rounded-md"
          />
        </div>
        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={filteredEmployeesData}
          pagination
          paginationRowsPerPageOptions={[10, 25, 100]}
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default EmployeesDataTable;
