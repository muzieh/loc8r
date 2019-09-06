const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: { type: String, required: true },
    opening: String,
    closing: String,
    closed: { type: Boolean, required: true }
});

const reviewSchema = new mongoose.Schema({
    author: { type: String, required: true },
    createdOn: { type: Date, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    reviewText: String
});

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, 'default': 0, min: 0, max: 5 },
    facilities: [String],
    coords: { type: {type: String}, coordinates: [Number] },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

locationSchema.index({coords: '2dsphere'});

mongoose.model('Location', locationSchema, 'Locations');