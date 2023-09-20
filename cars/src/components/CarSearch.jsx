import { useDispatch, useSelector } from "react-redux"

import { setSearchTerm } from "../store"

const CarSearch = () => {
  const dispatch = useDispatch()

  const searchTerm = useSelector(state => state.cars.searchTerm)

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={e => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
    </div>
  )
}

export default CarSearch
