import React, { useContext } from 'react';
import { context } from '../Context';

const Item = ({ name, price, imageUrl }) => {
  const { addItemToCart } = useContext(context);
  const item = { name, price, imageUrl };
  return (
    <div onClick={() => addItemToCart(item)} id="item">
      <h2>{name}</h2>
      <h4>{price}</h4>
      <img src={imageUrl} alt={name}/>
    </div>
  );
};

export default Item;
