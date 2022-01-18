import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header = ({userName}) => {
  return (
    <header className="header">
      <nav>
        <div className="leftPortion">
          <Link to="/">
            <div className="title">Note App</div>
          </Link>
          <div className="searchBar">
            <input className="search" type={'search'}></input>
          </div>
        </div>
        <div className="rightPortion">
          <Link to={'/notes'}>
            <div className="myNotes">My Notes</div>
          </Link>
          <div className="userInfo">{userName}</div>
        </div>
      </nav>
    </header>
  );
};
