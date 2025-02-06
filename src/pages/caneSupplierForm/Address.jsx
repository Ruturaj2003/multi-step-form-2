import { useState } from 'react';

const Address = () => {
  // Dropdown options (modify these as needed)
  const villages = ['Village A', 'Village B', 'Village C'];
  const states = ['State X', 'State Y', 'State Z'];
  const taluks = ['Taluk 1', 'Taluk 2', 'Taluk 3'];

  // State for dropdown selections
  const [selectedVillage, setSelectedVillage] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedTaluk, setSelectedTaluk] = useState('');

  return (
    <div className="h-[530px] flex flex-col justify-between bg-white p-6 rounded-md shadow-md">
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Address Details
        </h2>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-3 gap-4">
          {/* Address Line 1 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Address Line 1</label>
            <input
              type="text"
              placeholder="Enter Address Line 1"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Address Line 2 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Address Line 2</label>
            <input
              type="text"
              placeholder="Enter Address Line 2"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Address Line 3 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Address Line 3</label>
            <input
              type="text"
              placeholder="Enter Address Line 3"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Village Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Village</label>
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
            >
              <option value="">Select Village</option>
              {villages.map((village, index) => (
                <option key={index} value={village}>
                  {village}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">State</label>
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Pin Code */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Pin Code</label>
            <input
              type="text"
              placeholder="Enter Pin Code"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Taluk Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Taluk</label>
            <select
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedTaluk}
              onChange={(e) => setSelectedTaluk(e.target.value)}
            >
              <option value="">Select Taluk</option>
              {taluks.map((taluk, index) => (
                <option key={index} value={taluk}>
                  {taluk}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">District</label>
            <input
              type="text"
              placeholder="Enter District"
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

export default Address;
