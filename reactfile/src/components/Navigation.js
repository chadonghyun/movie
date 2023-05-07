import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
function Navigation(props) {
  return (
    <>
      <div className='nav'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">INTRO</Link>
          </li>
          <li>
            <Link to="/sub01">SUB01</Link>
          </li>
          <li>
            <Link to="/sub02">SUB02</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;