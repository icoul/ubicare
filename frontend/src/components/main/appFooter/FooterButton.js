import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const FooterButton = ( props ) => {
  const [ view, setView ] = useState('');
  const subPage = props.subPage.map((data, index) => {
    return (
      <li key={data.menu.menuIdx}>
        <NavLink exact to={data.menu.menuUrl} 
                 activeClassName="activate"
                 isActive={(match, location) => { 
                   if (match || (location.pathname !== '/' && // url이 메인 기본페이지가 아니어야 한다.
                                 index === 0 && // index 0번은 서브메뉴가 아닌 대메뉴
                                 props.url.includes(location.pathname))) {
                     props.setMainTitle(data.menu.titleNm);
                     return true;
                   }
                 }}>{data.menu.menuNm}</NavLink>
      </li>
    )
  });

  const subPagePosition = {
    bottom: props.subPage.length * 100 + '%'
  }

  return (
    <>
      <li onMouseOver={() => {if(props.subPage.length > 0) setView('on')}} 
          onMouseLeave={() => {if(props.subPage.length > 0) setView('')}} >
        <div className="mainMenu">
          <NavLink exact={props.url === '/'} 
                   to={props.url} 
                   activeClassName="activate"
                   isActive={(match, location) => { 
                     if (match || (location.pathname === '/' && props.url === '/')) {
                       props.setMainTitle(props.titleName);
                       return true;
                     }
                   }}>{ props.pageName }</NavLink>
        </div>
        <div className={['subMenu', view].join(' ')} style={subPagePosition}>
          <ul>
            {subPage}
          </ul>
        </div>
      </li>
    </>
  )
}

export default FooterButton;