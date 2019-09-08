const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsListByDistance = (req, res) => { 
    res
        .status(200)
        .json({a:10, b:20});
};
const locationsCreate = (req, res) => { };
const locationsReadOne = (req, res) => { };
const locationsUpdateOne = (req, res) => { };
const locationsDeleteOne = (req, res) => { };

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};