import React from "react";

function JobInfo() {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold"> Job Information</h1>
          <button className="bg-slate-100 text-red-700 cursor-pointer px-2">
            + add info
          </button>
        </div>
      </div>
    </>
  );
}

export default JobInfo;
