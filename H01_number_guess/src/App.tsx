import { useState } from 'react'
import NumberguessForm from './components/numberguessForm'
import Number from './models/Number'

interface State {
  guesscounter:number;
  number:number;
  randomvalue:number;
  textvalue:string;
}

let tempRandomValue = Math.floor(Math.random()*16);

function App() {
  const [state, setState] = useState<State>({
    guesscounter:0,
    number:0,
    randomvalue:0,
    textvalue:""
  })

  const setNumber = (number:Number) => {
    setState({
      guesscounter:state.guesscounter +1,
      number:state.number +1,
      randomvalue:tempRandomValue,
      textvalue:state.textvalue
    })
  }

  if(state.number === state.randomvalue && state.number ) {
    state.textvalue="you guessed the number"
  } else if (state.number < state.randomvalue) {
    state.textvalue="you guessed too low"
  } else if (state.number > state.randomvalue){
    state.textvalue="you guessed too high"
  } else {
    state.textvalue="Guess a number"
  }

  return (
    <>
      <NumberguessForm setNumber={setNumber}/>
      <h2>Guess amount: {state.guesscounter}</h2>
      <h2>Correct answer: {state.randomvalue}</h2> 
      <h2>{state.textvalue}</h2>
    </>
  )
}

export default App
