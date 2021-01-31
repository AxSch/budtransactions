import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import transactionsReducer from '../reducers/transactions/transactionsSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, transactionsReducer)

export const store = configureStore({
    reducer: {
        transactions: persistedReducer
    },
    middleware: getDefaultMiddleware()
})

export const persistor = persistStore(store);
