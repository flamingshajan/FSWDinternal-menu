// src/App.jsx
import React from 'react';
import MenuItem from './components/MenuItem';
import './index.css';

// 1. Menu Data
const mainCourseItems = [
  {
    id: 1,
    name: 'Gourmet Beef Burger',
    category: 'Main Course',
    price: 18.50,
    description: 'Juicy patty, melted cheddar, lettuce, tomato, and special sauce.',
    isVegetarian: false,
  },
  {
    id: 2,
    name: 'Spicy Veggie Curry',
    category: 'Main Course',
    price: 15.00,
    description: 'A vibrant mix of seasonal vegetables in a rich, spicy coconut milk sauce.',
    isVegetarian: true,
  },
  {
    id: 3,
    name: 'Grilled Salmon Fillet',
    category: 'Main Course',
    price: 22.99,
    description: 'Perfectly grilled salmon served with asparagus and lemon butter sauce.',
    isVegetarian: false,
  },
  {
    id: 4,
    name: 'Mushroom Risotto',
    category: 'Main Course',
    price: 17.75,
    description: 'Creamy Arborio rice with wild mushrooms, truffle oil, and parmesan.',
    isVegetarian: true,
  },
];

const desserts = [
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    category: 'Dessert',
    price: 9.50,
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    isVegetarian: true,
  },
  {
    id: 6,
    name: 'New York Cheesecake',
    category: 'Dessert',
    price: 8.75,
    description: 'Classic creamy cheesecake on a graham cracker crust.',
    isVegetarian: true,
  },
  {
    id: 7,
    name: 'Tiramisu',
    category: 'Dessert',
    price: 10.00,
    description: 'Coffee-soaked ladyfingers layered with mascarpone cream.',
    isVegetarian: true,
  },
];

const allItems = [...mainCourseItems, ...desserts];
const totalItems = allItems.length;

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="menu-container">
      {/* 1. Header Section */}
      <header className="menu-section">
        <h1 style={{ color: '#a04000', fontSize: '3em', marginBottom: '0.2em' }}>
          The Golden Spoon Bistro
        </h1>
        <p style={{ color: '#555', fontSize: '1.2em' }}>
          "Delicious Food, Made Fresh Daily"
        </p>
      </header>

      <hr />

      {/* 2. Menu Lists Section: Main Courses */}
      <section className="menu-section">
        <h2 className="category-heading">Main Courses</h2>
        <div>
          {/* List Rendering using map() - Important: Unique key prop used */}
          {mainCourseItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              description={item.description}
              isVegetarian={item.isVegetarian}
            />
          ))}
        </div>
      </section>

      <hr />

      {/* 3. Menu Lists Section: Desserts */}
      <section className="menu-section">
        <h2 className="category-heading">Desserts</h2>
        <div>
          {/* List Rendering using map() - Important: Unique key prop used */}
          {desserts.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              description={item.description}
              isVegetarian={item.isVegetarian}
            />
          ))}
        </div>
      </section>

      <hr />

      {/* 4. Restaurant Info Section */}
      <section className="menu-section" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#333' }}>Restaurant Information</h2>
        <p>
          Total Items on Menu: {totalItems}
        </p>
        <p>
          Hours: Open Daily: 11 AM - 10 PM
        </p>
        <p>
          Contact:** (555) 123-4567 | 100 Bistro Lane, Foodville, USA
        </p>
      </section>

      {/* 5. Footer Section */}
      <footer style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '0.9em', color: '#666' }}>
        <p>
          The Golden Spoon Bistro | Email: info@goldenspoon.com
        </p>
        <p>
          &copy; {currentYear} The Golden Spoon Bistro. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;