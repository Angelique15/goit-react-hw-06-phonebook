import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebookSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, phonebookReducer);

const store = configureStore({
    reducer: {
        phonebook: persistedReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };


