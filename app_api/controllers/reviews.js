const mongoose = require('mongoose');
const Loc = mongoose.model('Location');


const reviewsReadOne = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .select('name reviews')
        .exec((err, location) => {
            if (!location) {
                return res
                    .status(404)
                    .json({"message": "location not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err)
            }

            if (location.reviews && location.reviews.length > 0) {
                const review = location.reviews.id(req.params.reviewid);
                if (!review) {
                    return res
                        .status(400)
                        .json({"message": "review not found"});
                } else {
                    let response = {
                        name: location.name,
                        id: req.params.locationid,
                        review
                    };

                    return res
                        .status(200)
                        .json(response);
                }
            } else {
                return res
                    .status(404)
                    .json({"message": "review not found"});
            }
        });
};

const doSetAverageRating = (location) => {
    if (location.reviews && location.reviews.length > 0) {
        const count = location.reviews.length;
        const total = location.reviews.reduce((acc, {rating}) => {
            return acc + rating;
        }, 0);

        location.rating = parseInt(total / count, 10);
        location.save((err, location) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`average rating updated to ${location.rating}`)
            }
        });

    }
};

const updateAverageRating = (locationId) => {
    Loc
        .findById(locationId)
        .select("rating reviews")
        .exec((err, location) => {
            if (!err) {
                doSetAverageRating(location);
            }
        });
};

const doAddReview = (req, res, location) => {
    const {author, rating, reviewText} = req.body;
    location.reviews.push({
        author,
        rating,
        reviewText
    });
    location.save((err, location) => {
        if (err) {
            res
                .status(400)
                .json({message: err.toString()})
        } else {
            updateAverageRating(location._id);
            const thisReview = location.reviews.slice(-1).pop();
            res
                .status(201)
                .json(thisReview);
        }
    });
};

const reviewsCreate = (req, res) => {
    const locationId = req.params.locationid;
    if (locationId) {
        Loc
            .findById(locationId)
            .select("reviews")
            .exec((err, location) => {
                if (err) {
                    res
                        .status(400)
                        .json({message: err.toString()});
                }
                doAddReview(req, res, location);
            });
    } else {
        res
            .status(404)
            .json({message: "location not found"});
    }
};

const reviewsUpdateOne = (req, res) => {
    if (!req.params.locationid || !req.params.reviewid) {
        res
            .status(404)
            .json({message: "not found, locationid and reviewid mandatory"})
    }
    Loc
        .findById(req.params.locationid)
        .select('reviews')
        .exec((err, location) => {
            if (!location) {
                res
                    .status(404)
                    .json({message: "location not found"});

            } else if (err) {
                res
                    .status(400)
                    .json({message: err.toString()});
            }
            if (location.reviews || location.reviews.length > 0) {
                const thisReview = location.reviews.id(req.params.reviewid);
                if (!thisReview) {
                    res
                        .status(404)
                        .json({message: "review not found"});
                } else {
                    const {author, rating, reviewText} = req.body;
                    thisReview.author = author;
                    thisReview.rating = rating;
                    thisReview.reviewText = reviewText;
                    location.save((err, location) => {
                        if (err) {
                            res
                                .status(400)
                                .json({message: err.toString()})
                        } else {
                            updateAverageRating(location._id);
                            res
                                .status(200)
                                .json(thisReview);
                        }
                    })
                }
            } else {
                res
                    .status(404)
                    .json({message: "no reviews to update"});
            }


        })
};

const reviewsDeleteOne = (req, res) => {
    if (!req.params.locationid || !req.params.reviewid) {
        res
            .status(404)
            .json({message: "no review to delete locationid na reviewid is required"})
    }
    Loc
        .findById(req.params.locationid)
        .select('reviews')
        .exec((err, location) => {
            if (!location) {
                res
                    .status(404)
                    .json({message: "no review found"})
            } else if (err) {
                res
                    .status(400)
                    .json({message: err.toString()})
            }

            if (location.reviews && location.reviews.length > 0) {
                if (!location.reviews.id(req.params.reviewid)) {
                    res
                        .status(404)
                        .json({message: "Reiview not found"});
                }
                location.reviews.id(req.params.reviewid).remove();
                location.save((err, location) => {
                    if(err) {
                        res
                            .status(400)
                            .json({message: err.toString()})
                    } else {
                        updateAverageRating(location._id);
                        res
                            .status(204)
                            .json(null);
                    }
                });
            } else {
                res
                    .status(404)
                    .json({message: "no review to remove"});
            }
        });
};

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};