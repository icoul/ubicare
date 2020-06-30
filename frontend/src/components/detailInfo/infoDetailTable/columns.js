import React from 'react';
import { batteryToText } from 'utils/utils';

export const columnSetter = () => {
  const columns = [
    {
      Header: '장치정보',
      columns: [
        {
          Header: 'No',
          accessor: 'rnum',
        },
        {
          Header: '장치명',
          accessor: 'modelNm',
        },
      ],
    },
    {
      Header: '측정결과',
      columns: [
        {
          Header: '체온',
          accessor: 'bodyTemp',
        },
      ]
    },
    {
      Header: '상태정보',
      columns: [
        {
          id: 'status',
          Header: () => (
            <div>상태</div>
          ),
          Cell: ({ row }) => (
            statusConverter(row.original.bodyTemp)
          ),
        },
        {
          Header: '측정시간',
          accessor: 'regTime',
        },
      ],
    },
  ]

  return columns;
};

const statusConverter = (bodyTemp) => {
  if (bodyTemp >= 36.1 && bodyTemp <= 37.4) {
    return <span style={{color: '#50bb5b'}}>● 정상</span>;
  }
  else if (bodyTemp < 36.1 || bodyTemp > 37.4) {
    return <span style={{color: '#ff0018'}}>● 위험</span>;
  }
  else {
    return <span style={{color: '#50bb5b'}}>● 정상</span>;
  }
}