import React from "react";
import DataTable from "react-data-table-component";

// sample data
const data = [
  {
    name: "Cara",
    email: "cara@example.com",
    position: "Developer",
    hire: "06-Jun-2025",
    notice: "06-Sep-2025",
    location: "LHR",
    resigination: "06-Aug-2025",
  },
];

// column definitions
const columns = [
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Email", selector: (row) => row.email },
  { name: "Position", selector: (row) => row.position },
  { name: "Hire Date", selector: (row) => row.hire },
  { name: "Notice Period", selector: (row) => row.notice },
  { name: "Resignation", selector: (row) => row.resigination },
  { name: "Location", selector: (row) => row.location },
];

function Table() {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f3f4f6", // Tailwind gray-100
        borderBottomWidth: "1px",
        borderBottomColor: "#e5e7eb",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151",
      },
    },
    rows: {
      style: {
        minHeight: "48px",
        borderBottomWidth: "1px",
        borderBottomColor: "#e5e7eb",
        fontSize: "15px",
      },
    },
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <div
        className="text-md bg-white p-6 rounded-xl shadow-md"
        style={{
          overflowX: "auto", // 👈 enables horizontal scroll
          whiteSpace: "nowrap",
        }}
      >
        <div className="max-w-[900px] mx-auto">
          {" "}
          {/* 👈 fixed inner width */}
          <DataTable
            title="Employee Details"
            columns={columns}
            data={data}
            pagination
            selectableRows={false}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
