import { useState } from 'react'
import NumberguessForm from './components/numberguessForm'
import Number from './models/Number'

interface State {
  number:number;
}

function App() {
  const [state, setState] = useState<State>({
    number:0
  })

  const setNumber = (number:Number) => {
    setState({
      number:state.number +1
    })
  }

  return (
    <>
      <NumberguessForm setNumber={setNumber}/>
      <h2>{state.number}</h2>
    </>
  )
}

export default App
