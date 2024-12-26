const router =require('express').Router();
const UserModel = require('../Models/user');
const {registerValidation,loginValidation} = require('../Middlewares/auth');
const {registerControl,loginControl} = require('../Controllers/auth');
router.post('/register',registerValidation,registerControl);

router.post('/login',loginValidation,loginControl
);

module.exports = router;