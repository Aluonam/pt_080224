import React, { useState } from 'react'

export const Session = () => {

    const [user, setUser] = useState({
        userName: '',
        userPass: ''
    })
  return (
    <div>Session
        <h3>Name:</h3>
        <input type='text'></input>
        <h3>Password:</h3>
        <input type='password'></input>
    </div>
  )
}
