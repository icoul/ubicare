import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import moment from 'moment';

import SideMenu from './SideMenu';
import MenuTypeMain from './MenuTypeMain';
import IconTypeMain from './IconTypeMain';

import useCancellationToken from 'utils/customHook/useCancellationToken';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainInfoContainer } from './MainInfo.css.js';
import './MainInfo.css';

import { nvl } from 'utils/nvl';

const MainInfo = ( props ) => {
  const cancellationToken = useCancellationToken();
  const [ selectSideMenu, setSelectSideMenu ] = useState('menu');
  const [ userData, setUserData ] = useState({
                                              areaInUserData: [],
                                              allUserData: [],
                                              admissionData: []
                                            });

  const getUserData = useCallback(() => {
    axios.get('/api/user').then(response => {
      if(cancellationToken.isCancelled || nvl(response.data, null) === null) {
        return false;
      }

      setUserData({
        areaInUserData: response.data,
        allUserData: response.data.filter(x => x.userIdx !== null),
        admissionData: response.data.filter(x => x.userIdx !== null && moment(new Date()).diff(moment(x.outDt), 'days') <= 0)
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [cancellationToken])

  useEffect(() => {
    getUserData();

    const timer = window.setInterval(() => {
      getUserData();
    }, Number(10000));

    return () => {
      window.clearInterval(timer);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (moduleIdx, areaNm, userNm) => {
    props.setUserInfo({
      moduleIdx: moduleIdx,
      areaNm: areaNm,
      userNm: userNm
    });
    props.history.push("/detail");
  }

  return (
    <>
      <MainInfoContainer>
        <SideMenu selectSideMenu={selectSideMenu} setSelectSideMenu={setSelectSideMenu} />
        <MenuTypeMain selectSideMenu={selectSideMenu} handleClick={handleClick} userData={userData} />
        <IconTypeMain selectSideMenu={selectSideMenu} handleClick={handleClick} userData={userData} />
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;