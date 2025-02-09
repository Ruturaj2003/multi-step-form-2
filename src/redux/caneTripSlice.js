import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicDetails: {
    slipNo: '',
    date: '',
    tokenNo: '',
    entryNo: '',
    orderNo: '',
    caneSupplier: '',
    lastTokenNo: '',
  },
  caneAndPlotInfo: {
    plotNo: '',
    surveyNo: '',
    plantArea: '',
    cropType: '',
    caneVariety: '',
    waterSrc: '',
    distance: '',
  },
  locationAndVehicle: {
    caneVillage: '',
    vehicleType: '',
    harvestor: '',
    vehicleNo: '',
    transporter: '',
    driverName: '',
  },
  caneWeight: {
    caneType: '',
    loadWeight: '',
    tareWeight: '',
    bindingWeight: '',
    netWeight: '',
  },
  deduction: {
    tonnageDeduction: '',
    deductionWeight: '',
    deductionSupplier: '',
    deductionHarvestor: '',
    deductionTransporter: '',
  },
  tripAndRemarks: {
    tareWtDateTime: '',
    trips: '',
    remarks: '',
    securityNo: '',
  },
  output: {
    totalMemberWeight: '',
    totalHarvestWeight: '',
    totalTransportWeight: '',
  },
};

const caneTripSlice = createSlice({
  name: 'caneTrip',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { section, field, value } = action.payload;
      state[section][field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = caneTripSlice.actions;
export default caneTripSlice.reducer;
