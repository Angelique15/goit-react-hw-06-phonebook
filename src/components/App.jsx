// ./components/App.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Container, H1, H2 } from '../styles/AppStyles';
import { setContacts, addContact, deleteContact, setFilter } from '../redux/phonebookSlice';
import { saveContacts, loadContacts } from './localStorage';

const App = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts(loadContacts()));
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact && contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (contact) => {
    if (contacts.some((c) => c.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    saveContacts([...contacts, contact]);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    saveContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactFilter filter={filter} handleFilterChange={handleFilterChange} />
      <H2>Add new contact</H2>
      <ContactForm contacts={filteredContacts} addContact={handleAddContact} />
      <H2>Contacts</H2>
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </Container>
  );
};

export default App; // Asegúrate de exportar el componente App por defecto











