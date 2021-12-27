import React from 'react';
import '../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img src="https://cdn.freelogovectors.net/svg05/gmail-logo.svg" alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
