import React from 'react';
import PropTypes from 'prop-types';
import '../styles/item.css';

const Item = ({ item }) => {
  return (
    <li className="item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Item;
