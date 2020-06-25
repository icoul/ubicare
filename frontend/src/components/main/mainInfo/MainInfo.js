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
      <MainInfoContainer alignOption={alignOption}>
      </MainInfoContainer>
    </>
  )
}

export default MainInfo;