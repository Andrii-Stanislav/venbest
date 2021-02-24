import { createAction } from '@reduxjs/toolkit';

const getContactRequest = createAction('contacts/getRequest');
const getContactSuccess = createAction('contacts/getSuccess');
const getContactError = createAction('contacts/getError');

export { getContactRequest, getContactSuccess, getContactError };
