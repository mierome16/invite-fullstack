import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPerson, getPosition, markGoing, markNotGoing, getNumbers, clear } from '../actions/example.actions';
import NotAttending from './NotAttending';
import Attending from './Attending';

export default function Homepage() {
const user = useSelector(appState => appState.users)
const going = useSelector(appState => appState.going)
const notgoing = useSelector(appState => appState.notgoing)

  useEffect(() => {
    getPerson()
    getNumbers()
  }, [])

  function handleNotAttending(e){
      //getPosition(e.target.value, 'notAttending')
      markGoing(user)
      getNumbers()
      getPerson()

  }

  function handleAttending(e){
      //getPosition(e.target.value, 'attending')
      markNotGoing(user)
      getNumbers()
      getPerson()
  }


  return (
    <div className="homepage">
      <div className="userinfo">
      <div className="links">
        <Link to="/attending"><div className="goinglink">Going {going}</div></Link>
        <Link to="notattending"><div className="nglink">Not Going {notgoing}</div></Link>
      </div>
      <div className="info">
        <img src={user.image}></img>
        <p className="username"> <strong>Name: </strong>{user.name}</p>
        <p><strong>Phone: </strong>{user.phone}</p>
        <p><strong>Email: </strong>{user.email}</p>
        <div>
          <button className="notgoingbut" value={user.id} onClick={handleAttending}>X</button>
          <button className="goingbut" value={user.id} onClick={handleNotAttending}> &#10003; </button>
        </div>
      </div>
      </div>
    </div>
  )
}
