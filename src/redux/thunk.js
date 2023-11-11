import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './fetchContacts';

export const getContactsThunk = createAsyncThunk('contacts/fetchContacts', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
