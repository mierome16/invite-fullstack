import store from '../store'
import axios from 'axios'
import { getOverlappingDaysInRanges } from 'date-fns';

export function getPerson(){
  axios.get('/api/users').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_PERSON',
      payload: resp.data
    })
  })
  getAttending()
  getNotAttending()
}

export function getAttending(){
  axios.get('/api/attending').then(resp => {
    store.dispatch({
      type: 'GET_ATTENDING',
      payload: resp.data
    })
  })
}

export function getNotAttending(){
  axios.get('api/notattending').then(resp => {
    store.dispatch({
      type: 'GET_NOT_ATTENDING',
      payload: resp.data
    })
  })
}
export function markGoing(person) {
axios.post('/api/mark-invitee', {results: person, going: true}).then(resp => {
  console.log(resp.data)
})
}
export function markNotGoing(person) {
  axios.post('/api/mark-invitee', {results: person, going: false}).then(resp => {
    console.log(resp.data)
  })
}

export function getPosition(id, position){
  axios.patch('/api/users/' + id, {position: position}).then(resp => {
    getPerson()
  })
}
export function getNumbers() {
  axios.get('/api/numbers').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_NUMBERS',
      payload: resp.data
    })
  })
}