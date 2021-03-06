var express = require('express');
var router = express.Router();

// Require Controllers
const xhrController = require('../controllers/xhrController');

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: 'earthquakeMapper', key: process.env.GOOGLE_API_FRONT}));

router.post('/xhr/placeautocomplete', xhrController.placeAutocomplete)

module.exports = router;
