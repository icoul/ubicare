import React, { useState, useEffect } from 'react';
import Table from 'utils/table/Table';
import { nvl } from 'utils/nvl';
import makeDataLevel from './makeDataLevel';
import { columnSetter } from './columns';

import { Styles } from 'utils/table/Table.css.js';

const InfoDetailTable = ({ tableData, paramState, canNextPage, canPreviousPage, dispatch }) => {
  const [ data, setData ] = useState([]);
  const [ columns ] = useState(columnSetter());

  useEffect(() => {
    setData(
      nvl(tableData, []).map((d, index) => {
        return {
          ...makeDataLevel(d, 
                           paramState.pageIndex, 
                           paramState.pageSize, 
                           index)
        }
      })
    );
  }, [tableData]);

  if (!columns) {
    console.log(columns);
    
    return null;
  }

  return(
    <Styles>
      <Table columns={columns} 
             data={data} 
             pageIndex={paramState.pageIndex} 
             pageSize={paramState.pageSize} 
             pageCount={paramState.pageCount} 
             elementCount={paramState.elementCount} 
             canNextPage={canNextPage} 
             canPreviousPage={canPreviousPage} 
             setParamDispatch={dispatch} />
    </Styles>
  )
}

export default InfoDetailTable;