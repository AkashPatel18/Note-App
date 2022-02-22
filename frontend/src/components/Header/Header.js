import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './Header.css';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/userActions';

export const Header = ({userName, setSearch}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="header">
      <nav>
        <div className="leftPortion">
          <Link to="/">
            <div className="title">Note App</div>
          </Link>
          <div className="searchBar">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="search"
              type={'search'}></input>
          </div>
        </div>
        <div className="rightPortion">
          <Link to={'/notes'}>
            <div className="myNotes">My Notes</div>
          </Link>
          <div className="userInfo">{userName}</div>
          <div className="myNotes" onClick={handleLogOutClick}>
            LogOut
          </div>
        </div>
      </nav>
    </header>
  );
};
