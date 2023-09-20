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
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - state.step
    }
  }
  if (action.type === 'SET_STEP') {
    return {
      ...state,
      step: action.payload
    }
  }
}

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount)
  // const [step, setStep] = useState(1)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    step: 1
  })

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row space-x-3'>
        <Button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </Button>
      </div>
      <form>
        <label>By how much</label>
        <input
          type='number'
          value={state.step}
          // eslint-disable-next-line no-restricted-globals
          onChange={() => dispatch({ type: 'SET_STEP', payload: Number(event.target.value) || 0 })}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
      </form>
    </Panel>
  )
}

export default CounterPage
