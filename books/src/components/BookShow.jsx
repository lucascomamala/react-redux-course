import { useState, useContext } from "react"

import BooksContext from "../context/books"
import BookEdit from "./BookEdit"

const BookShow = ({ book, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBookById } = useContext(BooksContext)

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className="book-show">
      <img 
        alt='books'
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? "Cancel" : "Edit"}
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
