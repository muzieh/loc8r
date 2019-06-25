const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        }
    });
};

const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

const addReview = (req, res) => {
    res.render('new-review-form', {title: 'Add review'});
};


module.exports = {
    homeList,
    locationInfo,
    addReview
};