import { useSelector, useDispatch } from 'react-redux'

import { removeCar } from '../store'

const CarList = () => {
  const dispatch = useDispatch()

  const cars = useSelector(({ cars: { data, searchTerm } }) =>
    data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const renderedCars = cars.map(car => (
    <div key={car.id} className="panel">
      <p>
        <strong>{car.name}</strong> - ${car.cost}
      </p>
      <button
        className="button is-danger"
        onClick={() => { dispatch(removeCar(car.id)) }}
      >
        Delete
      </button>
    </div>
  ))

  return (
    <div className='car-list'>
      {renderedCars}
      <br />
    </div>
  )
}

export default CarList
