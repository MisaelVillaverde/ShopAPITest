import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.p.rapidapi.com/upcoming-items/en',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'fortnite-api.p.rapidapi.com',
          'x-rapidapi-key':
            'cd9683e071mshd3b372a345cca64p1d7578jsnec3db5703d89',
          useQueryString: true,
        },
      }
    );

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <div className='items-container'>
        {items.map((item) => (
          <div className='item-container' key={item.id}>
            <h1 key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
            </h1>
            <img src={item.images.icon} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
