import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';

const Nav = () => (
  <nav className="navbar sticky top-0 z-50">
    <div>
      <Link to="/">
        Catalogue of Stocks
      </Link>
    </div>

    <div>
      <Link to="/">
        <span className="material-icons">
          search
        </span>
      </Link>
    </div>
  </nav>
);

export default Nav;
