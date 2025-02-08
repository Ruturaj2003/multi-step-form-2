import React from 'react';

const BasicDetailsForm = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Basic Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Slip No */}
        <div className="flex flex-col">
          <label className="text-sm">Slip No</label>
          <input
            type="text"
            placeholder="Enter Slip No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm">Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Token No */}
        <div className="flex flex-col">
          <label className="text-sm">Token No.</label>
          <input
            type="text"
            placeholder="Enter Token No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Entry No */}
        <div className="flex flex-col">
          <label className="text-sm">Entry No</label>
          <input
            type="text"
            placeholder="Enter Entry No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Order No */}
        <div className="flex flex-col">
          <label className="text-sm">Order No</label>
          <input
            type="text"
            placeholder="Enter Order No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Cane Supplier */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Supplier</label>
          <input
            type="text"
            placeholder="Enter Cane Supplier"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Last Token No */}
        <div className="flex flex-col">
          <label className="text-sm">Last Token No</label>
          <input
            type="text"
            placeholder="Enter Last Token No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end items-center p-4">
        <button
          type="submit"
          className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
