import axios from 'axios';
export function fetchContacts() {
  return axios
    .get('https://654cf25c77200d6ba859c1b8.mockapi.io/contacts')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export function addContact(data) {
  return axios
    .post('https://654cf25c77200d6ba859c1b8.mockapi.io/contacts', data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
export function deleteContact(id) {
  return axios
    .delete(`https://654cf25c77200d6ba859c1b8.mockapi.io/contacts/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
