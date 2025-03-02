import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const CaneAndPlotInfo = () => {
  const dispatch = useDispatch();

  // Get cane and plot info data from Redux store
  const caneAndPlotInfo = useSelector(
    (state) => state.caneTrip.caneAndPlotInfo
  );

  // Handle input change and update Redux store
  const handleChange = (e) => {
    dispatch(
      updateField({
        section: 'caneAndPlotInfo',
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Cane and Plot Information</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Plot No */}
        <div className="flex flex-col">
          <label className="text-sm">Plot No.</label>
          <input
            type="text"
            name="plotNo"
            value={caneAndPlotInfo.plotNo}
            onChange={handleChange}
            placeholder="Enter Plot No."
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Survey No */}
        <div className="flex flex-col">
          <label className="text-sm">Survey No.</label>
          <input
            type="text"
            name="surveyNo"
            value={caneAndPlotInfo.surveyNo}
            onChange={handleChange}
            placeholder="Enter Survey No."
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Plant Area */}
        <div className="flex flex-col">
          <label className="text-sm">Plant Area</label>
          <input
            type="text"
            name="plantArea"
            value={caneAndPlotInfo.plantArea}
            onChange={handleChange}
            placeholder="Enter Plant Area"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Crop Type */}
        <div className="flex flex-col">
          <label className="text-sm">Crop Type</label>
          <input
            type="text"
            name="cropType"
            value={caneAndPlotInfo.cropType}
            onChange={handleChange}
            placeholder="Enter Crop Type"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Cane Variety */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Variety</label>
          <input
            type="text"
            name="caneVariety"
            value={caneAndPlotInfo.caneVariety}
            onChange={handleChange}
            placeholder="Enter Cane Variety"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Water Src */}
        <div className="flex flex-col">
          <label className="text-sm">Water Src</label>
          <input
            type="text"
            name="waterSrc"
            value={caneAndPlotInfo.waterSrc}
            onChange={handleChange}
            placeholder="Enter Water Src"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Distance */}
        <div className="flex flex-col">
          <label className="text-sm">Distance</label>
          <input
            type="text"
            name="distance"
            value={caneAndPlotInfo.distance}
            onChange={handleChange}
            placeholder="Enter Distance"
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

export default CaneAndPlotInfo;
