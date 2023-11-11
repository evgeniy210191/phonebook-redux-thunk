import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  LabelInputs,
} from 'components/StyleComponents/StyleFormsComponent.styled';
import { AddContact } from 'components/StyleComponents/StyleButton.styled';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/thunk';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    if (items.find(namePhonsbooks => namePhonsbooks.name === name.value)) {
      alert('Sory, your phonebook have same name yet');
      return;
    }
    const newContact = {
      name: name.value,
      number: number.value,
    };
    setName('');
    setNumber('');
    return dispatch(addContactThunk(newContact));
  };

  const hendleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <LabelInputs>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
          required
          placeholder="Enter your name"
        />
      </LabelInputs>
      <LabelInputs>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={hendleChange}
          required
          placeholder="Enter your phone number"
        />
      </LabelInputs>
      <AddContact type="submit">add contact</AddContact>
    </Form>
  );
}

export default ContactForm;
