const homeList = (req, res) => {
    res.render('locations-list', {title: 'Home'});
};

const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

const addReview = (req, res) => {
    res.render('new-review-form', {title: 'Add review'});
};


module.exports =  {
   homeList,
   locationInfo,
   addReview 
};