import React, { useState, useEffect } from "react"

const Counter = () => {
  const [value, setValue] = useState(0)

  const handleIncrease = () => {
    setValue(value + 1)
  }

  const handleDecrease = () => {
    setValue(value - 1)
  }
  const reset = () => {
    setValue(0)
  }
  useEffect(() => {
    console.log("useEffect start")
    return () => {
      console.log("clean")
    }
  }, [value])

  return (
    <div>
      <h3>
        The counter is <em>{value}</em>
      </h3>
      <button onClick={handleIncrease}> +1 </button>
      <button onClick={handleDecrease}> -1 </button>
      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default Counter
