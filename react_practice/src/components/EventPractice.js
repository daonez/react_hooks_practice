import React, { useState } from "react"

// const EventPractice = () => {
//   const [username, setUsername] = useState("")
//   const [message, setMessage] = useState("")
//   const onChangeUsername = (e) => setUsername(e.target.value)
//   const onChangeMessage = (e) => setMessage(e.target.value)

//   const onClick = () => {
//     alert(username + ": " + message)
//     setUsername("")
//     setMessage("")
//   }
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick()
//     }
//   }
//   return (
//     <div>
//       <h1>Event handling</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="username"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="type anything"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>Submit</button>
//     </div>
//   )
// }

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  })
  const { username, message } = form
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextForm)
  }
  const onClick = () => {
    alert(username + ": " + message)
    setForm({
      username: "",
      message: "",
    })
  }
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
  }
  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="type anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  )
}

export default EventPractice
