var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const models = require('../database/models/index')
const SessionController = require('../controllers/SessionController')
const loginController = require('../controllers/loginController')

router.get('/' , SessionController.movies) ;

module.exports = router;
