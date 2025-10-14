import React from 'react'
import Etudiant from "./Etudiant";
import Data from "./Data";
import './List.css'


const List = () => {
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {
                    Data.map((etudiant)=>{
                        return(
                            <tr>
                                <td>{etudiant.id}</td>
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.note}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default List

