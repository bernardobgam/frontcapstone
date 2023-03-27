//create react component
import React from 'react';
import chefB from 'assets/chefB.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={chefB} alt="Chef Pedro" />
      <div className="flex">
        <div>
          <b>Navigation</b>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <b>Contact</b>
          <ul>
            <li>Little Street 22, Downtown Chicago, US</li>
            <li>+01 234 123 23</li>
            <li>reservations@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <b>Socials</b>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
