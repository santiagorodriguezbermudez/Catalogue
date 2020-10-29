import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';

const Nav = () => (
  <nav className="navbar sticky top-0 z-50">
    <Link to="/">
      Catalogue of Stocks
    </Link>
    <Link className="flex items-center" to="/">
      <span className="material-icons">
        search
      </span>
    </Link>
  </nav>
);

export default Nav;
