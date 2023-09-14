import React from 'react'

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit('cats')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  )
}

export default SearchBar
