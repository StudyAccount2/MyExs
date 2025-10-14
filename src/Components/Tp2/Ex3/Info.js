import React from 'react'

const Info = ({nom,code}) => {
  return (
    <div>
      <div><strong>Responsable connecté: {nom}</strong></div>
      <div><strong>Code: {code}</strong></div>
    </div>
  )
}

export default Info
