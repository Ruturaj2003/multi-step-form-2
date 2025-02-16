import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generateSupplierId } from '../../redux/commonSlice';
import { updateField } from '../../redux/caneSupplierSlice';

const General = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get personal info and supplier ID from Redux store
  const personalInfo = useSelector((state) => state.caneSupplier.personalInfo);
  const supplierId = useSelector((state) => state.common.supplierId);

  useEffect(() => {
    dispatch(generateSupplierId());
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ section: 'personalInfo', field: name, value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/cane-supplier/address');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-h-[530px] flex flex-col justify-between bg-white pt-6"
    >
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              value={personalInfo.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              value={personalInfo.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={personalInfo.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              value={personalInfo.phone}
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
          className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 cursor-pointer transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default General;
