import { useState } from "react"

import './SearchBar.css'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term:</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar
