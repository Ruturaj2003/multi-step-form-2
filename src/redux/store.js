import { configureStore } from '@reduxjs/toolkit';
import caneTripReducer from './caneTripSlice';

export const store = configureStore({
  reducer: {
    caneTrip: caneTripReducer,
  },
});
