const router = require('express').Router();
const Users = require('./users-model.js')
const restricted = require('../api/restricted-middleware.js')



router.get('/', restricted, (req, res) => {
Users.find()
.then(users => {
res.status(200).json(users)
})
.catch(err => {
console.log(err);
res.status(500).json({error: "Failed to retrieve users"})
 })
})

module.exports = router;