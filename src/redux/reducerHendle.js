export function whatStatus(status, thunks) {
  return thunks.map(item => item[status]);
}

export function hendleContactsFulfilledDelete(state, action) {
  state.isLoading = true;
  state.items = state.items.filter(({ id }) => {
    return id !== action.payload.id;
  });
}

export function hendleContactsFulfilledAdd(state, { payload }) {
  state.items = [payload, ...state.items];
}

export function hendleContactsFulfilledGet(state, { payload }) {
  state.items = payload;
}

export function hendleContactPending(state) {
  state.isLoading = true;
}

export function hendleContactsFulfilled(state) {
  state.isLoading = false;
  state.error = '';
}

export function hendleContactsRejected(state, action) {
  state.isLoading = false;
  state.error = action?.payload;
}
