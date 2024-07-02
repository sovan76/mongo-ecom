
const express = require('express');

const router = express.Router();

const authcontroller= require('../controllers/auth');

router.get('/login',authcontroller.getlogin);

router.get('/signup',authcontroller.getsignup);

router.post('/login',authcontroller.postlogin);

router.post('/signup',authcontroller.postsignup);
 
router.post('/logout',authcontroller.postlogout);

module.exports= router;