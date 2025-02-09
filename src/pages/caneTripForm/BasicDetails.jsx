import React, { useState } from 'react';
import { BASE_URL } from '../../App';

const BasicDetailsForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    slipNo: '',
    date: '',
    tokenNo: '',
    entryNo: '',
    orderNo: '',
    caneSupplier: '',
    lastTokenNo: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BASE_URL + '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data saved successfully!');
      } else {
        console.log('Failed to save data!');
      }
    } catch (error) {
      console.log('An error occurred while saving data.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[530px] flex flex-col bg-white p-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Basic Details
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-grow">
        {/* Slip No */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Slip No</label>
          <input
            type="text"
            name="slipNo"
            value={formData.slipNo}
            onChange={handleChange}
            placeholder="Enter Slip No"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Token No */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Token No.</label>
          <input
            type="text"
            name="tokenNo"
            value={formData.tokenNo}
            onChange={handleChange}
            placeholder="Enter Token No"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Entry No */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Entry No</label>
          <input
            type="text"
            name="entryNo"
            value={formData.entryNo}
            onChange={handleChange}
            placeholder="Enter Entry No"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Order No */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Order No</label>
          <input
            type="text"
            name="orderNo"
            value={formData.orderNo}
            onChange={handleChange}
            placeholder="Enter Order No"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Cane Supplier */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Cane Supplier</label>
          <input
            type="text"
            name="caneSupplier"
            value={formData.caneSupplier}
            onChange={handleChange}
            placeholder="Enter Cane Supplier"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Last Token No */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Last Token No</label>
          <input
            type="text"
            name="lastTokenNo"
            value={formData.lastTokenNo}
            onChange={handleChange}
            placeholder="Enter Last Token No"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end items-center p-4">
        <button
          type="submit"
          className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default BasicDetailsForm;
