import React, { useState } from 'react';
import './Menu.css';

const menuItems = [
  {
    section: 'Appetizers',
    items: [
      { name: 'Bruschetta', price: 5.99 },
      { name: 'Hummus with Pita', price: 9.99 },
      { name: 'Feta Cheese Plate', price: 11.99 },
      { name: 'Spanakopita', price: 10.99 },
    ],
  },
  {
    section: 'Salads',
    items: [
      { name: 'Greek Salad', price: 12.99 },
      { name: 'Tabouli Salad', price: 11.99 },
      { name: 'Mediterranean Salad', price: 13.99 },
    ],
  },
  {
    section: 'Entrees',
    items: [
      { name: 'Gyro Sandwich with Fries', price: 14.99 },
      { name: 'Falafel Plate with Rice and Salad', price: 15.99 },
      { name: 'Grilled Lamb Chops with Roasted Vegetables', price: 28.99 },
      { name: 'Grilled Salmon with Lemon Butter Sauce and Rice', price: 24.99 },
      { name: 'Chicken Kabob with Tzatziki Sauce and Rice', price: 18.99 },
    ],
  },
  {
    section: 'Desserts',
    items: [
      { name: 'Baklava', price: 7.0 },
      { name: 'Lemon Dessert', price: 5.0 },
      { name: 'Greek Yogurt with Honey and Walnuts', price: 6.0 },
    ],
  },
  {
    section: 'Beverages',
    items: [
      { name: 'Iced Tea', price: 3.0 },
      { name: 'Lemonade', price: 4.0 },
      { name: 'Soft Drinks', price: 2.5 },
      { name: 'Turkish Coffee', price: 4.5 },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>

      {menuItems.map((section) => (
        <div key={section.section}>
          <h3>{section.section}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
