import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const navigate = useNavigate();
  // State management for form fields
  const [formData, setFormData] = useState({
    aadhaar: '',
    pan: '',
    primaryBank: '',
    primaryAccount: '',
    primaryIfsc: '',
    secondaryBank: '',
    secondaryAccount: '',
    secondaryIfsc: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //  HTTP request

      // Navigate after successful submission (change the route as needed)
      navigate('/cane-supplier');
    } catch (error) {
      console.error('Error submitting address:', error);
      // Optionally, handle error state here
    }
  };

  return (
    <form
      className="h-[530px] flex flex-col justify-between bg-white p-6"
      onSubmit={handleSubmit}
    >
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Billing Details
        </h2>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aadhaar Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="Enter Aadhaar Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* PAN Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">PAN Number</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="Enter PAN Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Empty div for spacing on large screens */}
          <div className="hidden md:block"></div>

          {/* Primary Bank Details */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              Primary Bank Name
            </label>
            <input
              type="text"
              name="primaryBank"
              value={formData.primaryBank}
              onChange={handleChange}
              placeholder="Enter Bank Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              A/C Number (Primary Bank)
            </label>
            <input
              type="text"
              name="primaryAccount"
              value={formData.primaryAccount}
              onChange={handleChange}
              placeholder="Enter Account Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              IFSC Code (Primary Bank)
            </label>
            <input
              type="text"
              name="primaryIfsc"
              value={formData.primaryIfsc}
              onChange={handleChange}
              placeholder="Enter IFSC Code"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Secondary Bank Details */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              Secondary Bank Name
            </label>
            <input
              type="text"
              name="secondaryBank"
              value={formData.secondaryBank}
              onChange={handleChange}
              placeholder="Enter Bank Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              A/C Number (Secondary Bank)
            </label>
            <input
              type="text"
              name="secondaryAccount"
              value={formData.secondaryAccount}
              onChange={handleChange}
              placeholder="Enter Account Number"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">
              IFSC Code (Secondary Bank)
            </label>
            <input
              type="text"
              name="secondaryIfsc"
              value={formData.secondaryIfsc}
              onChange={handleChange}
              placeholder="Enter IFSC Code"
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

export default Billing;
