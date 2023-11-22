// Layout.js

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './layout.css';

const Layout = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };
  const customStyles = {
    bmBurgerButton: {
      display: 'none', 
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#fff',
      width: 290, 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
     
    },
  };

  return (
    <div className="headerContainer">
      <h1 className="headerText">My Prepod</h1>
      <button className="burger-menu-button" onClick={toggleBurgerMenu}>
        ☰
      </button>
      <Menu
        isOpen={isBurgerMenuOpen}
        onClose={closeBurgerMenu}
        left
        overlayClassName="custom-overlay"
        styles={{ ...customStyles }}
      >
        <button className="close-button" onClick={closeBurgerMenu}>
          ✕
        </button>
        <NavLink className="menu-item" to="/admin" onClick={closeBurgerMenu}>
          Админ
        </NavLink>
        <NavLink className="menu-item" to="/about" onClick={closeBurgerMenu}>
          О сайте
        </NavLink>
        <NavLink className="menu-item" to="/telegram" onClick={closeBurgerMenu}>
          Канал в ТГ
        </NavLink>
        <NavLink className="menu-item" to="/principles" onClick={closeBurgerMenu}>
          Шесть принципов Майпрепод
        </NavLink>
      </Menu>
      <Outlet />
    </div>
  );
};

export { Layout };
