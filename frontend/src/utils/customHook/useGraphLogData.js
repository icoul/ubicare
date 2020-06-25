import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nvl } from 'utils/nvl';

export const useGraphLogData = (title, moduleIdx) => {
  const [ logData, setLogData ] = useState(null);

  useEffect(() => {
    const getLogDataForPopupGraph = async () => {
      let url = '';
  
      switch (title) {
        case "가스":
          url = '/api/gas/newestDataOne';
          break;
        default:
          return;
      }
      
      const res = await axios.get(url, {params: {moduleIdx: moduleIdx}});
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