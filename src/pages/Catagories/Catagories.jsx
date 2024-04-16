import React, { useEffect, useState } from 'react';
import './Catagories.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router';

const Categories = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()

  const fetchItems = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories'); // API endpoint
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
    <div className="grid-container">
      {items.map((item, index) => (
        <div onClick={()=>{navigate(`/products/${item}`)}} key={index} className="grid-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;
