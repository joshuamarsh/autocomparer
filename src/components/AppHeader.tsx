import * as React from 'react';
import logo from '../images/logo.svg';

export function AppHeader () {
  return (
    <header className="header">
      <div className="wrapper wrapper--header">
        <a href="/" className="logo"><img src={logo} alt=""/></a>
        <nav>
          <ul className="main-menu">
            <li className="main-menu__item"><a href="/search" className="main-menu__link">Search</a></li>
            <li className="main-menu__item"><a href="/saved" className="main-menu__link">Saved</a></li>
            <li className="main-menu__item"><a href="/account" className="main-menu__link">Account</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
