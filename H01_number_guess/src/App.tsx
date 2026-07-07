import { useState } from 'react'
import NumberguessForm from './components/numberguessForm'
import Number from './models/Number'

interface State {
  number:number;
  randomvalue:number;
}

let temp = Math.floor(Math.random()*16);

function App() {
  const [state, setState] = useState<State>({
    number:0,
    randomvalue:0
  })

  const setNumber = (number:Number) => {
    setState({
      number:state.number +1,
      randomvalue:temp
    })
  }

  return (
    <>
      <NumberguessForm setNumber={setNumber}/>
      <h2>{state.number}</h2>
      <h2>{state.randomvalue}</h2> 
    </>
  )
}

export default App
