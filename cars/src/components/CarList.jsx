import {useSelector} from 'react-redux'

const CarList = () => {
  const cars = useSelector(state => state.cars.data)
  return (
    <div>CarList</div>
  )
}

export default CarList
