import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateField } from '../../redux/caneSupplierSlice';
import { toast } from 'react-toastify';

const Billing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get billing data from Redux store
  const billingData = useSelector((state) => state.caneSupplier.billing);

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

  const handleAadhaarChange = (e) => {
    // Get the input value
    const value = e.target.value;

    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');

    // Format the digits into the Aadhaar format (XXXX XXXX XXXX)
    const formattedAadhaar = digits
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2');

    // Update the state with the formatted value
    dispatch(
      updateField({
        section: 'billing',
        field: 'aadhaar',
        value: formattedAadhaar.trim(),
      })
    );
  };

  const validateForm = () => {
    const { aadhaar, pan, primaryBank, primaryAccount, primaryIfsc } =
      billingData;

    // Regex patterns
    const aadhaarRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/; // Aadhaar: 12 digits with spaces
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN: 5 letters, 4 digits, 1 letter
    const accountRegex = /^\d{9,18}$/; // 9 to 18 digits for account number
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC: 4 letters, 0, 6 alphanumeric characters

    // Check if required fields are filled and valid
    if (!aadhaar.trim()) {
      toast.error('Please enter Aadhaar Number');
      return false;
    } else if (!aadhaarRegex.test(aadhaar)) {
      toast.error(
        'Please enter a valid Aadhaar Number (format: 1234 5678 9012)'
      );
      return false;
    }

    if (!pan.trim()) {
      toast.error('Please enter PAN Number');
      return false;
    } else if (!panRegex.test(pan)) {
      toast.error('Please enter a valid PAN Number (format: ABCDE1234F)');
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
      toast.error(
        'Please enter a valid Primary Account Number (9 to 18 digits)'
      );
      return false;
    }

    if (!primaryIfsc.trim()) {
      toast.error('Please enter Primary IFSC Code');
      return false;
    } else if (!ifscRegex.test(primaryIfsc)) {
      toast.error(
        'Please enter a valid Primary IFSC Code (format: ABCD0123456)'
      );
      return false;
    }

    // All validation passed
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) return;

    try {
      // Submit logic here (You can call a thunk if needed)

      // Navigate after submission
      navigate('/cane-supplier');
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
              onChange={handleAadhaarChange}
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
          className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Billing;
