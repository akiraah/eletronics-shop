import React, { useContext } from 'react';
import { context } from '../Context';

const Cart = () => {
  const { items, total } = useContext(context);
  console.log(total);

  return (
    <div className="cart-column">
      <div className="cart-items">
        {items.map((item, index) => {
          return (
            <div key={index} className="cart-item">
              <h2>{item.name}</h2>
              <h5>{item.price}</h5>
            </div>
          );
        })}
      </div>
      {/* create another div class with flex, column  */}
      <p className="cart-total">Total: {total}</p>
      <button className="cart-order">Order</button>
    </div>
  );
};

export default Cart;
