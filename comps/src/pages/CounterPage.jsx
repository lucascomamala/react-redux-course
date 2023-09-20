import { useReducer } from 'react'

import Panel from '../components/Panel'
import Button from '../components/Button'

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + state.step
    }
  }
  //
}

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount)
  // const [step, setStep] = useState(1)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    step: 1
  })


  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    // setCount(count - step)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row space-x-3'>
        <Button onClick={decrement}>
          Decrement
        </Button>
        <Button onClick={increment}>
          Increment
        </Button>
      </div>
      <form>
        <label>By how much</label>
        <input
          type='number'
          value={state.step}
          onChange={{}}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
      </form>
    </Panel>
  )
}

export default CounterPage
