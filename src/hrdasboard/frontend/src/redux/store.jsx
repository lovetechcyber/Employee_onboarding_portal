import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertSlice'
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        alerts: alertSlice,
        auth: authSlice
    }
})

export default store