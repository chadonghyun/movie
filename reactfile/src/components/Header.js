import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='header'>
        <h1>
          <Link to='/home'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="로고" />
          </Link>
        </h1>
        <Navigation />
      </header>
    </>
  );
}

export default Header;