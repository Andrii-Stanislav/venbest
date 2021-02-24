import { createSelector } from '@reduxjs/toolkit';
import filterSelectors from '../filter/filter-selectors';

const getContacts = state => state.contacts.contactsItems;

const getFilteredContacts = createSelector(
  [
    getContacts,
    filterSelectors.getName,
    filterSelectors.getLastName,
    filterSelectors.getAge,
    filterSelectors.getMale,
    filterSelectors.getFemale,
  ],
  (contacts, filterName, filterLastName, filterAge, filterMale, filterFemale) =>
    contacts.filter(
      ({ name, lastname, age, sex }) =>
        // Фільтр по імені
        (Number(filterAge) === Number(age) || filterAge === '') &&
        // Фільтр по прізвищу
        name.toLowerCase().includes(filterName.toLowerCase()) &&
        // Фільтр по віку
        lastname.toLowerCase().includes(filterLastName.toLowerCase()) &&
        // Фільтр по статі
        ((sex === 'm' && filterMale) || (sex === 'f' && filterFemale)),
    ),
);

export { getContacts, getFilteredContacts };
