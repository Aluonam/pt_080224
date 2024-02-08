import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0)
  return (
    <div>
        {number}
        <button onClick={()=>{setNumber(number+1)}} value={number}>+</button>
        <button onClick={()=>{setNumber(number-1)}} value={number}>-</button>

    </div>
  )
}

export default Counter