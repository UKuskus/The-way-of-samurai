import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
            <div className={s.NavItem}>
        <a>Profile</a>
      </div>
      <div className={s.NavItem}>
        <a>Messages</a>
      </div>
      <div className={s.NavItem}>
        <a>News</a>
      </div>
      <div className={s.NavItem}>
        <a>Music</a>
      </div>
      <div className={s.NavItem}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;