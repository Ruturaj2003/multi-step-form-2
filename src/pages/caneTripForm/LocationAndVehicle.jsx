const LocationAndVehicle = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Location and Vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cane Village */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Village</label>
          <input
            type="text"
            placeholder="Enter Cane Village"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Vehicle Type */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle Type</label>
          <input
            type="text"
            placeholder="Enter Vehicle Type"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Multiple Supplier Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="multipleSupplier" />
          <label htmlFor="multipleSupplier" className="text-sm">
            Multiple Supplier
          </label>
        </div>
        {/* Harvestor */}
        <div className="flex flex-col">
          <label className="text-sm">Harvestor</label>
          <input
            type="text"
            placeholder="Enter Harvestor"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Vehicle No */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle No</label>
          <input
            type="text"
            placeholder="Enter Vehicle No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Transporter */}
        <div className="flex flex-col">
          <label className="text-sm">Transporter</label>
          <input
            type="text"
            placeholder="Enter Transporter"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {/* Driver Name */}
        <div className="flex flex-col">
          <label className="text-sm">Driver Name</label>
          <input
            type="text"
            placeholder="Enter Driver Name"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
export default LocationAndVehicle;
