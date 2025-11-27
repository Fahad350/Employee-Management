import React from "react";

function Compansesion() {
  return (
    <>
      <div className="text-sm">
        <h1 className="text-xl font-semibold">Comapnsestion</h1>
        <div>
          <div className="mt-8">
            <h3 className="font-semibold">802.00 USD per month</h3>
            <h5 className="text-slate-600 mt-2">
              Effective date on 29-Jun-2025
            </h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5.5" />
        {/* 2nd amount */}
        <div>
          <div className="mt-7">
            <h3 className="font-semibold">1023.00 USD per month</h3>
            <h5 className="text-slate-600 mt-2">
              Effective date on 14-Aug-2025
            </h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5.5" />
        {/* 3rd amount */}
        <div>
          <div className="mt-7">
            <h3 className="font-semibold">1283.00 USD per month</h3>
            <h5 className="text-slate-600 mt-2">
              Effective date on 04-Sep-2025
            </h5>
          </div>
        </div>
        <hr className=" bg-gray-400 text-gray-400 mt-5.5" />
      </div>
    </>
  );
}

export default Compansesion;
