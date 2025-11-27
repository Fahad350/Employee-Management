import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaCalendarCheck,
  FaCalendarTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

//  API data
const fetchEmployeeDashboard = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Herry",
        totalPresent: 18,
        totalAbsent: 2,
        totalLate: 3,
        todayStatus: "Present",
      });
    }, 500);
  });

export default function EmployeeDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchEmployeeDashboard().then((res) => setData(res));
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  const statusColor =
    data.todayStatus === "Present"
      ? "bg-green-500"
      : data.todayStatus === "Late"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {data.name}</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Present */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
          <FaCalendarCheck className="text-green-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Total Present</p>
            <p className="text-xl font-semibold">{data.totalPresent}</p>
          </div>
        </div>

        {/* Total Absent */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
          <FaCalendarTimes className="text-red-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Total Absent</p>
            <p className="text-xl font-semibold">{data.totalAbsent}</p>
          </div>
        </div>

        {/* Total Late */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
          <FaExclamationTriangle className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Total Late</p>
            <p className="text-xl font-semibold">{data.totalLate}</p>
          </div>
        </div>

        {/* Today Status */}
        <div
          className={`bg-white p-4 rounded-xl shadow-md flex items-center gap-4`}
        >
          <FaClock
            className="text-green-500 w-8 h-8 rounded-full p-1"
            style={{ backgroundColor: statusColor }}
          />
          <div>
            <p className="text-sm text-gray-500">Today Status</p>
            <p className="text-xl font-semibold">{data.todayStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
