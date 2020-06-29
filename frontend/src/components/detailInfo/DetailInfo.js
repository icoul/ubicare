import React, { useState, useEffect, useCallback, useReducer } from 'react';
import axios from 'axios';
import moment from 'moment';
import useCancellationToken from 'utils/customHook/useCancellationToken';

import paramSetterReducer from 'utils/customReducer/paramSetterReducer';

import InfoDetailTable from './infoDetailTable/InfoDetailTable';
import LineGraph from './lineGraph/LineGraph';
import { DetailInfoContainer } from './DetailInfo.css';

import { nvl } from 'utils/nvl';

const DetailInfo = (props) => {
  const cancellationToken = useCancellationToken();
  const [ graphData, setGraphData ] = useState([]);
  const [ tableData, setTableData ] = useState([]);

  const [ canNextPage, setCanNextPage ] = useState(false);
  const [ canPreviousPage, setCanPreviousPage ] = useState(false);
  const [ paramState, dispatch ] = useReducer(paramSetterReducer, 
                                              {
                                                pageIndex: 0,
                                                pageCount: 10,
                                                pageSize: 10,
                                                elementCount: 0
                                              })

  const searchGasGraph = useCallback(() => {
    axios.get('/api/care/search', {params: { ...paramState, moduleIdx: props.detailIdx }}).then(response => {
      if(cancellationToken.isCancelled || nvl(response.data, null) === null) {
        return false;
      }
      dispatch({type: 'CHANGE_TOTAL', pageCount: response.data.totalPages, elementCount: response.data.totalElements});
      setCanNextPage(!response.data.last);
      setCanPreviousPage(!response.data.first);
      
      const topTenInfoData = response.data.content.slice(0, 10);
      setGraphData(topTenInfoData.reverse());
      setTableData(response.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [props.detailIdx, cancellationToken])

  useEffect(() => {
    searchGasGraph();

    const timer = window.setInterval(() => {
      searchGasGraph();
    }, Number(10000));

    return () => {
      window.clearInterval(timer);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.detailIdx, cancellationToken])

  useEffect(() => () => cancellationToken.cancel(), []);

  return(
    <DetailInfoContainer>
      <LineGraph graphId='체온'
                 data={graphData.map((d) => { return nvl(d.bodyTemp, 0) })}
                 categories={graphData.map((d) => { return moment(d.rgstDt).format('YYYY-MM-DD HH:mm:ss') })}
                 xAxisCategories={graphData.map((d) => { return moment(d.rgstDt).format('HH:mm:ss') })} />
      <InfoDetailTable tableData={tableData} paramState={paramState} canNextPage={canNextPage} canPreviousPage={canPreviousPage} dispatch={dispatch} />
    </DetailInfoContainer>
  )
}

export default DetailInfo;