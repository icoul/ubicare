import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuManager } from 'redux/action/menus';
import FooterButton from './FooterButton';

import './AppFooter.css';

const AppFooter = ( props ) => {
  const dispatch = useDispatch();
  const userId = useSelector(store => store.loginManager.status.currentUser);

  useEffect(() => {
    dispatch(menuManager(userId));
  }, [])

  return (
    <footer className="App-footer">
      <nav>
        <ul className="App-footer-ul">
        </ul>
      </nav>
    </footer>
  )
}

export default AppFooter;
