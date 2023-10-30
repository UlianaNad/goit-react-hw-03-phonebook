import React from 'react'
import ContactItem from './ContactItem/ContactItem'
import { StyledUl } from './ContactList.styled'

function ContactList({contacts, deleteContact}) {
  return (
    <div>
      <h2>Contact list</h2>
      <StyledUl>
        {contacts.map(contact => <ContactItem deleteContact={deleteContact} {...contact} key={contact.id}/>)}
    </StyledUl>
    </div>
  )
}


export default ContactList
