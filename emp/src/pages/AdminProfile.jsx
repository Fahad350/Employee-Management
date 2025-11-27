import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PersonalDetails from "../components/PersonalDetails";
import JobInfo from "../components/JobInfo";
import Activities from "../components/Activity";
import Compansesion from "../components/Compansesion";
import Table from "../components/Table";
import ProfileCard from "../components/ProfileCard";
import ProfileAvator from "../components/ProfileAvator";

function AdminProfile() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      {/* <aside className="bg-gray-900 text-white w-full md:w-60 flex-shrink-0">
        <Sidebar />
      </aside> */}

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <Navbar />
        <div className="">
          <ProfileAvator />
          <ProfileCard />
        </div>
        {/* Main sections */}
        <div className="flex flex-col lg:flex-row flex-grow">
          {/* Left box personal details */}
          <div className="text-black w-full lg:w-1/3 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
            {/* <PersonalDetails /> */}
          </div>

          {/* Right box job info */}
          <div className="flex-grow p-4 border-gray-300 w-70">
            {/* <JobInfo />
            <Table /> */}

            {/* Activities and Compansesion */}
            <div className="flex flex-col md:flex-row gap-17 mt-4">
              {/* <Activities />
              <Compansesion /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
