// src/features/layoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BusinessObjectType {
  location: string;
  industry: string;
  businessName: string;
  companySize: string;
  companyVolume: string;
}
interface BusinessType {
  showLayout: boolean;
  newBusiness: BusinessObjectType;
}

const initialState: BusinessType = {
  showLayout: false,
  newBusiness: {
    location: '',
    industry: '',
    businessName: '',
    companySize: '',
    companyVolume: '',
  },
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setShowLayout: (state, action: PayloadAction<boolean>) => {
      state.showLayout = action.payload;
    },
    setNewBusiness: (state, action: PayloadAction<BusinessObjectType>) => {
      state.newBusiness = action.payload;
    },
  },
});

export const { setShowLayout, setNewBusiness } = businessSlice.actions;

export default businessSlice.reducer;
