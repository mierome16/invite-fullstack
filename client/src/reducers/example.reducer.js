const initialState = {
  users: {},
  attending: [],
  notAttending: [],
  going: 0,
  notgoing: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PERSON':
      return {...state, users: action.payload}
    case 'GET_ATTENDING':
     return {...state, attending: action.payload}
    case 'GET_NOT_ATTENDING':
      return {...state, notAttending: action.payload}
    case 'GET_POSITION':
      return{}
    case 'GET_NUMBERS':
      return {...state, going: action.payload.going, notgoing: action.payload.notgoing}
    default:
      return state
  }
}