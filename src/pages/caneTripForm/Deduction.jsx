import React, { useState } from 'react';

const Deduction = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    tonnageDeduction: '',
    deductionPercentage: '',
    deductionSupplier: '',
    deductionHarvestor: '',
    deductionTransporter: '',
    deductionWeight: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/deduction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data!');
      }
    } catch (error) {
      alert('An error occurred while saving data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Deduction Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tonnage Deduction */}
        <div className="flex flex-col">
          <label className="text-sm">Tonnage Deduction</label>
          <input
            type="number"
            name="tonnageDeduction"
            value={formData.tonnageDeduction}
            onChange={handleChange}
            placeholder="Enter Tonnage Deduction"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* % Deduction Weight */}
        <div className="flex flex-col">
          <label className="text-sm">% Deduction Weight</label>
          <input
            type="number"
            name="deductionPercentage"
            value={formData.deductionPercentage}
            onChange={handleChange}
            placeholder="Enter % Deduction Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Cane Supplier */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Cane Supplier</label>
          <input
            type="text"
            name="deductionSupplier"
            value={formData.deductionSupplier}
            onChange={handleChange}
            placeholder="Enter Deduction Supplier"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Harvestor */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Harvestor</label>
          <input
            type="text"
            name="deductionHarvestor"
            value={formData.deductionHarvestor}
            onChange={handleChange}
            placeholder="Enter Deduction Harvestor"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Transporter */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Transporter</label>
          <input
            type="text"
            name="deductionTransporter"
            value={formData.deductionTransporter}
            onChange={handleChange}
            placeholder="Enter Deduction Transporter"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction Weight</label>
          <input
            type="number"
            name="deductionWeight"
            value={formData.deductionWeight}
            onChange={handleChange}
            placeholder="Enter Deduction Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
    </form>
  );
};

export default Deduction;
