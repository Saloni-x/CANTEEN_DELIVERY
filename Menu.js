import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")   // Your backend route
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h4>{item.name} - ₹{item.price}</h4>
              <p>{item.description}</p>
              <img src={item.image} alt={item.name} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;