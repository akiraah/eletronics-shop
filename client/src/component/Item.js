import React, { useContext } from 'react';
import { context } from '../Context';

const Item = ({ name, price }) => {
  const { addItemsToCart } = useContext(context);
  return (
    <div onClick={() => addItemsToCart({ name, price })} id="item">
      <h2>{name}</h2>
      <h4>{price}</h4>
    </div>
  );
};

export default Item;
