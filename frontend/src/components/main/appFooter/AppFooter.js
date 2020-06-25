import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FooterButton from './FooterButton';

import './AppFooter.css';

const AppFooter = ( props ) => {
  const dispatch = useDispatch();
  const userId = useSelector(store => store.loginManager.status.currentUser);

  useEffect(() => {
  }, [])

  return (
    <footer className="App-footer">
      <nav>
        <ul className="App-footer-ul">
          <li><div className="mainMenu"><a>울산시</a></div></li>
          <li><div className="mainMenu"><a>울산대학병원</a></div></li>
          <li><div className="mainMenu"><a>(주)유비마이크로</a></div></li>
        </ul>
      </nav>
    </footer>
  )
}

export default AppFooter;
