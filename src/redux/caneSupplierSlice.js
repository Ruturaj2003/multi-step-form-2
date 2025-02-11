import { createSlice } from '@reduxjs/toolkit';

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
});

export const { updateField, resetForm } = caneSupplierSlice.actions;
export default caneSupplierSlice.reducer;
