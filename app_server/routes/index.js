const express = require('express');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers= require('../controllers/others');
const router = express.Router();

console.log(ctrlLocations.index);

/* GET home page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//router.get('/', ctrlOthers.index);

router.get('/about', ctrlOthers.about);

module.exports = router;
