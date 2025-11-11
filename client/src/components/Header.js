import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="main-header">
      <div className="header-left">
        <button className="nav-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nav-button">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="¿Qué quieres escuchar?" />
        </div>
      </div>
      
      <div className="header-right">
        <div className="user-menu">
          <div className="user-avatar">
            <i className="fas fa-user"></i>
          </div>
          <span className="user-name">{user?.name}</span>
          <button className="logout-button" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
