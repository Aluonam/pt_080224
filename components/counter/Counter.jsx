import React, { useState } from 'react'
import style from './Counter.module.css'

const Counter = () => {

    const [number, setNumber] = useState(0)
  return (
    <div  className={style.counter}>
        <div>{number}</div>
        <br/>
        <button onClick={()=>{setNumber(number+1)}} value={number} className={style.btnYellow}>+</button>
        <button onClick={()=>{setNumber(number-1)}} value={number} className={style.btnBlack}>-</button>

    </div>
  )
}

export default Counter