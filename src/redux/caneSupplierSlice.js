import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BASE_URL } from '../App';
import { nanoid } from 'nanoid';

const initialState = {
  personalInfo: {
    firstName: '',
    middleName: '',
    lastName: '',
    aadhaar: '',
    pan: '',
    email: '',
    phone: '',
    supplierType: '',
  },
  address: {
    zone: '',
    circle: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    village: '',
    state: '',
    pinCode: '',
    taluk: '',
    district: '',
  },
  billing: {
    data: [
      {
        accountNo: '123456789',
        ifsc: 'ABCD0123456',
        bankName: 'Bank of India',
        isPrimary: true,
        isEditing: false,
      },
      {
        accountNo: '987654321',
        ifsc: 'EFGH0123456',
        bankName: 'State Bank of India',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '456789123',
        ifsc: 'IJKL0123456',
        bankName: 'HDFC Bank',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '321654987',
        ifsc: 'MNOP0123456',
        bankName: 'ICICI Bank',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '789123456',
        ifsc: 'QRST0123456',
        bankName: 'Axis Bank',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '654321789',
        ifsc: 'UVWX0123456',
        bankName: 'Punjab National Bank',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '159753486',
        ifsc: 'YZAB0123456',
        bankName: 'Bank of Baroda',
        isPrimary: false,
        isEditing: false,
      },
      {
        accountNo: '753159852',
        ifsc: 'CDEF0123456',
        bankName: 'Canara Bank',
        isPrimary: false,
        isEditing: false,
      },
    ],
    history: [
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
    ],
  },
  editingRow: null,
  editValues: {},
  supplierId: null, // Set after personal details are saved
  addressId: null, // Set after address is saved
  billingId: null, // Set after billing is saved
};

// Thunk to save personal details (create or update)
export const savePersonalInfo = createAsyncThunk(
  'caneSupplier/savePersonalInfo',
  async (_, { getState, rejectWithValue }) => {
    const { personalInfo, supplierId } = getState().caneSupplier;

    // Validate required personal fields
    for (const key in personalInfo) {
      if (!personalInfo[key].trim()) {
        return rejectWithValue(`Missing required personal field: ${key}`);
      }
    }

    let url = '';
    let method = '';
    const payload = { ...personalInfo };

    if (supplierId) {
      // Update mode: PUT request
      url = `${BASE_URL}supplier/${supplierId}`;
      method = 'PUT';
      payload.supplierId = supplierId;
      console.log(payload);

      // include
      // supplierId in payload if
      // needed
    } else {
      // Create mode: generate a new supplierId and POST request
      console.log(payload);
      const newSupplierId = nanoid();
      payload.supplierId = newSupplierId;
      url = `${BASE_URL}supplier`;
      method = 'POST';
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorMsg = await response.text();
        toast.error(`Personal details submission failed: ${errorMsg}`);
        return rejectWithValue(errorMsg);
      }
      const data = await response.json();
      toast.success('Personal details saved successfully!');
      return data;
    } catch (error) {
      toast.error(`Error saving personal details: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to save address details (create or update)
export const saveAddress = createAsyncThunk(
  'caneSupplier/saveAddress',
  async (_, { getState, rejectWithValue }) => {
    const { address, supplierId, addressId } = getState().caneSupplier;
    if (!supplierId) {
      return rejectWithValue('Please save personal details first.');
    }

    let url = '';
    let method = '';
    const payload = { ...address };

    if (addressId) {
      // Update existing address: PUT request
      url = `${BASE_URL}supplier/${supplierId}/address/${addressId}`;
      method = 'PUT';
    } else {
      // First-time submission: assign addressId equal to supplierId and POST request
      // payload.addressId = supplierId;
      url = `${BASE_URL}supplier/${supplierId}/address`;
      method = 'POST';
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorMsg = await response.text();
        toast.error(`Address submission failed: ${errorMsg}`);
        return rejectWithValue(errorMsg);
      }
      const data = await response.json();
      toast.success('Address saved successfully!');
      return data;
    } catch (error) {
      toast.error(`Error saving address: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to save billing details (create or update)
export const saveBilling = createAsyncThunk(
  'caneSupplier/saveBilling',
  async (_, { getState, rejectWithValue }) => {
    const { billing, supplierId, billingId } = getState().caneSupplier;
    if (!supplierId) {
      return rejectWithValue('Please save personal details first.');
    }
    const payload = { data: billing.data }; // Ensure correct payload structure

    let url = '';
    let method = '';
    console.log(payload);
    if (billingId) {
      // Update existing billing: PUT request
      url = `${BASE_URL}supplier/${supplierId}/billing/${billingId}`;
      method = 'PUT';
    } else {
      // First-time submission: POST request
      url = `${BASE_URL}supplier/${supplierId}/billing`;
      method = 'POST';
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        toast.error(`Billing submission failed: ${errorMsg}`);
        return rejectWithValue(errorMsg);
      }

      const data = await response.json();
      toast.success('Billing details saved successfully!');
      return data;
    } catch (error) {
      toast.error(`Error saving billing details: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

const caneSupplierSlice = createSlice({
  name: 'caneSupplier',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { section, field, value } = action.payload;
      if (section === 'billing') {
        if (field === 'data' || field === 'history') {
          state.billing[field] = value;
        } else {
          state.billing[field] = value;
        }
      } else {
        state[section][field] = value;
      }
    },
    setPrimary: (state, action) => {
      const index = action.payload;
      state.billing.data = state.billing.data.map((item, i) => ({
        ...item,
        isPrimary: i === index,
      }));
    },
    editRow: (state, action) => {
      const { index, item } = action.payload;
      state.billing.data = state.billing.data.map((row, i) => {
        if (i === index) {
          return { ...row, isEditing: true };
        }
        return { ...row, isEditing: false };
      });
      state.editingRow = index;
      state.editValues = item;
    },
    cancelEdit: (state) => {
      state.billing.data = state.billing.data.map((row) => ({
        ...row,
        isEditing: false,
      }));
      state.editingRow = null;
      state.editValues = {};
    },
    saveEdit: (state, action) => {
      const { index, editValues } = action.payload;

      if (index !== null && editValues) {
        state.billing.data = state.billing.data.map((item, i) =>
          i === index ? { ...item, ...editValues } : item
        );
      }
    },
    deleteRow: (state, action) => {
      const index = action.payload;
      state.billing.data = state.billing.data.filter((_, i) => i !== index);
    },
    createRow: (state, action) => {
      const newRow = action.payload;
      state.billing.data = [...state.billing.data, newRow];
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(savePersonalInfo.fulfilled, (state, action) => {
        // Set supplierId from response, or retain the one already set
        state.supplierId =
          action.payload.id || action.payload.supplierId || state.supplierId;
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        // Set addressId from response, or retain the one already set
        state.addressId =
          action.payload.id || action.payload.addressId || state.addressId;
      })
      .addCase(saveBilling.fulfilled, (state, action) => {
        // Set billingId from response, or retain the one already set
        state.billingId =
          action.payload.id || action.payload.billingId || state.billingId;
      });
  },
});

export const {
  updateField,
  setPrimary,
  editRow,
  cancelEdit,
  saveEdit,
  deleteRow,
  createRow,
  resetForm,
} = caneSupplierSlice.actions;
export default caneSupplierSlice.reducer;
