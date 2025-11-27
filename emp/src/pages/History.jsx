import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { motion } from "framer-motion";

//  API for employee attendance history
const fetchEmployeeAttendance = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: "1 Nov 2025",
          day: "Saturday",
          checkIn: "10:45",
          checkOut: "8:01",
          totalTime: "9h",
          attendance: "Present",
        },
        {
          date: "2 Nov 2025",
          day: "Sunday",
          checkIn: "---",
          checkOut: "---",
          totalTime: "---",
          attendance: "Absent",
        },
        {
          date: "3 Nov 2025",
          day: "Monday",
          checkIn: "11:10",
          checkOut: "7:20",
          totalTime: "8h",
          attendance: "Late",
        },
        {
          date: "4 Nov 2025",
          day: "Tuesday",
          checkIn: "10:30",
          checkOut: "7:55",
          totalTime: "8.5h",
          attendance: "Present",
        },
      ]);
    }, 800);
  });

// Status Badge Component
const StatusBadge = ({ status }) => {
  let color =
    status === "Present"
      ? " bg-green-600 text-white"
      : status === "Late"
      ? "bg-yellow-500 text-white "
      : "bg-red-500 text-white";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block min-w-[60px] text-center ${color}`}
    >
      {status}
    </span>
  );
};

// Columns for employee history
const columns = [
  { name: "Date", selector: (row) => row.date, sortable: true, width: "150px" },
  { name: "Day", selector: (row) => row.day },
  { name: "Check-In", selector: (row) => row.checkIn },
  { name: "Check-Out", selector: (row) => row.checkOut },
  { name: "Total Time", selector: (row) => row.totalTime },
  {
    name: "Status",
    cell: (row) => <StatusBadge status={row.attendance} />,
    width: "150px",
  },
];

const customStyles = {
  header: {
    style: {
      backgroundColor: "#f9fafb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: "600",
      color: "#111827",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#f3f4f6",
      borderBottom: "1px solid #e5e7eb",
    },
  },
  headCells: {
    style: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#374151",
    },
  },
  rows: {
    style: {
      minHeight: "48px",
      borderBottom: "1px solid #e5e7eb",
    },
    highlightOnHoverStyle: {
      backgroundColor: "#f1f5f9",
    },
  },
  pagination: {
    style: {
      borderTop: "1px solid #e5e7eb",
      fontSize: "14px",
      color: "#4b5563",
    },
  },
};

export default function EmployeeHistory() {
  const [records, setRecords] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [month, setMonth] = useState("All");

  useEffect(() => {
    fetchEmployeeAttendance().then((data) => setRecords(data));
  }, []);

  // Filtering by date
  const filteredRecords = records.filter((item) => {
    const matchesDate = item.date
      .toLowerCase()
      .includes(searchDate.toLowerCase());

    const matchesMonth =
      month === "All" || item.date.toLowerCase().includes(month.toLowerCase());

    return matchesDate && matchesMonth;
  });

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Top section */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Attendance History
        </h2>

        <div className="flex gap-3">
          {/* Search By Date */}
          <input
            type="text"
            placeholder="Search by date..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />

          {/* Month Filter */}
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="All">All Months</option>
            <option value="nov">November</option>
            <option value="oct">October</option>
            <option value="sep">September</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredRecords}
        pagination
        highlightOnHover
        progressPending={!records.length}
        customStyles={customStyles}
      />
    </motion.div>
  );
}
