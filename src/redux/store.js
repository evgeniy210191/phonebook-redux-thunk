import { configureStore } from '@reduxjs/toolkit';
import { contactSlise, filterSlice } from './reducer';

const reducer = {
  contacts: contactSlise.reducer,
  filter: filterSlice.reducer,
};

export const store = configureStore({ reducer });
