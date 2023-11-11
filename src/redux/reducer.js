import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialStates } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';
import { reducersHendle } from './index';

const thunks = [addContactThunk, deleteContactThunk, getContactsThunk];

const defaultStatus = {
  fulfilled: 'fulfilled',
  pending: 'pending',
  rejected: 'rejected',
};

export const contactSlise = createSlice({
  name: 'contacts',
  initialState: initialStates.contacts,
  extraReducers: builder => {
    builder
      .addCase(
        deleteContactThunk.fulfilled,
        reducersHendle.hendleContactsFulfilledDelete
      )
      .addCase(
        addContactThunk.fulfilled,
        reducersHendle.hendleContactsFulfilledAdd
      )
      .addCase(
        getContactsThunk.fulfilled,
        reducersHendle.hendleContactsFulfilledGet
      )
      .addMatcher(
        isAnyOf(...reducersHendle.whatStatus(defaultStatus.pending, thunks)),
        reducersHendle.hendleContactPending
      )
      .addMatcher(
        isAnyOf(...reducersHendle.whatStatus(defaultStatus.fulfilled, thunks)),
        reducersHendle.hendleContactsFulfilled
      )
      .addMatcher(
        isAnyOf(...reducersHendle.whatStatus(defaultStatus.rejected, thunks)),
        reducersHendle.hendleContactsRejected
      );
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStates.filter,
  reducers: {
    filtered: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filtered } = filterSlice.actions;
