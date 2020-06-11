import React, { useContext } from "react"
import NotesContext from "../context/notes-context"
import useMousePostion from "../hooks/useMousePostion"

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  const position = useMousePostion()
  const removeNote = (title) => {
    dispatch({
      type: "REMOVE_NOTE",
      title,
    })
  }
  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x},{position.y}
      </p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  )
}

export { Note as default }
