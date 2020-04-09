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
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li id="logo">
              Clown Store
            </li>
          </Link>
          <Link style={navStyle} to="/products">
            <li id="products">Products</li>
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
