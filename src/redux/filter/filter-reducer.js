import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import changeFilter from './filter-actions';

const filterName = createReducer('', {
  [changeFilter.name]: (_, { payload }) => payload,
});

const filterLastName = createReducer('', {
  [changeFilter.lastName]: (_, { payload }) => payload,
});

const filterAge = createReducer('', {
  [changeFilter.age]: (_, { payload }) => payload,
});

const filterSex = createReducer(
  { male: true, female: true },
  {
    [changeFilter.sex]: (state, { payload }) => ({ ...state, ...payload }),
  },
);

export default combineReducers({
  filterName,
  filterLastName,
  filterAge,
  filterSex,
});
