import React from 'react'
import './Title.css';

const Title = (props) => {
  return (
    <div className='headerTitle'>
      <div>
        <span>
          {props.mainTitle}
        </span>
      </div>
    </div>
  )
}

export default Title;