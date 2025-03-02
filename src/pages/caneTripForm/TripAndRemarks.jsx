import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const TripAndRemarks = () => {
  const dispatch = useDispatch();

  // Get data from Redux store
  const tripAndRemarks = useSelector((state) => state.caneTrip.tripAndRemarks);

  // Handle input change and update Redux store
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateField({
        section: 'tripAndRemarks',
        field: name,
        value: value,
      })
    );
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Trip and Remarks</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Tare Wt. Dt/Time */}
        <div className="flex flex-col">
          <label className="text-sm">Tare Wt. Dt/Time</label>
          <input
            type="datetime-local"
            name="tareWeightDateTime"
            value={tripAndRemarks.tareWeightDateTime}
            onChange={handleChange}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Trips */}
        <div className="flex flex-col">
          <label className="text-sm">Trips</label>
          <input
            type="number"
            name="trips"
            value={tripAndRemarks.trips}
            onChange={handleChange}
            placeholder="Enter Trips"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Remarks */}
        <div className="flex flex-col">
          <label className="text-sm">Remarks</label>
          <input
            type="text"
            name="remarks"
            value={tripAndRemarks.remarks}
            onChange={handleChange}
            placeholder="Enter Remarks"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Security No */}
        <div className="flex flex-col">
          <label className="text-sm">Security No</label>
          <input
            type="text"
            name="securityNo"
            value={tripAndRemarks.securityNo}
            onChange={handleChange}
            placeholder="Enter Security No"
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
    </form>
  );
};

export default TripAndRemarks;
