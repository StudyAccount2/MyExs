import React from 'react'
import Entete from './Entete'
import Question from './Question'
import {questions} from './Data'

const App = () => {
  return (
    <div>
      <Entete titre="Mon Quiz" />
      {questions.map((q, index) => (
        <Question key={index} questions={q} />
      ))}
    </div>
  )
}
export default App

