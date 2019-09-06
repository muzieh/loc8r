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
    res.render('location-info', {
        title: 'Location info',
        pageHeader: {
            
        },
        location: {
            name: 'Starcups',
            rating: 1,
            address: '12 High Street, Reading, RG6 1PS',
            distance: '100m',
            facilities: [
                'Hot drinks', 'Food', 'Premium wifi'
            ],
            coords: {lat: 51.455041, lng: -0.9690884},
            opening: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false,
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false,
            }, {
                days: 'Sunday',
                closed: true,
            }]
            
        },
        reviews: [
            {
                author: 'Marian Opania',
                createdOn: '14 February 2017',
                rating: 1,
                reviewText: 'Review 1'
                
            },
            {
                author: 'Zieleniak',
                createdOn: '30 July 2014',
                rating: 2,
                reviewText: 'Review 2' 
            }
        ],
        sideText: {
            line1: 'Starcups is on Loc8r because it has accessible wifi and space to\n' +
                '                sit down with your laptop and get some work done.',
            line2: 'If you\'ve been and you like it - or if you don\'t - please leave\n' +
                '                a review to help other people just like you.',
        }
    });
};

const addReview = (req, res) => {
    res.render('new-review-form', {title: 'Add review'});
};


module.exports = {
    homeList,
    locationInfo,
    addReview
};