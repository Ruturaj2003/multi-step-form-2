import { useNavigate } from 'react-router-dom';
import {
  createRow,
  setPrimary,
  deleteRow,
  saveEdit,
  saveBilling,
} from '../../redux/caneSupplierSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Billing = () => {
  const navigate = useNavigate();
  const { data, history: billingHistory } = useSelector(
    (state) => state.caneSupplier.billing
  );
  const dispatch = useDispatch();
  // Local state for billing data

  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    accountNo: '',
    ifsc: '',
    bankName: '',
  });
  const [editingRow, setEditingRow] = useState(null);
  const [editValues, setEditValues] = useState({});

  // Set a row as primary; only one row can be primary at a time.
  const handlePrimaryChange = (index) => {
    dispatch(setPrimary(index));
    toast.success('Primary updated!');
  };

  // Create a new entry by adding it to local state
  const handleCreate = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    dispatch(createRow(newEntry));
    setNewEntry({ accountNo: '', ifsc: '', bankName: '' });
    setShowCreateModal(false);
    toast.success('Created New Entry');
  };

  // Delete an entry by removing it from the local state
  const handleDelete = (index) => {
    dispatch(deleteRow(index));
    toast.success('Entry deleted!');
  };

  // Begin editing a row
  const handleEdit = (index, item) => {
    setEditingRow(index);
    setEditValues({ ...item });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingRow(null);
    setEditValues({});
  };

  // Save the edited row by updating the local state
  const handleSaveEdit = (index) => {
    console.log(editValues);

    dispatch(saveEdit({ index, editValues }));
    toast.success('Entry updated!');
    setEditingRow(null);
    setEditValues({});
  };

  // Save all billing data (simulate saving via a Redux action)
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await dispatch(saveBilling()).unwrap(); // Wait for completion

      toast.success('Billing data saved!');
      navigate('/cane-supplier/');
    } catch (error) {
      console.error(`Failed to save Billing information: ${error}`);
      toast.error('Failed to save billing data!: ' + error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-between bg-white p-6 pt-1 rounded-lg">
      {/* Billing Table */}
      <div className="w-full flex-1">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Billing Details
          </h2>
          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="h-[40px] px-6 text-white bg-teal-600 border border-teal-600 rounded-md hover:bg-teal-500 transition-all"
          >
            Create
          </button>
        </div>

        <div className="overflow-x-auto h-[320px] rounded-lg shadow-lg">
          <table className="min-w-full border border-teal-300 rounded-lg">
            <thead>
              <tr className="bg-teal-100 text-teal-800">
                <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                  Primary
                </th>
                <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                  Account No
                </th>
                <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                  IFSC Code
                </th>
                <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                  Bank Name
                </th>
                <th className="border-b border-teal-300 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-teal-200 transition duration-200"
                >
                  <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={item.isPrimary}
                      onChange={() => handlePrimaryChange(index)}
                    />
                  </td>
                  <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                    {editingRow === index ? (
                      <input
                        type="text"
                        value={editValues.accountNo || ''}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            accountNo: e.target.value,
                          })
                        }
                        className="border border-gray-300 rounded-md p-1"
                      />
                    ) : (
                      item.accountNo
                    )}
                  </td>
                  <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                    {editingRow === index ? (
                      <input
                        type="text"
                        value={editValues.ifsc || ''}
                        onChange={(e) =>
                          setEditValues({ ...editValues, ifsc: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-1"
                      />
                    ) : (
                      item.ifsc
                    )}
                  </td>
                  <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                    {editingRow === index ? (
                      <input
                        type="text"
                        value={editValues.bankName || ''}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            bankName: e.target.value,
                          })
                        }
                        className="border border-gray-300 rounded-md p-1"
                      />
                    ) : (
                      item.bankName
                    )}
                  </td>
                  <td className="border-b border-teal-300 px-6 py-4 text-sm text-gray-700">
                    {editingRow === index ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveEdit(index)}
                          className="text-teal-600 text-xl"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-teal-600 text-xl"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(index, item)}
                          className="text-teal-600 text-xl"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-teal-600 text-xl"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={() => setShowHistory(true)}
          className="h-[40px] px-6 text-white bg-teal-600 border border-teal-600 rounded-md hover:bg-teal-500 transition-all"
        >
          View Billing History
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={`h-[36px] px-5 text-white ${
            loading ? 'bg-gray-400' : 'bg-teal-700'
          } border-2 border-teal-700 rounded-md hover:bg-teal-600 transition`}
        >
          {loading ? 'Submitting...' : 'Save'}
        </button>
      </div>

      {/* Create Entry Modal */}
      {showCreateModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-opacity"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Create New Entry
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Account No"
                value={newEntry.accountNo}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, accountNo: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="IFSC Code"
                value={newEntry.ifsc}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, ifsc: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Bank Name"
                value={newEntry.bankName}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, bankName: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={handleCreate}
                className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing History Modal */}
      {showHistory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-opacity"
          onClick={() => setShowHistory(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative animate-fadeIn max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowHistory(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Billing History
            </h3>
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
