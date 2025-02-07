import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  // Dropdown options (modify these as needed)
  const villages = ['Village A', 'Village B', 'Village C'];
  const states = ['State X', 'State Y', 'State Z'];
  const taluks = ['Taluk 1', 'Taluk 2', 'Taluk 3'];

  // Combined state for all address fields
  const [addressData, setAddressData] = useState({
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    village: '',
    state: '',
    pinCode: '',
    taluk: '',
    district: '',
  });

  const navigate = useNavigate();

  // Handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //  HTTP request

      // Navigate after successful submission (change the route as needed)
      navigate('/cane-supplier/billing');
    } catch (error) {
      console.error('Error submitting address:', error);
      // Optionally, handle error state here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[530px] flex flex-col justify-between bg-white p-6"
    >
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Address Details
        </h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Address Line 1 */}
          <div className="flex flex-col">
            <label
              htmlFor="addressLine1"
              className="text-sm text-gray-600 mb-1"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              placeholder="Enter Address Line 1"
              value={addressData.addressLine1}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* Address Line 2 */}
          <div className="flex flex-col">
            <label
              htmlFor="addressLine2"
              className="text-sm text-gray-600 mb-1"
            >
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              placeholder="Enter Address Line 2"
              value={addressData.addressLine2}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* Address Line 3 */}
          <div className="flex flex-col">
            <label
              htmlFor="addressLine3"
              className="text-sm text-gray-600 mb-1"
            >
              Address Line 3
            </label>
            <input
              type="text"
              id="addressLine3"
              name="addressLine3"
              placeholder="Enter Address Line 3"
              value={addressData.addressLine3}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* Village Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="village" className="text-sm text-gray-600 mb-1">
              Village
            </label>
            <select
              id="village"
              name="village"
              value={addressData.village}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
            <label htmlFor="state" className="text-sm text-gray-600 mb-1">
              State
            </label>
            <select
              id="state"
              name="state"
              value={addressData.state}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
            <label htmlFor="pinCode" className="text-sm text-gray-600 mb-1">
              Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              placeholder="Enter Pin Code"
              value={addressData.pinCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* Taluk Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="taluk" className="text-sm text-gray-600 mb-1">
              Taluk
            </label>
            <select
              id="taluk"
              name="taluk"
              value={addressData.taluk}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
            <label htmlFor="district" className="text-sm text-gray-600 mb-1">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="Enter District"
              value={addressData.district}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Save Button Section */}
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

export default Address;
