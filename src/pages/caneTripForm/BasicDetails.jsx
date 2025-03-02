import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const BasicDetailsForm = () => {
  const dispatch = useDispatch();

  // Get basic details data from Redux store
  const basicDetails = useSelector((state) => state.caneTrip.basicDetails);

  // Handle input change and update Redux store
  const handleChange = (e) => {
    dispatch(
      updateField({
        section: 'basicDetails',
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Basic Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Slip No */}
        <div className="flex flex-col">
          <label className="text-sm">Slip No</label>
          <input
            type="text"
            name="slipNo"
            value={basicDetails.slipNo}
            onChange={handleChange}
            placeholder="Enter Slip No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm">Date</label>
          <input
            type="date"
            name="date"
            value={basicDetails.date}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Token No */}
        <div className="flex flex-col">
          <label className="text-sm">Token No.</label>
          <input
            type="text"
            name="tokenNo"
            value={basicDetails.tokenNo}
            onChange={handleChange}
            placeholder="Enter Token No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Entry No */}
        <div className="flex flex-col">
          <label className="text-sm">Entry No</label>
          <input
            type="text"
            name="entryNo"
            value={basicDetails.entryNo}
            onChange={handleChange}
            placeholder="Enter Entry No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Order No */}
        <div className="flex flex-col">
          <label className="text-sm">Order No</label>
          <input
            type="text"
            name="orderNo"
            value={basicDetails.orderNo}
            onChange={handleChange}
            placeholder="Enter Order No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Cane Supplier */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Supplier</label>
          <input
            type="text"
            name="caneSupplier"
            value={basicDetails.caneSupplier}
            onChange={handleChange}
            placeholder="Enter Cane Supplier"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Last Token No */}
        <div className="flex flex-col">
          <label className="text-sm">Last Token No</label>
          <input
            type="text"
            name="lastTokenNo"
            value={basicDetails.lastTokenNo}
            onChange={handleChange}
            placeholder="Enter Last Token No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Save Button */}
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

export default BasicDetailsForm;
