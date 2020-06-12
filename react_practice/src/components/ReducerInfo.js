import React, { useReducer } from "react"
import useInputs from "../hooks/useInput"

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

const Info = () => {
  //custom hooks
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  })

  // const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" })
  const { name, nickname } = state
  // const onChange = (e) => {
  //   dispatch(e.target)
  // }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} placeholder="Name" />
        <input name="nickname" value={nickname} onChange={onChange} placeholder="Nickname" />
      </div>
      <div>
        <li>
          <strong>name:</strong>
          {name}
        </li>
        <li>
          <strong>nickname:</strong>
          {nickname}
        </li>
      </div>
    </div>
  )
}

export default Info
