import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css'

function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <ul>
        <li className={location.pathname === '/resume' ? 'active' : ''}>
          <Link to="/resume">Résumé</Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active': ''}>
            <Link to="/projects">Projects</Link>
        </li>
        <li className={location.pathname === '/education' ? 'active': ''}>
            <Link to="/education">Education</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
