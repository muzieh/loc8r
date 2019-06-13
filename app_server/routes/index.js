const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers= require('../controllers/others');

console.log(ctrlLocations.index);

/* GET home page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//router.get('/', ctrlOthers.index);

router.get('/about', ctrlOthers.about);

module.exports = router;
