import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const CaneWeight = () => {
  const dispatch = useDispatch();

  // Get cane weight data from Redux store
  const caneWeight = useSelector((state) => state.caneTrip.caneWeight);

  // Handle input change and update Redux store
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateField({
        section: 'caneWeight',
        field: name,
        value: value,
      })
    );

    // Auto-calculate Net Weight if relevant fields are updated
    if (['loadWeight', 'tareWeight', 'bindingWeight'].includes(name)) {
      const loadWeight =
        parseFloat(name === 'loadWeight' ? value : caneWeight.loadWeight) || 0;
      const tareWeight =
        parseFloat(name === 'tareWeight' ? value : caneWeight.tareWeight) || 0;
      const bindingWeight =
        parseFloat(
          name === 'bindingWeight' ? value : caneWeight.bindingWeight
        ) || 0;

      const netWeight = loadWeight - tareWeight - bindingWeight;
      dispatch(
        updateField({
          section: 'caneWeight',
          field: 'netWeight',
          value: netWeight.toFixed(2),
        })
      );
    }
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Cane Weight Details</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Cane Type */}
        <div className="flex flex-col">
          <label className="text-sm">Cane Type</label>
          <input
            type="text"
            name="caneType"
            value={caneWeight.caneType}
            onChange={handleChange}
            placeholder="Enter Cane Type"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Load Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Load Weight</label>
          <input
            type="number"
            name="loadWeight"
            value={caneWeight.loadWeight}
            onChange={handleChange}
            placeholder="Enter Load Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Tare Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Tare Weight</label>
          <input
            type="number"
            name="tareWeight"
            value={caneWeight.tareWeight}
            onChange={handleChange}
            placeholder="Enter Tare Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Binding Weight */}
        <div className="flex flex-col">
          <label className="text-sm">Binding Wt.</label>
          <input
            type="number"
            name="bindingWeight"
            value={caneWeight.bindingWeight}
            onChange={handleChange}
            placeholder="Enter Binding Wt."
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Net Weight (Auto-calculated) */}
        <div className="flex flex-col">
          <label className="text-sm">Net Weight</label>
          <input
            type="number"
            name="netWeight"
            value={caneWeight.netWeight}
            readOnly
            placeholder="Auto-calculated"
            className="border rounded p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
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

export default CaneWeight;
