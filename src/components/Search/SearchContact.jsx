import { StyledInput } from 'components/AddContact/AddContact.styled'
import React from 'react'

const SearchContact = ({setFilter}) => {
  return (
    <div>
      <h2>Search contact</h2>
      <StyledInput onChange={(e) => {setFilter(e.target.value)}} placeholder='Search contact' type="search"/>
    </div>
  )
}


export default SearchContact