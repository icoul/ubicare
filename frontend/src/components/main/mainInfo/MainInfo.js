import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainInfoContainer } from './MainInfo.css.js';
import './MainInfo.css';

const MainInfo = ( props ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = window.setInterval(() => {
    }, Number(10000));

    return () => {
      window.clearInterval(timer);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dispensingModules, props.modules])


  return (
    <>
      <MainInfoContainer>
        <div>현황</div>
        <div>
          <div>Room별 현황</div>
          <div>
            <div>
              <div>101호</div>
              <div>성명</div>
              <div>입소일</div>
              <div>0일차</div>
              <div>퇴소예정일</div>
              <div>배터리잔량</div>
            </div>
          </div>
          <div>ㅇㅇㅇ</div>
        </div>
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;