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


const locationInfo = async (req, res) => {
    const locationId = req.params.locationId;
    if (!locationId) {
        ;
    }
    const url = `${apiOptions.server}/api/locations/${locationId}`;
    try {
        const locationResponse = await axios.get(url);
        const data = locationResponse.data;
        data.coords = {
            lng: data.coords[0],
            lat: data.coords[1]
        };
        renderDetailPage(req, res, data);
    } catch (err) {
        showError(req, res, err.response.status);
    }
};

const renderReviewForm = (req, res) => {
    res.render('new-review-form', {
        title: 'Add review',
        locationId: req.params.locationId
    });
};

const addReview = (req, res) => {
    renderReviewForm(req, res);
};

const doAddReview = (req, res) => {
    console.dir(req.query);
    res.render('new-review-form', {title: 'Add review'});
};


module.exports = {
    homeList,
    locationInfo,
    addReview,
    doAddReview
};