import React from 'react'
import moment from 'moment';
import { TiBatteryCharge, TiBatteryHigh, TiBatteryMid, TiBatteryLow } from 'react-icons/ti'

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainInfoContent } from './MainInfo.css.js';
import './MainInfo.css';

const MenuTypeMain = ( props ) => {
  if (props.selectSideMenu !== 'menu') {
    return null;
  }

  return (
    <>
      <div className="info-title">
            <div>
              <div>입소현황</div>
              <div>{ props.userData.admissionData.length }명</div>
            </div>
            <div>
              <div>퇴소누계</div>
              <div>{ props.userData.allUserData.length - props.userData.admissionData.length }명</div>
            </div>
            <div>
              <div>정상</div>
              <div>{ props.userData.admissionData.filter(x => x.bodyTemp >= 36.1 && x.bodyTemp <= 37.4).length }명</div>
            </div>
            <div>
              <div>이상</div>
              <div>{ props.userData.admissionData.filter(x => (x.bodyTemp < 36.1 || x.bodyTemp > 37.4)).length }명</div>
            </div>
          </div>
      <div className="info-contents">
        <div className="info-contents-title">Room별 현황</div>
        <div className="info-contents-container">
          {
            props.userData.areaInUserData.map(d => {
              return d.userIdx !== null ? (
                <MainInfoContent key={d.areaIdx} 
                                 mainType={props.selectSideMenu}
                                 length={ props.userData.areaInUserData.length }
                                 status={ d.bodyTemp >= 36.1 && d.bodyTemp <= 37.4 ? '0' : '2' } 
                                 onClick={() => props.handleClick(d.moduleIdx, d.areaNm, d.userNm)}>
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
                                 mainType={props.selectSideMenu}
                                 length={ props.userData.areaInUserData.length }
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
    </>
  )
}

export default MenuTypeMain;