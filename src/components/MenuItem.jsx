// src/components/MenuItem.jsx
import React from 'react';

// Styling for the reusable menu item card
const itemStyles = {
  card: {
    borderBottom: '1px dotted #ccc', 
    padding: '12px 0',
    margin: '10px 0',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '4px',
  },
  name: {
    fontFamily: 'Baskerville, Big Caslon, serif',
    fontSize: '1.3em',
    color: '#333',
    fontWeight: 'normal',
    letterSpacing: '0.5px',
    margin: 0,
  },
  price: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: '1.1em',
    color: '#5d4037', 
    fontWeight: '600',
    marginLeft: '15px',
  },
  description: {
    fontSize: '0.9em',
    color: '#666',
    marginTop: '4px',
    marginBottom: '2px',
    lineHeight: '1.4',
  },
  badge: {
    padding: '2px 6px',
    borderRadius: '2px',
    fontSize: '0.7em',
    fontWeight: 'bold',
    backgroundColor: '#e8f5e9', 
    color: '#4CAF50',
    border: '1px solid #4CAF50',
    marginLeft: '10px',
    textTransform: 'uppercase',
  },
};

const MenuItem = ({ name, price, description, isVegetarian }) => {
  return (
    <div style={itemStyles.card}>
      <div style={itemStyles.header}>
        <h3 style={itemStyles.name}>
          {name}
          {/* Conditional Rendering */}
          {isVegetarian && <span style={itemStyles.badge}>V</span>}
        </h3>
        <span style={itemStyles.price}>${price.toFixed(2)}</span>
      </div>
      <p style={itemStyles.description}>{description}</p>
      {/* Note: Removed the category prop as it's not strictly displayed in this simplified design */}
    </div>
  );
};

export default MenuItem;