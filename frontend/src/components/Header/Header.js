import React from 'react';
import './Header.css';

export const Header = ({userName}) => {
  return (
    <header className="header">
      <nav>
        <div className="leftPortion">
          <div className="title">Note App</div>
          <div className="searchBar">
            <input className="search" type={'search'}></input>
          </div>
        </div>
        <div className="rightPortion">
          <div className="myNotes">My Notes</div>
          <div className="userInfo">{userName}</div>
        </div>
      </nav>
    </header>
  );
};
