import React, { useState } from 'react'

export const Session = () => {

    const [user, setUser] = useState({
        userName: 'manoli',
        userPass: '123'
    })
  return (
    <div>Session
        
        <h3>Name:</h3>
        <input type='text' value={user.userName} onChange={(e)=>{setUser({...user, name: e.target.value})}}></input>
        <h3>Password:</h3>
        <input type='password' value={user.userPass} onChange={(e)=>{setUser({...user, pass: e.target.value})}}></input>

    </div>
  )
}
