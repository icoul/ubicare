import React from 'react';
import { useSelector } from 'react-redux';

const SearchModule = ({ updateSearchMap }) => {
  const modules = useSelector(store => store.modules.module); // 장치 데이터

  if (!modules) {
    return null;
  }

  return (
    <div className="search-condition col-xl-2 col-sm-6">
      <label>장치</label>
      <select className="table-search-input up-check"
              onChange={(
                ({target}) => {
                  updateSearchMap('moduleIdx', target.value.split('_')[0]); 
                  updateSearchMap('moduleScn', target.value.split('_')[1]);
                }
              )}>
        <option value="0">장치를 선택해주세요</option>
        {
          modules.filter(d => (d.moduleScn === "0" || d.moduleScn === "4")).map((d) => {
            return <option key={ d.moduleIdx } value={ `${d.moduleIdx}_${d.moduleScn}` }>{ d.modelNm }</option>
          })
        }
      </select>
    </div>
  )
}

export default React.memo(SearchModule);