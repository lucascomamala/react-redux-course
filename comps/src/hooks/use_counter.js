import { useState, useEffect } from 'react'

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount)
  const [step, setStep] = useState(1)

  useEffect(() => {
    console.log(count)
  }, [count])

  const increment = () => {
    setCount(count + step)
  }

  const decrement = () => {
    setCount(count - step)
  }

  return { count, increment, decrement }
}


export default useCounter
