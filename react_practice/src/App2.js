import React, { useState } from "react"
import Info from "./components/Info"

const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? "hide" : "visible"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  )
}

export default App
