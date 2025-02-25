import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAddress, updateField } from '../../redux/caneSupplierSlice';
import { toast } from 'react-toastify';

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get address data from Redux store
  const addressData = useSelector((state) => state.caneSupplier.address);

  // Dropdown options for Karnataka
  const zones = ['Bangalore Zone', 'Mysore Zone', 'Hubli Zone'];
  const circles = ['Bangalore Circle', 'Mysore Circle', 'Hubli Circle'];
  const villages = [
    { name: 'Koramangala', zone: 'Bangalore Zone', circle: 'Bangalore Circle' },
    { name: 'Jayanagar', zone: 'Bangalore Zone', circle: 'Bangalore Circle' },
    { name: 'Indiranagar', zone: 'Bangalore Zone', circle: 'Bangalore Circle' },
    { name: 'Mysore', zone: 'Mysore Zone', circle: 'Mysore Circle' },
    { name: 'Hunsur', zone: 'Mysore Zone', circle: 'Mysore Circle' },
    { name: 'Hubli', zone: 'Hubli Zone', circle: 'Hubli Circle' },
    { name: 'Dharwad', zone: 'Hubli Zone', circle: 'Hubli Circle' },
  ];
  const states = ['Karnataka'];
  const taluks = ['Bangalore South', 'Mysore', 'Hubli', 'Dharwad'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ section: 'address', field: name, value }));
  };

  // Update zone and circle based on selected village
  useEffect(() => {
    const selectedVillage = villages.find(
      (village) => village.name === addressData.village
    );
    if (selectedVillage) {
      dispatch(
        updateField({
          section: 'address',
          field: 'zone',
          value: selectedVillage.zone,
        })
      );
      dispatch(
        updateField({
          section: 'address',
          field: 'circle',
          value: selectedVillage.circle,
        })
      );
    }
  }, [addressData.village, dispatch]);

  // Validation
  const validateFormData = () => {
    const {
      zone,
      circle,
      addressLine1,
      addressLine2,
      addressLine3,
      village,
      state,
      pinCode,
      taluk,
      district,
    } = addressData;

    if (!zone) {
      toast.error('Please select a zone.');
      return false;
    }
    if (!circle) {
      toast.error('Please select a circle.');
      return false;
    }
    if (!addressLine1.trim() && !addressLine2.trim() && !addressLine3.trim()) {
      toast.error(
        'At least one address field (Address Line 1, 2, or 3) must be filled.'
      );
      return false;
    }
    if (!village) {
      toast.error('Please select a village.');
      return false;
    }
    if (!state) {
      toast.error('Please select a state.');
      return false;
    }
    if (!pinCode.match(/^\d{6}$/)) {
      toast.error('Enter a valid 6-digit pin code.');
      return false;
    }
    if (!district.trim()) {
      toast.error('District cannot be empty.');
      return false;
    }
    if (!taluk) {
      toast.error('Please select a taluk.');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) return; // Stop if validation fails

    try {
      await dispatch(saveAddress()).unwrap(); // Dispatch action to save data
      navigate('/cane-supplier/billing'); // Navigate only if saving is successful
    } catch (error) {
      console.log(`Failed to save address information: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between bg-white p-6 rounded-lg"
    >
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Address Details
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Village */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Village</label>
          <select
            name="village"
            value={addressData.village}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          >
            <option value="">Select Village</option>
            {villages.map((village, index) => (
              <option key={index} value={village.name}>
                {village.name}
              </option>
            ))}
          </select>
        </div>

        {/* Zone */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Zone</label>
          <select
            name="zone"
            value={addressData.zone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
          <label className="text-sm text-gray-700 mb-1">Circle</label>
          <select
            name="circle"
            value={addressData.circle}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
          <label className="text-sm text-gray-700 mb-1">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            placeholder="Enter Address Line 1"
            value={addressData.addressLine1}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
        </div>

        {/* Address Line 2 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            placeholder="Enter Address Line 2"
            value={addressData.addressLine2}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
        </div>

        {/* Address Line 3 */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Address Line 3</label>
          <input
            type="text"
            name="addressLine3"
            placeholder="Enter Address Line 3"
            value={addressData.addressLine3}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">State</label>
          <select
            name="state"
            value={addressData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
          <label className="text-sm text-gray-700 mb-1">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter Pin Code"
            value={addressData.pinCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
        </div>

        {/* Taluk */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Taluk</label>
          <select
            name="taluk"
            value={addressData.taluk}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
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
          <label className="text-sm text-gray-700 mb-1">District</label>
          <input
            type="text"
            name="district"
            placeholder="Enter District"
            value={addressData.district}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus :outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end items-center mt-6">
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
