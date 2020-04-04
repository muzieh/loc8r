const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://heroku";
}

const renderHomepage = (req, res, locations) => {
    let message;
    if (!(locations instanceof Array)) {
        message = "API lookup error";
        locations = [];
    } else {
        if (!locations.length) {
            message = "No places found nearby";
        }
    }
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sideMessage: 'Loc8r help you find places to work when out an doubt.',
        locations,
        message
    });
};

const formatDistance = distance => {
    let thisDistance;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
};

const homeList = async (req, res) => {
    const lng = -0.969758;
    const lat = 51.551342;
    const url = `${apiOptions.server}/api/locations?lng=${lng}&lat=${lat}`;
    try {
        const locationsResponse = await axios.get(url);
        let data = locationsResponse.data.map(item => {
            return {
                ...item,
                distance: formatDistance(item.distance)
            };
        });
        renderHomepage(req, res, data);
    } catch (err) {
        console.log('home List error');
        console.log(err);
        console.dir(err);
        if (err.response === 404) {
            renderHomepage(req, res, []);
        } else {
            renderHomepage(req, res,);
        }
    }
};


function renderDetailPage(req, res, location) {
    res.render('location-info', {
        title: location.name,
        pageHeader: {},
        location: location,
        reviews: location.reviews,
        sideText: {
            line1: 'Starcups is on Loc8r because it has accessible wifi and space to\n' +
                '                sit down with your laptop and get some work done.',
            line2: 'If you\'ve been and you like it - or if you don\'t - please leave\n' +
                '                a review to help other people just like you.',
        },
        googleMapsKey: "AIzaSyB8ZfaJ79cVCWKdpT0SNx_iXhLmvM75QN4"
    });
}

const showError = (req, res, status) => {
    console.log(status);
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, page not found';
        content = 'Oh dear. Looks like you can\'t find this page. Sorry.';
    } else {
        title = `${status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};

async function getLocationInfo(locationId) {
    const url = `${apiOptions.server}/api/locations/${locationId}`;
    const locationResponse = await axios.get(url);
    const location = locationResponse.data;
    location.coords = {
        lng: location.coords[0],
        lat: location.coords[1]
    };
    return location;
}

const locationInfo = async (req, res) => {
    const { locationId } = req.params;
    try {
        const location = await getLocationInfo(locationId);
        renderDetailPage(req, res, location);
    } catch (err) {
        showError(req, res, err.response.status);
    }
};

const renderReviewForm = (req, res, location) => {
    const {name, id} = location;
    res.render('location-review-form', {
        title: `Review ${name} on Loc8r`,
        pageHeader: `Review ${name}`,
        locationId: id,
        error: req.query.err
    });
};

const addReview = async (req, res) => {
    const {locationId} = req.params;
    try {
        const location = await getLocationInfo(locationId);
        renderReviewForm(req, res, location);
    } catch (exp) {
        showError(req, res, exp.response.status);
    }
};

const doAddReview = async (req, res) => {
    const locationId = req.params.locationId;
    const reviewData = {
        author: req.body.name,
        rating: parseInt(req.body.rating),
        reviewText: req.body.review
    };

    if (!reviewData.author || !reviewData.rating || !reviewData.reviewText) {
        res.redirect(`/location/${locationId}/review/new?err=val`);
        return;
    }

    const url = `${apiOptions.server}/api/locations/${locationId}/reviews`;
    try {
        const response = await axios.post(url, reviewData);
        res.redirect(`/location/${locationId}`);
    } catch (exp) {
        const {status, data: {name}} = exp.response;
        if(status === 400 && name && name == "ValidationError") {
            res.redirect(`/location/${locationId}/review/new?err=val`);
        } else {
            showError(req, res, exp.response.status);
        }
    }
};


module.exports = {
    homeList,
    locationInfo,
    addReview,
    doAddReview
};