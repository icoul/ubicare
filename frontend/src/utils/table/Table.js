import React from 'react';
import classNames from 'classnames';
import { useTable, usePagination } from 'react-table';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import { PageNation, NextPrevButton, PageButton } from './Table.css.js';

const Table = ({ className,
                 columns, 
                 data,  
                 pageIndex, 
                 pageCount, 
                 pageSize, 
                 elementCount,
                 canNextPage, 
                 canPreviousPage,
                 pageSizeOptions,
                 setParamDispatch}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
      columns,
      data,
      debug: true,
    },
    usePagination,
  )

  const firstPageNumber = Math.floor(pageIndex / 10) * 10 + 1;
  const value = elementCount - ((firstPageNumber - 1) * pageSize);
  const pageNumberRangeCount = value > 150 ? 10 : (value <= 0 ? 1 : Math.floor(value / (pageSize + 1)) + 1);
  
  const pageNumbers = [...Array(pageNumberRangeCount).keys()].map((i) => {
    return (
      <PageButton selected={firstPageNumber + i == pageIndex + 1}
                  onClick={() => setParamDispatch({type: 'PAGE_SELECT', pageIndex: (firstPageNumber + i - 1)})}
                  key={i}>
        {firstPageNumber + i}
      </PageButton>
    )
  });
  
  let loopKey = 0;

  // Render the UI for your table
  return (
    <>
      <div className={classNames(className, "table-container")}>
        <table {...getTableProps()}>
          <colgroup>
            {
              pageSizeOptions && pageSizeOptions.map(width => {
                loopKey++;
                return <col key={`col_${loopKey}`} width={width} />
              })
            }
          </colgroup>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td className={(cell.column.id).includes('Button') > 0 ? 'btnBox' : ''} 
                                           {...cell.getCellProps()}>
                               {cell.render('Cell')}
                             </td>
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </table>
      </div>
      <PageNation pageNumberRangeCount={pageNumberRangeCount}>
        <NextPrevButton onClick={() => {
                                  setParamDispatch({type: 'PAGE_SELECT', pageIndex: 0})
                                }} 
                        disabled={!canPreviousPage}>
          <FaAngleDoubleLeft />
        </NextPrevButton>
        <NextPrevButton onClick={() => {
                                  setParamDispatch({type: 'PAGE_SELECT', pageIndex: pageIndex - 1})
                                }} 
                        disabled={!canPreviousPage}>
          <FaAngleLeft />
        </NextPrevButton>{' '}
        
        {pageNumbers}

        <NextPrevButton onClick={() => {
                                  setParamDispatch({type: 'PAGE_SELECT', pageIndex: pageIndex + 1})
                                }} 
                        disabled={!canNextPage}>
          <FaAngleRight />
        </NextPrevButton>
        <NextPrevButton onClick={() => {
                                  setParamDispatch({type: 'PAGE_SELECT', pageIndex: pageCount - 1})
                                }} 
                        disabled={!canNextPage}>
          <FaAngleDoubleRight />
        </NextPrevButton>{' '}
      </PageNation>
    </>
  )
}

export default React.memo(Table);