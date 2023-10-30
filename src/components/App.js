import React from 'react';

import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import { nanoid } from 'nanoid';
import SearchContact from './Search/SearchContact';
import { StyledWrapper } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if(contacts?.length) {
      this.setState({contacts})
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddNewContact = newData => {
    const { contacts } = this.state;
    const contactToFind = contacts.find(
      contact => contact.name === newData.name
    );
    if (contactToFind) {
      alert(`${newData.name} is already in your list!`);
    } else {
      const newContact = { id: nanoid(), ...newData };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSearchContact = name => {
    this.setState({ filter: name });
  };

  getFilterData = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <StyledWrapper>
        <h1>Contact book</h1>
        <AddContactForm addContact={this.handleAddNewContact} />
        <SearchContact setFilter={this.handleSearchContact} />
        <ContactList
          deleteContact={this.handleDeleteContact}
          contacts={this.getFilterData()}
        />
      </StyledWrapper>
    );
  }
}

export default App;
