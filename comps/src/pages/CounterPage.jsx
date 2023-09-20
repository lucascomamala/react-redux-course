import { useState } from 'react'

import Panel from '../components/Panel'
import Button from '../components/Button'

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form>
        <label>By how much</label>
        <input
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
      </form>
    </Panel>
  )
}

export default CounterPage
