import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, RiUserSearchLineSvg } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Name"
      />
      <RiUserSearchLineSvg />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;