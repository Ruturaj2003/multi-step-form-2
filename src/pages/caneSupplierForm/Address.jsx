import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateField } from '../../redux/caneSupplierSlice';
import { BASE_URL } from '../../App';

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get address data from Redux store
  const addressData = useSelector((state) => state.caneSupplier.address);
  const supplierId = useSelector((state) => state.common.supplierId);

  // Dropdown options
  const zones = ['Zone 1', 'Zone 2', 'Zone 3'];
  const circles = ['Circle A', 'Circle B', 'Circle C'];
  const villages = ['Village A', 'Village B', 'Village C'];
  const states = ['State X', 'State Y', 'State Z'];
  const taluks = ['Taluk 1', 'Taluk 2', 'Taluk 3'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ section: 'address', field: name, value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      ...addressData,
      supplierId,
    };
    try {
      // const response = await fetch(BASE_URL + 'address', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(requestBody),
      // });
      console.log(requestBody);

      // if (response.ok) { navigate('/cane-supplier/billing'); }
      navigate('/cane-supplier/billing');
    } catch (error) {
      console.error('Error submitting address:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[530px] flex flex-col justify-between bg-white p-6"
    >
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Address Details
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Zone */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Zone</label>
          <select
            name="zone"
            value={addressData.zone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Zone</option>
            {zones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        {/* Circle */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Circle</label>
          <select
            name="circle"
            value={addressData.circle}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Circle</option>
            {circles.map((circle, index) => (
              <option key={index} value={circle}>
                {circle}
              </option>
            ))}
          </select>
        </div>

        {/* Address Line 1 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            placeholder="Enter Address Line 1"
            value={addressData.addressLine1}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Address Line 2 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            placeholder="Enter Address Line 2"
            value={addressData.addressLine2}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Address Line 3 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Address Line 3</label>
          <input
            type="text"
            name="addressLine3"
            placeholder="Enter Address Line 3"
            value={addressData.addressLine3}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Village */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Village</label>
          <select
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

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">State</label>
          <select
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
          <label className="text-sm text-gray-600 mb-1">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter Pin Code"
            value={addressData.pinCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Taluk */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Taluk</label>
          <select
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
          <label className="text-sm text-gray-600 mb-1">District</label>
          <input
            type="text"
            name="district"
            placeholder="Enter District"
            value={addressData.district}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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

export default Address;
