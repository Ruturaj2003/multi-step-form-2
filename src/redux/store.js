import { configureStore } from '@reduxjs/toolkit';
import caneTripReducer from './caneTripSlice';
import commonReducer from './commonSlice';
import caneSupplierReducer from './caneSupplierSlice';
export const store = configureStore({
  reducer: {
    caneSupplier: caneSupplierReducer,
    caneTrip: caneTripReducer,
    common: commonReducer,
  },
});
