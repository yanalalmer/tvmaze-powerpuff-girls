import { configureStore } from '@reduxjs/toolkit';
import { episodeApi } from '../api/episodeApi'
import uiSlice from './slices/uiSlice';

export default configureStore({
    reducer: {
        [episodeApi.reducerPath]: episodeApi.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(episodeApi.middleware)
})