import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine multiple reducers; we currently have just the user reducer.
const rootReducer = combineReducers({ user: userReducer });

// Configure persist settings
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Create a persistor to persist the store
export const persistor = persistStore(store);
