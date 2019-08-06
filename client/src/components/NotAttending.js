import React, { useEffect } from 'react'
import { getNotAttending } from '../actions/example.actions';
import { useSelector } from 'react-redux'

export default function Attending() {
  const usersNotAttending = useSelector(appState => appState.notAttending)
console.log(usersNotAttending)
  useEffect(() => {
    getNotAttending()
  }, [])

  return (
    <div>
      <h1>Attending</h1>
      {usersNotAttending.map(user => (
        <div className="userinfo">
          <div className="info">
        <img src={user.image}></img>
        <p className="username"> <strong>Name: </strong>{user.name}</p>
        <p><strong>Phone: </strong>{user.phone}</p>
        <p><strong>Email: </strong>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

