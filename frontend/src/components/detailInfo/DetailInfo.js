import React, { useEffect } from 'react';
import { DetailInfoContainer } from './DetailInfo.css';

const DetailInfo = (props) => {
  useEffect(() => {
    console.log(props.detailIdx);
    
  }, [props.detailIdx])

  return(
    <DetailInfoContainer>
    </DetailInfoContainer>
  )
}

export default DetailInfo;