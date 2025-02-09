import React, { useState } from 'react';

const LocationAndVehicle = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    caneVillage: '',
    vehicleType: '',
    harvestor: '',
    vehicleNo: '',
    transporter: '',
    driverName: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/location-vehicle', {
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
      <h2 className="text-lg font-semibold mb-4">Location and Vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cane Village */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Village</label>
          <input
            type="text"
            name="caneVillage"
            value={formData.caneVillage}
            onChange={handleChange}
            placeholder="Enter Cane Village"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Vehicle Type */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle Type</label>
          <input
            type="text"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            placeholder="Enter Vehicle Type"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Harvestor */}
        <div className="flex flex-col">
          <label className="text-sm">Harvestor</label>
          <input
            type="text"
            name="harvestor"
            value={formData.harvestor}
            onChange={handleChange}
            placeholder="Enter Harvestor"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Vehicle No */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle No</label>
          <input
            type="text"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
            placeholder="Enter Vehicle No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Transporter */}
        <div className="flex flex-col">
          <label className="text-sm">Transporter</label>
          <input
            type="text"
            name="transporter"
            value={formData.transporter}
            onChange={handleChange}
            placeholder="Enter Transporter"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Driver Name */}
        <div className="flex flex-col">
          <label className="text-sm">Driver Name</label>
          <input
            type="text"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            placeholder="Enter Driver Name"
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
    </form>
  );
};

export default LocationAndVehicle;
