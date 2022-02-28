import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './Header.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/userActions';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';
// or
// import {Typography} from '@mui/material';
import {Input} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LoginButton from '../Buttons/LoginButton';
import {SignUpButton} from '../Buttons/SignUpButton';

export const Header = ({userName, setSearch}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  const {userInfo} = useSelector((state) => state).userLogin;

  return (
    // <header className="header">
    //   <nav>
    //     <div className="leftPortion">
    //       <Link to="/">
    //         <div className="title">Note App</div>
    //       </Link>
    //       <div className="searchBar">
    //         <input
    //           onChange={(e) => setSearch(e.target.value)}
    //           className="search"
    //           type={'search'}></input>
    //       </div>
    //     </div>
    //     <div className="rightPortion">
    //       <Link to={'/notes'}>
    //         <div className="myNotes">My Notes</div>
    //       </Link>
    //       <div className="userInfo">{userName}</div>
    //       <div className="myNotes" onClick={handleLogOutClick}>
    //         LogOut
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <>
      <header style={{padding: '10px 20px'}}>
        <nav>
          <Container
            fixed
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Typography variant="p" component="h2">
              <Link to={'/'} style={{textDecoration: 'none'}}>
                📓 Note Down
              </Link>
            </Typography>

            {userInfo ? (
              <div style={{display: 'flex'}}>
                <Input
                  type={'search'}
                  onChange={(e) => setSearch(e.target.value)}
                  label="hi"
                  placeholder="🔍 search"
                />

                {/* <TextField
                  label="I am a really really long green TextField label"
                  type={'search'}
                  onChange={(e) => setSearch(e.target.value)}
                  InputLabelProps={{
                    style: {color: '#fff'},
                  }}
                /> */}
                {/* <Avatar /> */}
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  width: 150,
                  justifyContent: 'space-between',
                }}>
                <LoginButton />

                <SignUpButton />
              </div>
            )}
          </Container>
        </nav>
      </header>
      <hr />
    </>
  );
};
