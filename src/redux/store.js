import { configureStore } from '@reduxjs/toolkit';
import caneTripReducer from './caneTripSlice';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    caneTrip: caneTripReducer,
    common: commonReducer,
  },
});
