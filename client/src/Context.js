import React, { createContext, useState } from 'react';
import axios from 'axios';
import { APP_URL } from './env';
const context = createContext();
const { Provider } = context;

const Context = ({ children }) => {
  const [total, setTotal] = useState(0);
  const addItemToCart = async (item) => {
    console.log(`item added to cart: ${JSON.stringify(item)}`);
    await axios.post(`${APP_URL}/basket/create`, item);
    calculateTotal(item.price);
  };

  const calculateTotal = (price) => {
    const newPrice = price + total;
    setTotal(newPrice);
  };

  return <Provider value={{ addItemToCart, total }}>{children}</Provider>;
};

export { Context, context };
