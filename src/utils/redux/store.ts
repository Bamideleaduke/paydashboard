// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import businessSlice from './slices/businessSlice';


const store = configureStore({
  reducer: {
    business: businessSlice,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
