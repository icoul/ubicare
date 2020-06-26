import React from 'react';

const SearchModule = ({ updateSearchMap }) => {
  return (
    <div className="search-condition col-xl-4 col-sm-6">
      <label>시간</label>
      <select className="table-search-input up-check"
              onChange={(({target}) => updateSearchMap('beginTime', target.value))}>
        {
          [...Array(25).keys()].map((v) => {
            return <option value={v} key={"start_" + v}>{v < 10 ? "0" + v : v}시</option>
          })
        }
      </select>
      <span>~</span>
      <select className="table-search-input up-check"
              onChange={(({target}) => updateSearchMap('endTime', target.value))}>
        {
          [...Array(25).keys()].reverse().map((v) => {
            return <option value={v} key={"end_" + v}>{v < 10 ? "0" + v : v}시</option>
          })
        }
      </select>
    </div>
  )
}

export default React.memo(SearchModule);