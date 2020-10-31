import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';
import Search from './Search';

const Nav = () => {
  const [visibility, setVisibility] = React.useState(false);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setVisibility(true);
    }
  };

  const renderNav = () => (
    <nav className="navbar sticky top-0 z-50">
      <Link to="/">
        Catalogue of Stocks
      </Link>
      <span
        onClick={() => setVisibility(true)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        className="material-icons"
      >
        search
      </span>
    </nav>
  );

  const onSearched = () => {
    setVisibility(false);
  };

  return (
    <div>
      {visibility ? <Search toogleVisibility={onSearched} /> : renderNav()}
    </div>
  );
};

export default Nav;
