import Button from '../components/Button'
import useCounter from '../hooks/use_counter'

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount)
  
  return (
    <>
      <h1>Count is {count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </>
  )
}

export default CounterPage
