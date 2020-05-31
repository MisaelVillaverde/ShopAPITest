import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.p.rapidapi.com/item-details/${match.params.id}/en`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'fortnite-api.p.rapidapi.com',
          'x-rapidapi-key':
            'cd9683e071mshd3b372a345cca64p1d7578jsnec3db5703d89',
        },
        useQueryString: true,
      }
    );
    const { item } = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt='' />
    </div>
  );
}

export default ItemDetail;
