var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Home',
    page: 'home'
  });
});

/* GET home page. */
router.get('/film', function(req, res) {
  res.render('film', {
    title: 'film',
    page: 'film'
  });
});

/* GET home page. */
router.get('/guida-tv', function(req, res) {
  res.render('guida-tv', {
    title: 'guida-tv',
    page: 'guida-tv'
  });
});

module.exports = router;