import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="title">The Gen Z Science</h1>
        <div className="buttons">
          <button className="btn coral-btn"><a href="https://www.youtube.com/@genzscience1" target="_blank" rel="noopener noreferrer">Watch my videos</a></button>
          {/* <button className="btn coral-btn">Even pictures</button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
