import { useDispatch, useSelector } from "react-redux"

import { setName, setCost, addCar } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()

  const { name, cost } = useSelector(state => state.form)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({ name, cost }))
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">
        Add a car
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={e => dispatch(setName(e.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ''}
              onChange={e => dispatch(setCost(parseInt(e.target.value) || 0))}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
