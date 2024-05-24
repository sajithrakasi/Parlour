import React, { useEffect } from 'react';
import feather from 'feather-icons';

export default function Navbar() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <i data-feather="home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="/Service" className="navbar__link">
              <i data-feather="users"></i>
              <span>Services</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="/Products" className="navbar__link">
              <i data-feather="folder"></i>
              <span>Products</span>
            </a>
          </li>
        
          <li className="navbar__item">
            <a href="/Contact" className="navbar__link">
              <i data-feather="help-circle"></i>
              <span>Contact</span>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
