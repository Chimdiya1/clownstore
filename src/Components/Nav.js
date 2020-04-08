import React from 'react';
import Cart from './Cart';
import '../nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  const navStyle = {
    textDecoration:'none'
  }
  return (
    <div className="Nav">
      <nav>
        
        <Link style={navStyle} to="/">
          <li id="logo2">
            <a href="#">Clown Store</a>
          </li>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li id="logo">
              <a href="#">Clown Store</a>
            </li>
          </Link>
          <Link style={navStyle} to="/products">
            <li>
              <a href="#">Products</a>
            </li>
          </Link>
          <Link style={navStyle} to="cart">
            <li>
              <div className="cart">
                <Cart />
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
