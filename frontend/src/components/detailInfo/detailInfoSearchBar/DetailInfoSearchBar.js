import React, { useCallback } from 'react';
import GeneralCalendar from 'utils/calendar/Calendar';
import SearchTime from './SearchTime';
import SearchModule from './SearchModule';

import './DetailInfoSearchBar.css';

const DetailInfoSearchBar = ({ searchMap, setSearchMap}) => {
  const updateSearchMap = useCallback((key, value) => {
    setSearchMap(searchMap => {
      return {
        ...searchMap,
        [key]: value
      }
    })
  }, [searchMap])

  return (
    <div className="searchBar-conatiner">
      <div className="form-row">
        <div className="search-condition col-xl-2 col-sm-6">
          <label>날짜</label>
          <GeneralCalendar date={searchMap.date} 
                           updateDateFunction={updateSearchMap}
                           name='date'
                           position={{right: '-43', bottom: '-335'}} />
        </div>
        <SearchTime updateSearchMap={updateSearchMap}/>
        <SearchModule updateSearchMap={updateSearchMap} />

        <div className="search-condition col-xl-2 col-sm-6">
          <label>조회간격</label>
          <select className="table-search-input up-check" 
                  onChange={(({target}) => updateSearchMap('autoReloadTime', target.value))}>
            <option value="0">없음</option>
            <option value="10000">10초</option>
            <option value="30000">30초</option>
            <option value="60000">60초</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DetailInfoSearchBar);