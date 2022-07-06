import React from 'react';

const CartItem = ({ name, price, imageUrl }) => (
  <div className="cart-item">
    <div className="cart-item-image">
      <img src={imageUrl} />
    </div>
    <div className="cart-item-detail">
    <h2>{name}</h2>
    <h5>{price}</h5>
</div>
   
  </div>
);

export default CartItem;
