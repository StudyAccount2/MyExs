import React,{useState} from 'react'


const Question = ({questions}) => {
    const [op, setOp] = useState(0);
    function checkAnswer(option){
        setOp(option);
    }
     
  return (
    <div className='p-3 m-3 border border-dark rounded'>
        {
        <h3 className=''>{questions.enonce}</h3>
        }
      {questions.options.map((option)=>{
        return <button className='' onClick={()=>{checkAnswer(option);}} disabled={op !== 0}>{option}</button>
      })}

    </div>
  )
}

export default Question;
