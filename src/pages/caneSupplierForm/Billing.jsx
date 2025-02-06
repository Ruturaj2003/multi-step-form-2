import { useState } from 'react';

const Billing = () => {
  return (
    <div className="h-[530px] flex flex-col justify-between bg-white p-6">
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Billing Details
        </h2>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aadhaar Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Aadhaar Number</label>
            <input
              type="text"
              placeholder="Enter Aadhaar Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* PAN Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">PAN Number</label>
            <input
              type="text"
              placeholder="Enter PAN Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Empty div for spacing on large screens */}
          <div className="hidden md:block"></div>

          {/* Bank 1 Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              Primary Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter Bank 1 Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* A/C Number Bank 1 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              A/C Number (Primary Bank)
            </label>
            <input
              type="text"
              placeholder="Enter Account Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* IFSC Code Bank 1 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              IFSC Code (Primary Bank)
            </label>
            <input
              type="text"
              placeholder="Enter IFSC Code"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Bank 2 Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              Secondary Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter Bank 2 Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* A/C Number Bank 2 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              A/C Number (Secondary Bank)
            </label>
            <input
              type="text"
              placeholder="Enter Account Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* IFSC Code Bank 2 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              IFSC Code (Secondary Bank)
            </label>
            <input
              type="text"
              placeholder="Enter IFSC Code"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Save Button Section */}
      <div className="flex justify-end items-center p-4">
        <button className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default Billing;
