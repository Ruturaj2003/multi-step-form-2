import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateField } from '../../redux/caneSupplierSlice';

const Billing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get billing data from Redux store
  const billingData = useSelector((state) => state.caneSupplier.billing);
  // Get Supplier ID
  const supplierId = useSelector((state) => state.common.supplierId);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      ...billingData,
      supplierId,
    };
    try {
      // HTTP request logic here (if needed)
      console.log(requestBody);

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
          className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Billing;
