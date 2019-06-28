const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sideMessage: 'Loc8r help you find places to work when out an doubt.',
        locations: [
            {
               name: 'Starcups',
               rating: 3,
               address: '125 High Street, Reading, RG6 1PS',
               distance: '100m',
               facilities: [
                   'Hot drinks', 'Food', 'Premium wifi'
               ] 
            },
            {
                name: 'Hot smot',
                rating: 2,
                address: '125 High Street, Reading, RG6 1PR',
                distance: '500m',
                facilities: [
                    'Hot drinks', 'Food', 'Premium wifi', 'Pool'
                ] 
                
            }
        ]
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