import React, { useState } from "react"

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "봄" },
    { id: 2, text: "여름" },
    { id: 3, text: "가을" },
    { id: 4, text: "겨울" },
  ])
  const [inputText, setInputText] = useState("")
  const [nextId, setNextId] = useState(5)
  const onChange = (e) => setInputText(e.target.value)
  const onClick = () => {
    const newName = names.concat({
      id: nextId,
      text: inputText,
    })
    setNextId(nextId + 1)
    setNames(newName)
    setInputText("")
  }
  const onRemove = (id) => {
    const newName = names.filter((name) => name.id !== id)
    setNames(newName)
  }
  const nameList = names.map((name) => (
    <li key={name.id} onClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ))
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <ul>{nameList}</ul>
      <button onClick={onClick}>추가</button>
    </>
  )
}

export default IterationSample
