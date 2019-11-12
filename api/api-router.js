const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');


router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
res.json({api: "It's working!"})
})

// router.post('/hash', (req, res) => { 
// //read the password from the body
// const password = req.body.password
// //hash the password using bcrypt
// const hash = bcrypt.hashSync(password, 12)
// //return it to the user in an object
// res.status(200).json({ password, hash })
// })


module.exports = router;