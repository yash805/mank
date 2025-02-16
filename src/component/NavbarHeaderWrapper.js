import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './NavbarHeaderWrapper.css';

const NavbarHeaderWrapper = () => {
  return (
    <div className="navbar-header-wrapper">
      <Navbar />
      <Header />
    </div>
  );
};

export default NavbarHeaderWrapper;
