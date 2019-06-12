const express = require('express');
const controllerMain = require('../controllers/main');
const router = express.Router();

console.log(controllerMain.index);

/* GET home page. */
router.get('/', controllerMain.index);

module.exports = router;
