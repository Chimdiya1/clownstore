import React from 'react';
import Cart from './Cart'
import '../nav.css';
const Nav = () => {
  return (
    <div className="Nav">
      <nav>
        <div
          className="hamburger"
          onClick={() => {
            const navLinks = document.querySelector('.nav-links');
            const links = document.querySelectorAll('.nav-links li');
            navLinks.classList.toggle('open');
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <li id="logo2">
          <a href="#">Clown Store</a>
        </li>
        <ul className="nav-links">
          <li id="logo">
            <a href="#">Clown Store</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <div className="cart">
                <Cart/>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
