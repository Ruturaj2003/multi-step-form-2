import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const LocationAndVehicle = () => {
  const dispatch = useDispatch();

  // Get location and vehicle data from Redux store
  const locationAndVehicle = useSelector(
    (state) => state.caneTrip.locationAndVehicle
  );

  // Handle input change and update Redux store
  const handleChange = (e) => {
    dispatch(
      updateField({
        section: 'locationAndVehicle',
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Location and Vehicle</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cane Village */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Village</label>
          <input
            type="text"
            name="caneVillage"
            value={locationAndVehicle.caneVillage}
            onChange={handleChange}
            placeholder="Enter Cane Village"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Vehicle Type */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle Type</label>
          <input
            type="text"
            name="vehicleType"
            value={locationAndVehicle.vehicleType}
            onChange={handleChange}
            placeholder="Enter Vehicle Type"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Harvester */}
        <div className="flex flex-col">
          <label className="text-sm">Harvester</label>
          <input
            type="text"
            name="harvestor"
            value={locationAndVehicle.harvestor}
            onChange={handleChange}
            placeholder="Enter Harvester"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Vehicle No */}
        <div className="flex flex-col">
          <label className="text-sm">Vehicle No</label>
          <input
            type="text"
            name="vehicleNo"
            value={locationAndVehicle.vehicleNo}
            onChange={handleChange}
            placeholder="Enter Vehicle No"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Transporter */}
        <div className="flex flex-col">
          <label className="text-sm">Transporter</label>
          <input
            type="text"
            name="transporter"
            value={locationAndVehicle.transporter}
            onChange={handleChange}
            placeholder="Enter Transporter"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Driver Name */}
        <div className="flex flex-col">
          <label className="text-sm">Driver Name</label>
          <input
            type="text"
            name="driverName"
            value={locationAndVehicle.driverName}
            onChange={handleChange}
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
    </form>
  );
};

export default LocationAndVehicle;
