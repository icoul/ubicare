import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/action/login';
import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { FiLogOut } from 'react-icons/fi';
import './HeaderButtons.css';

const HeaderButtons = ( props ) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/login");
  }

  return (
    <nav className="headerButtons">
      <ul className="buttonBox">
      </ul>
    </nav>
  )
}

export default HeaderButtons;