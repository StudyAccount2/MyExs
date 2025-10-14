import React from 'react'
import './Header.css'

const Header = ({style,content}) => {
  return (
    <div>
      <h1 style={style} className='header'>{content}</h1>
    </div>
  )
}

export default Header
