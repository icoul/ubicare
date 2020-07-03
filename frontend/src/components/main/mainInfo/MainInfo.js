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
        <div className="info-title">
          <div>
            <div>입소현황</div>
            <div>{ userData.admissionData.length }명</div>
          </div>
          <div>
            <div>퇴소누계</div>
            <div>{ userData.allUserData.length - userData.admissionData.length }명</div>
          </div>
          <div>
            <div>정상</div>
            <div>{ userData.admissionData.filter(x => x.bodyTemp >= 36.1 && x.bodyTemp <= 37.4).length }명</div>
          </div>
          <div>
            <div>이상</div>
            <div>{ userData.admissionData.filter(x => (x.bodyTemp < 36.1 || x.bodyTemp > 37.4)).length }명</div>
          </div>
        </div>
        <div className="info-contents">
          <div className="info-contents-title">Room별 현황</div>
          <div className="info-contents-container">
            {
              userData.areaInUserData.map(d => {
                return d.userIdx !== null ? (
                  <MainInfoContent key={d.areaIdx} 
                                   length={ userData.areaInUserData.length }
                                   status={ d.bodyTemp >= 36.1 && d.bodyTemp <= 37.4 ? '0' : '2' } 
                                   onClick={() => handleClick(d.moduleIdx, d.areaNm, d.userNm)}>
                    <div className="info-main-contents">{ d.areaNm }</div>
                    <div className="info-main-contents">{ d.userNm }</div>
                    <div className="info-sub-contents-container">
                      <div>{ moment(d.inDt).format('YYYY-MM-DD') }</div>
                      <div>{ moment(d.outDt).format('YYYY-MM-DD') }</div>
                      <div>퇴소 { moment(new Date()).diff(moment(d.outDt), 'days') * -1 + 1 }일전</div>
                      <div><TiBatteryCharge /></div>
                    </div> 
                  </MainInfoContent>
                ) : (
                  <MainInfoContent key={d.areaIdx} 
                                   length={ userData.areaInUserData.length }
                                   status='3'>
                    <div className="info-main-contents">{ d.areaNm }</div>
                    <div className="info-sub-contents-container">
                      <div> </div>
                    </div> 
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