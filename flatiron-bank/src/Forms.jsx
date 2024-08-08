import React, { useState } from 'react';

const Form = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (itemName && quantity && category) {
      const newItem = { itemName, quantity, category };
      try {
        const response = await fetch('http://localhost:3003/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });
        if (response.ok) {
          setItemName('');
          setQuantity('');
          setCategory('');
          // Optionally fetch the updated list of items or notify parent component
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Bakery">Bakery</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;
