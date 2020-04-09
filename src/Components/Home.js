import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <div className="home">
        <p>Your one stop shop for your clowning essentials...</p>
        <Link to='/products'>
          <button>Shop now</button>
        </Link>
      </div>
    );
}
 
export default Home;