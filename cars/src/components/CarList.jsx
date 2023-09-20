import { useSelector, useDispatch } from 'react-redux'

import { removeCar } from '../store'

const CarList = () => {
  const dispatch = useDispatch()

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      cars: filteredCars,
      name: form.name,
    }
  })

  const renderedCars = cars.map((car) => {
    const match = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${match && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => { dispatch(removeCar(car.id)) }}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <br />
    </div>
  )
}

export default CarList
