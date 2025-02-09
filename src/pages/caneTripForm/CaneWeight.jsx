import React, { useState } from 'react';

const CaneWeight = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    caneType: '',
    loadWeight: '',
    tareWeight: '',
    bindingWeight: '',
    netWeight: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/cane-weight', {
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
      <h2 className="text-lg font-semibold mb-4">Cane Weight Details</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Cane Type */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Type</label>
          <input
            type="text"
            name="caneType"
            value={formData.caneType}
            onChange={handleChange}
            placeholder="Enter Cane Type"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Load Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Load Weight</label>
          <input
            type="number"
            name="loadWeight"
            value={formData.loadWeight}
            onChange={handleChange}
            placeholder="Enter Load Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Tare Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Tare Weight</label>
          <input
            type="number"
            name="tareWeight"
            value={formData.tareWeight}
            onChange={handleChange}
            placeholder="Enter Tare Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Binding Wt. */}
        <div className="flex flex-col">
          <label className="text-sm">Binding Wt.</label>
          <input
            type="number"
            name="bindingWeight"
            value={formData.bindingWeight}
            onChange={handleChange}
            placeholder="Enter Binding Wt."
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Net Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Net Weight</label>
          <input
            type="number"
            name="netWeight"
            value={formData.netWeight}
            onChange={handleChange}
            placeholder="Enter Net Weight"
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

export default CaneWeight;
