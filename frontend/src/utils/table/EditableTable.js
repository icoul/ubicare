import React, { useEffect } from 'react';
import { useTable, useRowSelect } from 'react-table';

// Create an editable cell renderer
import EditableCell from './cell/EditableCell';
import NormalCell from './cell/NormalCell';

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: NormalCell,
  EditableCell: EditableCell
}

export const EditableTable = ({ columns, data, setUpdateData, removeUncheckedRow, children }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      setUpdateData
    },
    useRowSelect
  )

  useEffect(() => {
    removeUncheckedRow(selectedFlatRows);
  }, [selectedFlatRows]);

  // Render the UI for your table
  return (
    <>
      {children}
      <div className="table-container">
        <table {...getTableProps()}>
          <colgroup>
            <col width="50" />
            <col width="50" />
            <col width="100" />
            <col width="100" />
            <col width="180" />
            <col width="180" />
            <col width="180" />
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
                    {row.cells.map((cell, index) => {
                      return (
                        (index > 3 && row.isSelected) ?
                          <td {...cell.getCellProps()}>{cell.render('EditableCell')}</td>
                          :
                          <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}