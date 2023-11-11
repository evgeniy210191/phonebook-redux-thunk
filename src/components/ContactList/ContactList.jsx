import { useEffect } from 'react';
import { Contacts } from './ContactList.styled';
import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactThunk, getContactsThunk } from 'redux/thunk';

function ContactForm() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContact(items, filter);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  function deleteContact(theId) {
    dispatch(deleteContactThunk(theId));
  }

  function filterContact(contactsList, filter) {
    return contactsList.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  }

  return (
    <Contacts>
      {isLoading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        );
      })}
    </Contacts>
  );
}

export default ContactForm;
