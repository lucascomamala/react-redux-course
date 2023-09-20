import { useSelector } from 'react-redux'

const CarList = () => {
  const cars = useSelector(state => state.cars.data)

  const renderedCars = cars.map(car => (
    <div key={car.id} className="card">
      <p>
        <strong>{car.name}</strong> - ${car.cost}
      </p>
      <button className="button is-danger" onClick={() => { }}>
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
