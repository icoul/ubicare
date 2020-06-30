import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainInfoContainer, MainInfoContent } from './MainInfo.css.js';
import './MainInfo.css';
import moment from 'moment';

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

  const handleClick = (idx) => {
    props.setDetailIdx(idx);
    props.history.push("/detail");
  }

  return (
    <>
      <MainInfoContainer>
        <div className="info-title">
          <table>
            <tr>
              <td>기준일시 : </td>
              <td>{moment().format('YYYY-MM-DD HH시 기준')}</td>
            </tr>
            <tr>
              <td>입소현황 : </td>
              <td>현 13명 (누계 총 111명)</td>
            </tr>
            <tr>
              <td>퇴소현황 : </td>
              <td>누계 총 30명</td>
            </tr>
            <tr>
              <td>입소자 상태 종합 : </td>
              <td>총 13명 중 정상 10명 요주의 2명 이상 1명</td>
            </tr>
          </table>
        </div>
        <div className="info-contents">
          <div className="info-contents-title">Room별 현황</div>
          <div className="info-contents-container">
            <MainInfoContent status="0" onClick={() => handleClick(13)}>
              <div>101호</div>
              <div>조마루</div>
              <div>2020-06-25</div>
              <div>5일차</div>
              <div>2020-07-04</div>
            </MainInfoContent>
            <MainInfoContent status="0" onClick={() => handleClick(1)}>
              <div>102호</div>
              <div>진보라</div>
              <div>2020-06-27</div>
              <div>3일차</div>
              <div>2020-07-07</div>
            </MainInfoContent>
            <MainInfoContent status="1" onClick={() => handleClick(1)}>
              <div>103호</div>
              <div>김사랑</div>
              <div>2020-06-26</div>
              <div>6일차</div>
              <div>2020-07-04</div>
            </MainInfoContent>
            <MainInfoContent status="2" onClick={() => handleClick(1)}>
              <div>104호</div>
              <div>이슬비</div>
              <div>2020-06-29</div>
              <div>1일차</div>
              <div>2020-07-10</div>
            </MainInfoContent>
          </div>
          <div>대한민국을 건강하게 지키는 힘!</div>
        </div>
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;