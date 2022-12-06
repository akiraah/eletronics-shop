import React, { useContext } from 'react';
import { context } from '../Context';

const Item = ({ name, price, imageUrl }) => {
  const { addItemToCart } = useContext(context);
  const item = { name, price, imageUrl };
  return (
    <div className="product-card" onClick={() => addItemToCart(item)}>
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-info">
        <div className="title">{name}</div>
        <div className="price">£{price}</div>
      </div>
    </div>
  );
};

export default Item;
