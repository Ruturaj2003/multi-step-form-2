const Output = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Calculated Weights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Member Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Total Member Weight</label>
          <input
            type="text"
            readOnly
            value="Calculated Value"
            className="border rounded p-2 bg-gray-100"
          />
        </div>
        {/* Total Harvest Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Total Harvest Weight</label>
          <input
            type="text"
            readOnly
            value="Calculated Value"
            className="border rounded p-2 bg-gray-100"
          />
        </div>
        {/* Total Transport Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Total Transport Weight</label>
          <input
            type="text"
            readOnly
            value="Calculated Value"
            className="border rounded p-2 bg-gray-100"
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
    </div>
  );
};
export default Output;
