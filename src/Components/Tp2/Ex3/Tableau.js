import React from 'react'
import './Tableau.css'

const Tableau = ({listetaches}) => {
  return (
    <div>
      <table className='table'>
            <thead>
                <tr>
                    <th>code tache</th>
                    <th>date tache</th>
                    <th>resumé tache</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listetaches.map((tache)=>{
                        return(
                            <tr>
                                <td>{tache.Code}</td>
                                <td>{tache.Date}</td>
                                <td>{tache.Resumé}</td>
                                <td><a href="#">Détails</a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Tableau
