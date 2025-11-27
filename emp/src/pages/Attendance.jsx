import React, { useState } from "react";
import DataTable from "react-data-table-component";

// dummy data —  API data
const data = [
  {
    date: "3 Nov 2025",
    day: "Friday",
    checkIn: "10:50",
    checkOut: "08:00",
    TotalTime: "9h",
    status: "Present",
  },
  {
    date: "4 Nov 2025",
    day: "Saturday",
    checkIn: "---",
    checkOut: "---",
    TotalTime: "---",
    status: "Absent",
  },
  {
    date: "5 Nov 2025",
    day: "Sunday",
    checkIn: "11:15",
    checkOut: "07:45",
    TotalTime: "8.5h",
    status: "Late",
  },
];

// Status Badge UI
const StatusBadge = ({ status }) => {
  let style =
    "px-3 py-1 rounded-full text-xs font-semibold w-max text-white inline-block min-w-[60px] text-center";

  if (status === "Present") style += " bg-green-600";
  else if (status === "Absent") style += " bg-red-500";
  else if (status === "Late") style += " bg-yellow-500";
  else style += " bg-gray-400";

  return <span className={style}>{status}</span>;
};

const columns = [
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    width: "150px",
  },
  {
    name: "Day",
    selector: (row) => row.day,
  },
  {
    name: "Check-In",
    selector: (row) => row.checkIn,
  },
  {
    name: "Check-Out",
    selector: (row) => row.checkOut,
  },
  {
    name: "Total Time",
    selector: (row) => row.TotalTime,
  },
  {
    name: "Status",
    cell: (row) => <StatusBadge status={row.status} />,
    sortable: true,
    width: "150px",
  },
];

export default function Attendance() {
  const [search, setSearch] = useState("");

  // Filter Data By Search Value
  const filteredData = data.filter((item) =>
    item.date.toLowerCase().includes(search.toLowerCase())
  );

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
        backgroundColor: "#f9fafb", // gray-50
      },
    },
    headRow: {
      style: {
        backgroundColor: "#f3f4f6", // gray-100
        borderBottomWidth: "1px",
        borderBottomColor: "#e5e7eb",
      },
    },
    rows: {
      style: {
        minHeight: "48px",
        borderBottomWidth: "1px",
        borderBottomColor: "#e5e7eb",
        fontSize: "14px",
      },
      highlightOnHoverStyle: {
        backgroundColor: "#f1f5f9",
      },
    },
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">My Attendance</h1>

      {/* Filter Bar */}
      <div className="mb-4 flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-semibold">Search</label>
          <input
            type="text"
            className="border px-3 py-2 rounded-lg w-60 focus:outline-blue-600"
            placeholder="Search by date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Month Dropdown*/}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-semibold">
            Filter by Month
          </label>
          <select className="border px-3 py-2 rounded-lg w-40">
            <option>November 2025</option>
            <option>October 2025</option>
            <option>September 2025</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <DataTable
          title="Attendance Records"
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}
