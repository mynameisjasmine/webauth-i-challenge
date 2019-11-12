const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');


router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
res.json({api: "It's working!", session: req.session })
});




module.exports = router;