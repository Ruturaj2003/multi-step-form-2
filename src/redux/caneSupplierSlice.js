import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BASE_URL } from '../App';
import { nanoid } from 'nanoid';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    aadhaar: '',
    pan: '',
    primaryBank: '',
    primaryAccount: '',
    primaryIfsc: '',
    secondaryBank: '',
    secondaryAccount: '',
    secondaryIfsc: '',
  },
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
      // Update mode: PUT /supplier/{supplierId}
      url = `${BASE_URL}supplier/${supplierId}`;
      method = 'PUT';
      payload.supplierId = supplierId; // optionally include it
    } else {
      // Create mode: POST /supplier
      payload.supplierId = nanoid();
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
      // Update existing address: PUT /supplier/{supplierId}/address/{addressId}
      url = `${BASE_URL}supplier/${supplierId}/address/${addressId}`;
      method = 'PUT';
    } else {
      // Create new address: POST /supplier/{supplierId}/address
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

    let url = '';
    let method = '';
    const payload = { ...billing };

    if (billingId) {
      // Update existing billing: PUT /supplier/{supplierId}/billing/{billingId}
      url = `${BASE_URL}supplier/${supplierId}/billing/${billingId}`;
      method = 'PUT';
    } else {
      // Create new billing: POST /supplier/{supplierId}/billing
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
      state[section][field] = value;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(savePersonalInfo.fulfilled, (state, action) => {
        // Expect the response to return an object with the supplier id.
        state.supplierId = action.payload.id || state.supplierId;
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        // Expect the response to return the address id.
        state.addressId = action.payload.id || state.addressId;
      })
      .addCase(saveBilling.fulfilled, (state, action) => {
        // Expect the response to return the billing id.
        state.billingId = action.payload.id || state.billingId;
      });
  },
});

export const { updateField, resetForm } = caneSupplierSlice.actions;
export default caneSupplierSlice.reducer;
