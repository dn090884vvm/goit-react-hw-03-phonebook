import PropTypes from 'prop-types';
import React from 'react';
import { Label, Paragraph } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Paragraph>Find contacts by name</Paragraph>
      <input
        type="text"
        name="search"
        id=""
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
