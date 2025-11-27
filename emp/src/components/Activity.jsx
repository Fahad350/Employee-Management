import React from "react";
import act1 from "../../public/act1.jpg";
import act2 from "../../public/act2.jpg";
import act3 from "../../public/act3.jpg";

function Activity() {
  return (
    <>
      <div className="text-sm">
        <h1 className="text-xl font-semibold">Activity</h1>
        <div className="flex gap-2.5 mt-7">
          <img className="size-13 rounded-full" src={act1} alt="act1" />
          <div>
            <h3>
              <span className="font-semibold">Jhon Miller</span> last login
              <span className="font-semibold"> 03-Oct-2025</span>
            </h3>
            <h5 className="text-slate-600 mt-2">10:45 AM</h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5" />
        {/* 2nd img */}
        <div className="flex gap-2.5 mt-7">
          <img className="size-13 rounded-full" src={act2} alt="act2" />
          <div>
            <h3>
              <span className="font-semibold">Marwa Alex</span> last login
              <span className="font-semibold"> 13-Jan-2025</span>
            </h3>
            <h5 className="text-slate-600 mt-2">7:45 PM</h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5" />
        {/* 3rd img */}
        <div className="flex gap-2.5 mt-7">
          <img className="size-13 rounded-full" src={act3} alt="act3" />
          <div>
            <h3>
              <span className="font-semibold">Tom Peter</span> last login
              <span className="font-semibold"> 09-May-2025</span>
            </h3>
            <h5 className="text-slate-600 mt-2">12:09 AM</h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5" />
      </div>
    </>
  );
}

export default Activity;
