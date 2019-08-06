const router = require('express').Router()
const axios = require('axios')

/*
  code here
*/
const invite = {
  users: [],
  attending: [],
  notAttending: []
}

router.get("/users", (req, res, next) => {
  invite.users = []
  axios.get('https://randomuser.me/api/?results=100').then(resp => {
      let id = 1
      id++
      let user = resp.data.results.map(result => {
        return {
          id: id,
          image: result.picture.large,
          name: result.name.first + " " + result.name.last,
          phone: result.phone,
          email: result.email,
          position: 'unsure'
        }
      })
      invite.users = user
      res.json(user[0])
      
    })
})

router.patch('/users/:id', (req, res, next) => {
  const id = req.params.id
  const position = req.body.position

  let user = invite.users.find(person => id === person.id)
  user.position = position
  invite[position].push(user)
  invite.users = invite.users.filter(person => person.id !== id )

  res.json(user)
})
router.get('/numbers', (req, res, next) => {
  res.json({going: invite.attending.length, notgoing: invite.notAttending.length})
})
router.post('/mark-invitee', (req, res, next) => {
  
  if(req.body.going === true) {
    invite.attending.push(req.body.results)
    res.json(invite.attending)
  } else {
    invite.notAttending.push(req.body.results)
    res.json(invite.notAttending)
  }
})
router.get('/users/:id', (req, res, next) => {
	const id = req.params.id

	const user = invite.users.find(person => person.id === id)

	res.json(user)
})
router.get('/attending', (req, res, next) => {
	res.json(invite.attending)
})

router.get('/notattending', (req, res, next) => {
	res.json(invite.notAttending)
})


module.exports = router