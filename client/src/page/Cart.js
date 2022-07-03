import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from '../Context';
import CartItem from '../component/CartItem';
import { APP_URL } from '../env';

const submitOrders = async (items) => {
  console.log('submitting orders');
  try {
    await axios.post(`${APP_URL}/orders/create`, { items });
  } catch (e) {
    console.log(`error: ${e.message}`);
  }
};

const Basket = () => {
  const { total } = useContext(context);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await axios.get(APP_URL + '/basket/list');
    setItems(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="cart-column">
      <div className="cart-items">
        {items.map((item, index) => (
          <CartItem name={item.name} price={item.price} key={index}></CartItem>
        ))}
      </div>
      {/* create another div class with flex, column  */}
      <div className="cart-sum">
        <p className="cart-total">Total: {total}</p>
        <button onClick={() => submitOrders(items)} className="cart-order">
          Order
        </button>
      </div>
    </div>
  );
};

export default Basket;
