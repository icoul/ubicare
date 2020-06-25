import React from 'react'
import Title from './Title';
import Clock from './Clock';
import HeaderButtons from './HeaderButtons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AppHeader.css';

const AppHeader = (props) => {
  return(
    <header className="App-header">
      <Title {...props}/>
      <Clock endPoint="/api/hello"/>
      <HeaderButtons {...props}/>
    </header>
  )
}

export default AppHeader;