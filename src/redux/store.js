import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  contactsPersistConfig,
  middleware,
} from './persistConfig';

import contacts from './contacts/contacts-reducer';
import filter from './filter/filter-reducer';

const persistedReducer = persistReducer(contactsPersistConfig, contacts);
const reducer = {
  contacts: persistedReducer,
  filter,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
