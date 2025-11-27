import React from "react";

function ProfileCard() {
  return (
    <>
      <div className="bg-green-800 w-5/5 mx-auto ">
        <div className="bg-white border-1 border-gray-200 p-6">
          {/* personal details */}
          <h1 className="text-xl font-semibold mt-2 mb-2">
            Personal Information
          </h1>
          <div className="border-2 border-gray-200 p-4">
            <div className="flex md:flex-row sm:flex-col gap-15">
              <div className=" text-gray-600">
                <h2 className="">First Name</h2>
                <p className="text-black mt-1">Herry</p>
              </div>
              <div className="">
                <h2 className=" text-gray-600">Last Name</h2>
                <p className="text-black mt-1">Andericene</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Email</h2>
                <p className="text-black mt-1">Herry@gmail.com</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Phone</h2>
                <p className="text-black mt-1">+3762837232</p>
              </div>
            </div>
          </div>
          {/* employee details */}
          <h1 className="text-xl font-semibold mt-2">Employee Information</h1>
          <div className="border-2 border-gray-200 p-4 mt-3">
            <div className="flex md:flex-row sm:flex-col gap-15">
              <div className="">
                <h2 className=" text-gray-600">Job Title</h2>
                <p className="text-black mt-1">Devloper</p>
              </div>
              <div className="">
                <h2 className=" text-gray-600">Hiring Date</h2>
                <p className="text-black mt-1">04 April 2025</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Notice Period</h2>
                <p className="text-black mt-1">03 months</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Resigination</h2>
                <p className="text-black mt-1">8th May 2025</p>
              </div>
              <div>
                <h2 className=" text-gray-600">DOB</h2>
                <p className="text-black mt-1">8th May 2015</p>
              </div>
              <div>
                <h2 className=" text-gray-600">CNIC</h2>
                <p className="text-black mt-1">347634982642</p>
              </div>
            </div>
          </div>
          {/* Address */}
          <h1 className="text-xl font-semibold mt-2">Address Information</h1>
          <div className="border-2 border-gray-200 p-4 mt-3">
            <div className="flex md:flex-row sm:flex-col gap-15">
              <div className="">
                <h2 className=" text-gray-600">City</h2>
                <p className="text-black mt-1">San Fransisco</p>
              </div>
              <div className="">
                <h2 className=" text-gray-600">State</h2>
                <p className="text-black mt-1">CA</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Country</h2>
                <p className="text-black mt-1">USA</p>
              </div>
            </div>
          </div>
          {/* other info */}
          <h1 className="text-xl font-semibold mt-2">Other Information</h1>
          <div className="border-2 border-gray-200 p-4 mt-3">
            <div className="flex md:flex-row sm:flex-col gap-15">
              <div className="">
                <h2 className=" text-gray-600">First Name</h2>
                <p className="text-black mt-1">Herry</p>
              </div>
              <div className="">
                <h2 className=" text-gray-600">Last Name</h2>
                <p className="text-black mt-1">Andericene</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Email</h2>
                <p className="text-black mt-1">Herry@gmail.com</p>
              </div>
              <div>
                <h2 className=" text-gray-600">Phone</h2>
                <p className="text-black mt-1">+3762837232</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
