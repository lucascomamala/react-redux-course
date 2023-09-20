import { useReducer } from 'react'
import { produce } from 'immer'

import Panel from '../components/Panel'
import Button from '../components/Button'

const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_STEP: 'SET_STEP'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      state.count += state.step
      return
    case actions.DECREMENT:
      state.count -= state.step
      return
    case actions.SET_STEP:
      state.step = action.payload
      return
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    step: 1
  })

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row space-x-3'>
        <Button onClick={() => dispatch({ type: actions.DECREMENT })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: actions.INCREMENT })}>
          Increment
        </Button>
      </div>
      <form>
        <label>By how much</label>
        <input
          type='number'
          value={state.step}
          onChange={() => dispatch({
            // eslint-disable-next-line no-restricted-globals
            type: actions.SET_STEP, payload: Number(event.target.value) || 0
          })}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
      </form>
    </Panel>
  )
}

export default CounterPage
