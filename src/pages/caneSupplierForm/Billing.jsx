import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveBilling, updateField } from '../../redux/caneSupplierSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Billing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get billing data from Redux store
  const billingData = useSelector((state) => state.caneSupplier.billing);

  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Dummy billing history data
  const billingHistory = [
    {
      date: '2023-01-15',
      accountNo: '123456789',
      ifsc: 'ABCD0123456',
      amount: '5000',
    },
    {
      date: '2023-02-20',
      accountNo: '987654321',
      ifsc: 'EFGH0123456',
      amount: '7500',
    },
    {
      date: '2023-03-10',
      accountNo: '456789123',
      ifsc: 'IJKL0123456',
      amount: '3000',
    },
    {
      date: '2023-01-15',
      accountNo: '123456789',
      ifsc: 'ABCD0123456',
      amount: '5000',
    },
    {
      date: '2023-02-20',
      accountNo: '987654321',
      ifsc: 'EFGH0123456',
      amount: '7500',
    },
    {
      date: '2023-03-10',
      accountNo: '456789123',
      ifsc: 'IJKL0123456',
      amount: '3000',
    },
    {
      date: '2023-01-15',
      accountNo: '123456789',
      ifsc: 'ABCD0123456',
      amount: '5000',
    },
    {
      date: '2023-02-20',
      accountNo: '987654321',
      ifsc: 'EFGH0123456',
      amount: '7500',
    },
    {
      date: '2023-03-10',
      accountNo: '456789123',
      ifsc: 'IJKL0123456',
      amount: '3000',
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-white p-6 pt-1 rounded-lg">
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Billing Details
        </h2>

        {/* Table Container Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-green-500 h-[320px] md:grid-cols-3 gap-6"></div>
      </div>

      {/* Save Button Section */}
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={() => setShowHistory(true)}
          className="h-[40px] px-6 text-white bg-teal-600 border border-teal-600 rounded-md hover:bg-teal-500 hover:border-blue-500 transition-all"
        >
          View Billing History
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading} // Disable button while loading
          className={`h-[36px] px-5 text-white ${
            loading ? 'bg-gray-400' : 'bg-teal-700'
          } border-2 border-teal-700 rounded-md hover:bg-teal-600 transition`}
        >
          {loading ? 'Submitting...' : 'Save'}
        </button>
      </div>
      {showHistory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-opacity"
          onClick={() => setShowHistory(false)} // Close on outside click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative animate-fadeIn max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowHistory(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h3 className="text-xl font-semibold mb-4 text-center">
              Billing History
            </h3>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-teal-300 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-teal-100 text-teal-800">
                    <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Date
                    </th>
                    <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Account No
                    </th>
                    <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      IFSC Code
                    </th>
                    <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-teal-200 transition duration-200"
                    >
                      <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                        {item.date}
                      </td>
                      <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                        {item.accountNo}
                      </td>
                      <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                        {item.ifsc}
                      </td>
                      <td className="border-b border-teal-300 px-6 py-4 text-sm font-semibold text-teal-600">
                        ₹{item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
