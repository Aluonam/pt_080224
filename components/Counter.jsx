import React, { useState } from 'react'
import style from './Counter.module.css'

const Counter = () => {

    const [number, setNumber] = useState(0)
  return (
    <div>
        {number}
        <button onClick={()=>{setNumber(number+1)}} value={number} className={style.btnYellow}>+</button>
        <button onClick={()=>{setNumber(number-1)}} value={number}>-</button>

    </div>
  )
}

export default Counter