import { useState, useEffect } from 'react'

import Button from '../components/Button'

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </>
  )
}

export default CounterPage
