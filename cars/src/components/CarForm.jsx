import { useDispatch, useSelector } from "react-redux"

import { setName } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()
  
  const name = useSelector(state => state.form.name)

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
        </div>
      </form>
    </div>
  )
}

export default CarForm
