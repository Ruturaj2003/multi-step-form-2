import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitCaneSupplier, updateField } from '../../redux/caneSupplierSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Billing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get billing data from Redux store
  const billingData = useSelector((state) => state.caneSupplier.billing);

  const [loading, setLoading] = useState(false);

  // Handle input change and update Redux store
  const handleChange = (e) => {
    dispatch(
      updateField({
        section: 'billing',
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  // Handle Aadhaar input change with formatting
  const handleAadhaarChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 12) value = value.slice(0, 12); // Limit to 12 digits

    // Format Aadhaar: XXXX XXXX XXXX
    const formattedAadhaar = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

    dispatch(
      updateField({
        section: 'billing',
        field: 'aadhaar',
        value: formattedAadhaar,
      })
    );
  };

  // Validation function
  const validateForm = () => {
    const {
      aadhaar,
      pan,
      primaryBank,
      primaryAccount,
      primaryIfsc,
      secondaryBank,
      secondaryAccount,
      secondaryIfsc,
    } = billingData;

    // Validation regex
    const aadhaarRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const accountRegex = /^\d{9,18}$/;
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    // Check required fields
    if (!aadhaar.trim()) {
      toast.error('Please enter Aadhaar Number');
      return false;
    } else if (!aadhaarRegex.test(aadhaar)) {
      toast.error('Invalid Aadhaar Number (format: 1234 5678 9012)');
      return false;
    }

    if (!pan.trim()) {
      toast.error('Please enter PAN Number');
      return false;
    } else if (!panRegex.test(pan)) {
      toast.error('Invalid PAN Number (format: ABCDE1234F)');
      return false;
    }

    if (!primaryBank.trim()) {
      toast.error('Please enter Primary Bank Name');
      return false;
    }

    if (!primaryAccount.trim()) {
      toast.error('Please enter Primary Account Number');
      return false;
    } else if (!accountRegex.test(primaryAccount)) {
      toast.error('Invalid Primary Account Number (9 to 18 digits)');
      return false;
    }

    if (!primaryIfsc.trim()) {
      toast.error('Please enter Primary IFSC Code');
      return false;
    } else if (!ifscRegex.test(primaryIfsc)) {
      toast.error('Invalid Primary IFSC Code (format: ABCD0123456)');
      return false;
    }

    // Optional fields validation
    if (secondaryBank.trim() && !ifscRegex.test(secondaryIfsc)) {
      toast.error('Invalid Secondary IFSC Code (format: ABCD0123456)');
      return false;
    }

    if (secondaryAccount.trim() && !accountRegex.test(secondaryAccount)) {
      toast.error('Invalid Secondary Account Number (9 to 18 digits)');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dont Do anything unless passes
    if (!validateForm()) return;
    try {
      dispatch(submitCaneSupplier())
        .unwrap()
        .then(() => {
          toast.success('Billing details submitted successfully!');
          navigate('/cane-supplier');
        })
        .catch((error) => {
          toast.error(`Submission error: ${error}`);
        });
    } catch (error) {
      console.error('Error submitting billing details:', error);
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
              value={billingData.aadhaar}
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
              value={billingData.pan}
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
              value={billingData.primaryBank}
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
              value={billingData.primaryAccount}
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
              value={billingData.primaryIfsc}
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
              value={billingData.secondaryBank}
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
              value={billingData.secondaryAccount}
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
              value={billingData.secondaryIfsc}
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
          disabled={loading} // Disable button while loading
          className={`h-[36px] px-5 text-white ${
            loading ? 'bg-gray-400' : 'bg-teal-700'
          } border-2 border-teal-700 rounded-md hover:bg-teal-600 transition`}
        >
          {loading ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default Billing;
