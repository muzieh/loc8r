const express = require('express');
const controllerLocations = require('../controllers/locations');
const others = require('../controllers/others');
const router = express.Router();


/* GET home page. */
router.get('/', controllerLocations.homepage);
router.get('/location', controllerLocations.details);
router.get('/location/review/new', controllerLocations.addReview);

router.get('/about', others.about);

module.exports = router;
