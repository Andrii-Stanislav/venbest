import { createAction } from '@reduxjs/toolkit';

const name = createAction('filter/changedName');
const lastName = createAction('filter/changedLastName');
const age = createAction('filter/changedAge');
const sex = createAction('filter/changedSex');

const changeFilter = {
  name,
  lastName,
  age,
  sex,
};

export default changeFilter;