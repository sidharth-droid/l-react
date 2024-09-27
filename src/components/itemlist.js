import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import '../styles/itemlist.css';

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default ItemList;
