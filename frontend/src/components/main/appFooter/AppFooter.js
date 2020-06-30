import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FooterButton from './FooterButton';

import ubiCi from 'static/images/logo/ubi_ci.png';
import ulsanCi from 'static/images/logo/ulsan_ci.png';
import ulsanUniverCi from 'static/images/logo/ulsan_univer_ci.png';

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
          <li><a><div className="mainMenu"><img width="150" src={ulsanCi} /></div></a></li>
          <li><a><div className="mainMenu"><img width="50" src={ulsanUniverCi} />   울산대학병원</div></a></li>
          <li><a><div className="mainMenu"><img width="150" src={ubiCi} /></div></a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default AppFooter;
