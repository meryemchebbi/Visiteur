import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return  (
    <header>
    <NavLink className="logo" to="/home" activeClassName="active">ARTVM</NavLink>
    <nav className="navigation">
        <NavLink to="/produits" activeClassName="active">Produits</NavLink>
        <NavLink to="/projets" activeClassName="active">Projets</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>

    </nav>
    </header>

  );
}


export default Header;
