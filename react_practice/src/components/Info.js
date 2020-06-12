import React, { useState, useEffect } from "react"


const Info = () => {
 
  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")

  const userName = (e) => {
    setName(e.target.value)
  }
  const userNickname = (e) => {
    setNickname(e.target.value)
  }

  useEffect(() => {
    console.log("typing")
    return () => {
      console.log("clean")
    }
  }, [name])

  return (
    <div>
      <div>
        <input value={name} onChange={userName} placeholder="Name" />
        <input value={nickname} onChange={userNickname} placeholder="Nickname" />
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
