import axios from 'axios';
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://venbest-test.herokuapp.com';

export const fetchContacts = () => async dispatch => {
  dispatch(getContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(getContactSuccess(data));
    })
    .catch(error => dispatch(getContactError(error)));
};
