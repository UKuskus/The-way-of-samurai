import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
            <div className={s.NavItem}>
        <NavLink className={({ isActive }) => (isActive ? s.active : '')} to="/profile">Profile</NavLink>
      </div>
      <div className={s.NavItem}>
        <NavLink className={({ isActive }) => (isActive ? s.active : '')} to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.NavItem}>
        <NavLink className={({ isActive }) => (isActive ? s.active : '')} to="/news">News</NavLink>
      </div>
      <div className={s.NavItem}>
        <NavLink className={({ isActive }) => (isActive ? s.active : '')} to="/music">Music</NavLink>
      </div>
      <div className={s.NavItem}>
        <NavLink className={({ isActive }) => (isActive ? s.active : '')}  to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;