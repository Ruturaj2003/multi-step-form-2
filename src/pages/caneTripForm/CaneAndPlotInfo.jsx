import React, { useState } from 'react';

const CaneAndPlotInfo = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    plotNo: '',
    surveyNo: '',
    plantArea: '',
    cropType: '',
    caneVariety: '',
    waterSrc: '',
    distance: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/cane-plot-info', {
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
      <h2 className="text-lg font-semibold mb-4">Cane and Plot Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Plot No */}
        <div className="flex flex-col">
          <label className="text-sm">Plot No.</label>
          <input
            type="text"
            name="plotNo"
            value={formData.plotNo}
            onChange={handleChange}
            placeholder="Enter Plot No."
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Survey No */}
        <div className="flex flex-col">
          <label className="text-sm">Survey No.</label>
          <input
            type="text"
            name="surveyNo"
            value={formData.surveyNo}
            onChange={handleChange}
            placeholder="Enter Survey No."
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Plant Area */}
        <div className="flex flex-col">
          <label className="text-sm">Plant Area</label>
          <input
            type="text"
            name="plantArea"
            value={formData.plantArea}
            onChange={handleChange}
            placeholder="Enter Plant Area"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Crop Type */}
        <div className="flex flex-col">
          <label className="text-sm">Crop Type</label>
          <input
            type="text"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            placeholder="Enter Crop Type"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Cane Variety */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Variety</label>
          <input
            type="text"
            name="caneVariety"
            value={formData.caneVariety}
            onChange={handleChange}
            placeholder="Enter Cane Variety"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Water Src */}
        <div className="flex flex-col">
          <label className="text-sm">Water Src</label>
          <input
            type="text"
            name="waterSrc"
            value={formData.waterSrc}
            onChange={handleChange}
            placeholder="Enter Water Src"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Distance */}
        <div className="flex flex-col">
          <label className="text-sm">Distance</label>
          <input
            type="text"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Enter Distance"
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

export default CaneAndPlotInfo;
