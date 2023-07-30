import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactList,
  ContactCard,
  ContactName,
  ContactNumber,
  RiDeleteBinLineSvg,
  ContactUl,
} from './ContactCard.styled';

const Contact = ({ array, onDeleteItem }) => {
  return (
    <ContactUl>
      {array.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactList key={id}>
            <ContactCard href="#" onClick={e => e.preventDefault()}>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              <RiDeleteBinLineSvg onClick={() => onDeleteItem(id)} />
            </ContactCard>
          </ContactList>
        );
      })}
    </ContactUl>
  );
};

Contact.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteItem: PropTypes.func,
};

export default Contact;