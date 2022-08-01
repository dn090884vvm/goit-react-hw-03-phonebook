import PropTypes from 'prop-types';

import React from 'react';
import { ListElement, Button } from './ContactList.styled';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <ListElement>
      <p>{`${name} : ${number}`}</p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </ListElement>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
