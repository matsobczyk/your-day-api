const router = require('express').Router();
const weatherController = require('../controllers/api/weather');
const auth = require('../middlewares/auth');

router.get('/:city',auth.auth, weatherController.getWeather);

module.exports = router;