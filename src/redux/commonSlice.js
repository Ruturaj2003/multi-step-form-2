import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const generateSupplierId = createAsyncThunk(
  'common/generateSupplierId',
  async (_, { getState }) => {
    const { supplierId } = getState().common;
    return supplierId || nanoid(); // It will make sure its generated only once
  }
);
const initialState = {
  supplierId: '',
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateSupplierId.fulfilled, (state, action) => {
      if (!state.supplierId) {
        state.supplierId = action.payload;
      }
    });
  },
});

export default commonSlice.reducer;
