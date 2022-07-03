import React from 'react';
import products from '../resources/items.json';
import Item from '../component/Item';

const Home = () => {
  return (
    <div className="items">
      {products.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Home;
