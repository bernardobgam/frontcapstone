//create react component
import React from 'react';
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
