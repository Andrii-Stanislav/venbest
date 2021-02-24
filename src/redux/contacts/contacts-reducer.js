import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './contacts-actions';

const contactsItems = createReducer([], {
  [getContactSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

const error = createReducer(null, {
  [getContactError]: error => error,
});

export default combineReducers({
  contactsItems,
  loading,
  error,
});
