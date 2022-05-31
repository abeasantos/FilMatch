var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('perfil',{
    ...(req.session.usuario && {usuario:req.session.usuario})
  });
});

module.exports = router;