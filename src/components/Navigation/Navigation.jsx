import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
            <div className={s.NavItem}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.NavItem}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={s.NavItem}>
        <a href="/news">News</a>
      </div>
      <div className={s.NavItem}>
        <a href="/music">Music</a>
      </div>
      <div className={s.NavItem}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;