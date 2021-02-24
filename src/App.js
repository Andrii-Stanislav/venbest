import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from './redux/contacts/contacts-operations';
import { getFilteredContacts } from './redux/contacts/contacts-selectors';

import Filter from './Components/Filter';
import ContactsList from './Components/ContactsList';

import './App.css';

export default function App() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <Filter />
      <ContactsList contacts={contacts} />
    </div>
  );
}
