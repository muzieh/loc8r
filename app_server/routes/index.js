const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers= require('../controllers/others');

console.log(ctrlLocations.index);

/* GET home page. */
router.get('/', ctrlLocations.homeList);
router.get('/location/:locationId', ctrlLocations.locationInfo);
router
    .route('/location/:locationId/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

//router.get('/', ctrlOthers.index);

router.get('/about', ctrlOthers.about);

module.exports = router;
