import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nvl } from 'utils/nvl';

export const useGraphSystemLogData = (title, logIdx) => {
  const [ logData, setLogData ] = useState(null);

  useEffect(() => {
    const getLogDataForPopupGraph = async () => {
      let url = '';
  
      switch (title) {
        case "가스":
          url = '/api/gas/newestDataOneByLogIdx';
          break;
        default:
          return;
      }
      
      const res = await axios.get(url, {params: {logIdx: logIdx}});
      setLogData(nvl(res.data.content, null));
    }

    getLogDataForPopupGraph();

    const timer = window.setInterval(() => {
      getLogDataForPopupGraph();
    }, Number(10000));

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return logData;
}