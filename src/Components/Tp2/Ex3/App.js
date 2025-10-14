import React from 'react'
import {types,Employe,projets,Taches} from './Data'
import Info from './Info'
import ListDR from './ListDR'
import Tableau from './Tableau'
import './App.css'
// import Tableau from './Tableau'

const App = () => {
  return (
    <div>
      <Info nom={'MHAMDI HASSAN'} code={27657}/>
      <div className='app'>
      <ListDR elements={types} text={'Type'}/>
      <ListDR elements={Employe} text={'Employé'}/>
      <ListDR elements={projets} text={'ProjetX'}/>
      </div>
    <Tableau listetaches={Taches}/>
    </div>
  )
}

export default App
