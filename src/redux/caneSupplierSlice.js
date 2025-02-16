import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../App';

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
};

// Async thunk to submit form data with validation
export const submitCaneSupplier = createAsyncThunk(
  'caneSupplier/submitCaneSupplier',
  async (_, { getState, rejectWithValue }) => {
    const state = getState().caneSupplier;

    // Flatten the state into a single object
    const flattened = Object.entries(state).reduce((acc, [section, fields]) => {
      return { ...acc, ...fields };
    }, {});

    // Fields to exclude from validation
    const excludeFields = ['addressLine1', 'addressLine2', 'addressLine3'];

    // Validate required fields (excluding specific ones)
    for (const key in flattened) {
      if (!excludeFields.includes(key) && !flattened[key].trim()) {
        toast.error(`Please fill all required fields! Missing: ${key}`);
        return rejectWithValue(`Missing required field: ${key}`);
      }
    }

    try {
      const response = await fetch(BASE_URL + 'supplier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flattened),
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        toast.error(`Submission failed: ${errorMsg}`);
        return rejectWithValue(errorMsg);
      }

      const data = await response.json();
      toast.success('Form submitted successfully!');
      return data;
    } catch (error) {
      toast.error(`Error: ${error.message}`);
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
    builder.addCase(submitCaneSupplier.fulfilled, (state, action) => {
      return initialState;
    });
  },
});

export const { updateField, resetForm } = caneSupplierSlice.actions;
export default caneSupplierSlice.reducer;
