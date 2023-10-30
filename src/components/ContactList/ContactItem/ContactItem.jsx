import React from 'react';
import PropTypes from 'prop-types';
import { StyledLi } from './ContactItem.styled';
import { StyledButton, StyledSpanName, StyledSpanNumber } from '../ContactList.styled';

function ContactItem({ id, name, number, deleteContact}) {
  return(
    <StyledLi>
      <StyledSpanName>{name}</StyledSpanName>
      <StyledSpanNumber>{number}</StyledSpanNumber>
      <StyledButton onClick={()=> deleteContact(id)}>Delete</StyledButton>
    </StyledLi>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  userName: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default ContactItem;
