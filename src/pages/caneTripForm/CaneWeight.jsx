const CaneWeight = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Cane Weight Details</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Cane Type */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Type</label>
          <input
            type="text"
            placeholder="Enter Cane Type"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Load Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Load Weight</label>
          <input
            type="number"
            placeholder="Enter Load Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Tare Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Tare Weight</label>
          <input
            type="number"
            placeholder="Enter Tare Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Binding Wt. */}
        <div className="flex flex-col">
          <label className="text-sm">Binding Wt.</label>
          <input
            type="number"
            placeholder="Enter Binding Wt."
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Net Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Net Weight</label>
          <input
            type="number"
            placeholder="Enter Net Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
export default CaneWeight;
