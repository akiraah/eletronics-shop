import React from 'react';
import products from '../resources/items.json';
import Item from '../component/Item';

const Home = () => {
  return (
    <section className="products">
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
    </section>
  );
};

export default Home;
