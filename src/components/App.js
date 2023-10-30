import React from 'react';

import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import { nanoid } from 'nanoid';
import SearchContact from './Search/SearchContact';
import { StyledWrapper } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      {id:"1", name:"Suvi", number:"040 44 00 440"},
      {id:"2", name:"Tulli", number:"040 55 00 550"},
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  handleAddNewContact = newData => {
    const {contacts} = this.state;
    const contactToFind = contacts.find(contact => contact.name === newData.name)
    if(contactToFind){
      alert(`${newData.name} is already in your list!`)
    } else {
      const newContact = {id:nanoid(), ...newData}
      this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
    }
  }

  handleDeleteContact = id =>{
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  handleSearchContact = (name) => {
    this.setState(({filter: name}))
  }

  getFilterData = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }


  render() {
    return <StyledWrapper>
            <h1>Contact book</h1>
            <AddContactForm addContact ={this.handleAddNewContact}/>
            <SearchContact setFilter = {this.handleSearchContact}/>
            <ContactList deleteContact = {this.handleDeleteContact} contacts={this.getFilterData()}/>
          </StyledWrapper>;
  }
}

export default App;
