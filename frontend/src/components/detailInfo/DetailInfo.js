import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';
import useCancellationToken from 'utils/customHook/useCancellationToken';

import LineGraph from './lineGraph/LineGraph';
import { DetailInfoContainer } from './DetailInfo.css';

import { nvl } from 'utils/nvl';

const DetailInfo = (props) => {
  const cancellationToken = useCancellationToken();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    console.log(props.detailIdx);
    
  }, [])

  const searchGasGraph = useCallback(() => {
    axios.get('/api/care/search/graph', {params: {moduleIdx: props.detailIdx}}).then(response => {
      if(cancellationToken.isCancelled || nvl(response.data, null) === null) {
        return false;
      }
      
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [props.detailIdx, cancellationToken])

  useEffect(() => {
    if (!cancellationToken.isCancelled) {
      searchGasGraph();
    }
  }, [props.detailIdx, cancellationToken]);

  useEffect(() => () => cancellationToken.cancel(), []);

  return(
    <DetailInfoContainer>
      <LineGraph graphId='체온'
                 data={data.map((d) => { return nvl(d.bodyTemp, 0) })}
                 categories={data.map((d) => { return moment(d.rgstDt).format('YYYY-MM-DD HH:mm:ss') })}
                 xAxisCategories={data.map((d) => { return moment(d.rgstDt).format('HH:mm:ss') })} />
    </DetailInfoContainer>
  )
}

export default DetailInfo;