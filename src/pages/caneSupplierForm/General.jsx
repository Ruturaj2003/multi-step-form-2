import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePersonalInfo, updateField } from '../../redux/caneSupplierSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const General = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const zones = ['Harvester', 'Farmer', 'Transporter'];

  // Get personal info from Redux store
  const personalInfo = useSelector((state) => state.caneSupplier.personalInfo);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ section: 'personalInfo', field: name, value }));
  };

  // Handle Aadhaar input change with formatting
  const handleAadhaarChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 12) value = value.slice(0, 12); // Limit to 12 digits

    // Format Aadhaar: XXXX XXXX XXXX
    const formattedAadhaar = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

    dispatch(
      updateField({
        section: 'personalInfo',
        field: 'aadhaar',
        value: formattedAadhaar,
      })
    );
  };

  // Validation function
  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      supplierType,
      middleName,
      aadhaar,
      pan,
    } = personalInfo;

    // Name Validation (No numbers or special characters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!firstName.trim() || !nameRegex.test(firstName)) {
      toast.error('First name must contain only letters.');
      return false;
    }
    if (!lastName.trim() || !nameRegex.test(lastName)) {
      toast.error('Last name must contain only letters.');
      return false;
    }
    if (!middleName.trim() || !nameRegex.test(lastName)) {
      toast.error('Middle name must contain only letters.');
      return false;
    }

    const aadhaarRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;

    // Check required fields
    if (!aadhaar.trim()) {
      toast.error('Please enter Aadhaar Number');
      return false;
    } else if (!aadhaarRegex.test(aadhaar)) {
      toast.error('Invalid Aadhaar Number (format: 1234 5678 9012)');
      return false;
    }

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!pan.trim()) {
      toast.error('Please enter PAN Number');
      return false;
    } else if (!panRegex.test(pan)) {
      toast.error('Invalid PAN Number (format: ABCDE1234F)');
      return false;
    }
    // Email Validation (Basic Format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error('Enter a valid email address.');
      return false;
    }

    // Phone Number Validation (Indian Format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Enter a valid 10-digit Indian phone number.');
      return false;
    }

    if (!supplierType) {
      toast.error('Please select a Supplier Type');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    try {
      await dispatch(savePersonalInfo()).unwrap(); // Dispatch action to save data

      navigate('/cane-supplier/address'); // Navigate only if saving is successful
    } catch (error) {
      console.log(`Failed to save personal information: ${error}`);
    }
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
          {/* Middle  Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm text-gray-600 mb-1">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Enter First Name"
              value={personalInfo.middleName}
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

          {/* Aadhaar Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              value={personalInfo.aadhaar}
              onChange={handleAadhaarChange}
              placeholder="Enter Aadhaar Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {/* PAN Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">PAN Number</label>
            <input
              type="text"
              name="pan"
              value={personalInfo.pan}
              onChange={handleChange}
              placeholder="Enter PAN Number"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              required
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
              placeholder="Enter 10-digit Phone Number"
              value={personalInfo.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Type of Supplier */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Supplier Type</label>
            <select
              name="supplierType"
              value={personalInfo.supplierType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Supplier Type</option>
              {zones.map((zone, index) => (
                <option key={index} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
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
