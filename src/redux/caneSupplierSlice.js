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

    let url = '';
    let method = '';
    const payload = { ...billing };

    if (billingId) {
      // Update existing billing: PUT request
      url = `${BASE_URL}supplier/${supplierId}/billing/${billingId}`;
      method = 'PUT';
    } else {
      // First-time submission: assign billingId equal to supplierId and POST request
      // payload.billingId = supplierId;
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

export const { updateField, resetForm } = caneSupplierSlice.actions;
export default caneSupplierSlice.reducer;
