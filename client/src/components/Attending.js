import React, { useEffect } from 'react'
import { getAttending } from '../actions/example.actions';
import { useSelector } from 'react-redux'

export default function Attending() {
  const usersAttending = useSelector(appState => appState.attending)
console.log(usersAttending)
  useEffect(() => {
    getAttending()
  }, [])

  return (
    <div>
      <h1>Attending</h1>
      {usersAttending.map(user => (
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
