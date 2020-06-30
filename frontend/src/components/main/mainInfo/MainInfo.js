import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import moment from 'moment';
import { TiBatteryCharge, TiBatteryHigh, TiBatteryMid, TiBatteryLow } from 'react-icons/ti'
import useCancellationToken from 'utils/customHook/useCancellationToken';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainInfoContainer, MainInfoContent } from './MainInfo.css.js';
import './MainInfo.css';

import { nvl } from 'utils/nvl';

const MainInfo = ( props ) => {
  const cancellationToken = useCancellationToken();
  const [ userData, setUserData ] = useState([]);

  const getUserData = useCallback(() => {
    axios.get('/api/user').then(response => {
      if(cancellationToken.isCancelled || nvl(response.data, null) === null) {
        return false;
      }

      setUserData(response.data);
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
            {
              userData.map(d => {
                return (
                  <MainInfoContent status="0" onClick={() => handleClick(d.module.moduleIdx)}>
                    <div>{ d.area.areaNm }</div>
                    <div>{ d.userNm }</div>
                    <div>입소일 : { moment(d.inDt).format('YYYY-MM-DD') }</div>
                    <div>퇴소 { moment(new Date()).diff(moment(d.outDt), 'days') * -1 }일전</div>
                    <div>퇴소일 : { moment(d.outDt).format('YYYY-MM-DD') }</div>
                    <div><TiBatteryCharge /></div>
                  </MainInfoContent>
                )
              })
            }
          </div>
          <div>대한민국을 건강하게 지키는 힘!</div>
        </div>
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;