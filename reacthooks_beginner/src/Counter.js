import React, { useState, useEffect } from "react"

export const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState("")
  const reset = () => {
    setCount(props.count)
  }
  useEffect(() => {
    console.log("This should only run once")
  }, [])

  useEffect(() => {
    // component did mount /component did update
    console.log("useEffect ran")
  }, [count])
  //[count] 클릭했을때만 발동
  return (
    <div>
      <p>
        The current {text || "count"} is {count}
      </p>
      <button onClick={() => setCount(count + 1)}> +1</button>
      <button onClick={() => setCount(count - 1)}> -1</button>
      <button onClick={reset}>reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

App.defaultProps = {
  count: 0,
}
