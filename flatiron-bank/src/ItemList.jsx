import React, { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:3003/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.itemName} - {item.quantity} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
