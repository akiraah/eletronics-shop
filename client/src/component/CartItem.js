import React from 'react';

const CartItem = ({ name, price }) => (
  <div className="cart-item">
    <h2>{name}</h2>
    <h5>{price}</h5>
  </div>
);

export default CartItem;
