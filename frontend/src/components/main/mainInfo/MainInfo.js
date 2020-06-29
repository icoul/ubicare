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
              <div>성명</div>
              <div>입소일</div>
              <div>0일차</div>
              <div>퇴소예정일</div>
              <div>배터리잔량</div>
            </MainInfoContent>
            <MainInfoContent status="0" onClick={() => handleClick(1)}>
              <div>101호</div>
              <div>성명</div>
              <div>입소일</div>
              <div>0일차</div>
              <div>퇴소예정일</div>
              <div>배터리잔량</div>
            </MainInfoContent>
            <MainInfoContent status="1" onClick={() => handleClick(1)}>
              <div>101호</div>
              <div>성명</div>
              <div>입소일</div>
              <div>0일차</div>
              <div>퇴소예정일</div>
              <div>배터리잔량</div>
            </MainInfoContent>
            <MainInfoContent status="2" onClick={() => handleClick(1)}>
              <div>101호</div>
              <div>성명</div>
              <div>입소일</div>
              <div>0일차</div>
              <div>퇴소예정일</div>
              <div>배터리잔량</div>
            </MainInfoContent>
          </div>
          <div>대한민국을 건강하게 지키는 힘!</div>
        </div>
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;