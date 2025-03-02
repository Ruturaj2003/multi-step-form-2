import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../../redux/caneTripSlice';

const Deduction = () => {
  const dispatch = useDispatch();

  // Get deduction data from Redux store
  const deduction = useSelector((state) => state.caneTrip.deduction);

  // Handle input change and update Redux store
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateField({
        section: 'deduction',
        field: name,
        value: value,
      })
    );

    // Auto-calculate Deduction Weight if relevant fields are updated
    if (['tonnageDeduction', 'deductionPercentage'].includes(name)) {
      const tonnageDeduction =
        parseFloat(
          name === 'tonnageDeduction' ? value : deduction.tonnageDeduction
        ) || 0;
      const deductionPercentage =
        parseFloat(
          name === 'deductionPercentage' ? value : deduction.deductionPercentage
        ) || 0;

      const deductionWeight = (tonnageDeduction * deductionPercentage) / 100;
      dispatch(
        updateField({
          section: 'deduction',
          field: 'deductionWeight',
          value: deductionWeight.toFixed(2),
        })
      );
    }
  };

  return (
    <form className="p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Deduction Section</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tonnage Deduction */}
        <div className="flex flex-col">
          <label className="text-sm">Tonnage Deduction</label>
          <input
            type="number"
            name="tonnageDeduction"
            value={deduction.tonnageDeduction}
            onChange={handleChange}
            placeholder="Enter Tonnage Deduction"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* % Deduction Weight */}
        <div className="flex flex-col">
          <label className="text-sm">% Deduction Weight</label>
          <input
            type="number"
            name="deductionPercentage"
            value={deduction.deductionPercentage}
            onChange={handleChange}
            placeholder="Enter % Deduction Weight"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Cane Supplier */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Cane Supplier</label>
          <input
            type="text"
            name="deductionSupplier"
            value={deduction.deductionSupplier}
            onChange={handleChange}
            placeholder="Enter Deduction Supplier"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Harvestor */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Harvestor</label>
          <input
            type="text"
            name="deductionHarvestor"
            value={deduction.deductionHarvestor}
            onChange={handleChange}
            placeholder="Enter Deduction Harvestor"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction - Transporter */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction - Transporter</label>
          <input
            type="text"
            name="deductionTransporter"
            value={deduction.deductionTransporter}
            onChange={handleChange}
            placeholder="Enter Deduction Transporter"
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Deduction Weight (Auto-calculated) */}
        <div className="flex flex-col">
          <label className="text-sm">Deduction Weight</label>
          <input
            type="number"
            name="deductionWeight"
            value={deduction.deductionWeight}
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

export default Deduction;
