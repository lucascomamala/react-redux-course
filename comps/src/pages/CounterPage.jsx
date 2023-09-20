import { useState } from 'react'

import Panel from '../components/Panel'
import Button from '../components/Button'

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const [step, setStep] = useState(1)

  const increment = () => {
    setCount(count + step)
  }

  const decrement = () => {
    setCount(count - step)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {count}</h1>
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
          value={step}
          onChange={e => setStep(parseInt(e.target.value) || 0)}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
      </form>
    </Panel>
  )
}

export default CounterPage
