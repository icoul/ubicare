import React from 'react'
import { TiThMenu, TiThSmall } from 'react-icons/ti';
import classNames from 'classnames';

import { SideMenuContainer } from './SideMenu.css';

const SideMenu = ( props ) => {
  const handleClick = (select) => {
    props.setSelectSideMenu(select);
  }

  return (
    <SideMenuContainer>
      <TiThMenu className={classNames({ active: props.selectSideMenu === 'menu' })} onClick={() => handleClick('menu') } />
      <TiThSmall className={classNames({ active: props.selectSideMenu === 'icon' })} onClick={() => handleClick('icon') } />
    </SideMenuContainer>
  )
}

export default SideMenu;