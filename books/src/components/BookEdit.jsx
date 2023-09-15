import { useState } from "react"

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(book.id, title)
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" type="text" value={title} onChange={handleChange} autoFocus />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit
