import { useState } from "react"

import BookEdit from "./BookEdit"

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} />
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? "Cancel" : "Edit"}
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
