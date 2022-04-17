import React from 'react';

import Item from "../component/Item"

const Home = () => {
  return (
    <div className="items">
        <Item name="Laptop" price={500.00}/>
        <Item name="Computer"price={1000.00}/>
        <Item name="Camera"price={200.00}/>
    </div>
  );
};

export default Home;
