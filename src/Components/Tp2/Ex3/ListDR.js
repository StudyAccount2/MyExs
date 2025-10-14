import React from 'react'
import './ListDR.css'

const ListDR = ({elements,text}) => {
  return (
    <div className='list'>
      <span>{text}:</span> 
      <select>
        {elements.map((el)=><option value={el}>{el}</option>)}
      </select>
    </div>
  )
}

export default ListDR
