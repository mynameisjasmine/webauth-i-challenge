const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js')

//POST to register a user
router.post('/register', (req, res) => {
//  let credentials = req.body;
const { username, password } = req.body;
//  const hash = bcrypt.hashSync(credentials.password, 12);
//  credentials.password = hash;
 
 Users.add({username, password: bcrypt.hashSync(password, 12)})
 .then(saved => {
res.status(201).json(saved)
 })
 .catch(err => {
 console.log(err);
res.status(500).json({error: "Failed to register user"})
 })
});

//POST to login
router.post('/login', (req, res) => {
const { username, password } = req.body;

Users.findByUsername(username)
 .then(user => {
 if(user && bcrypt.compareSync(password, user.password)) {
    
  res.status(200).json({message: "User is logged in"})
 } else {
    res.status(401).json({message: "Invalid password"})   
 }

 })
 .catch(err => {
 console.log(err);
res.status(500).json({error: "Failed to login"})
 })
})


module.exports = router;