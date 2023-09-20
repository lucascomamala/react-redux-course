import { useDispatch, useSelector } from "react-redux"

import { setName, setCost } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()

  const { name, cost } = useSelector(state => state.form)

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">
        Add a car
      </h4>
      <form>
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
      </form>
    </div>
  )
}

export default CarForm
