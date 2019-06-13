const homeList = (req, res) => {
    res.render('index', {title: 'from main.js'});
};

const locationInfo = (req, res) => {
    res.render('index', {title: 'from main.js'});
};

const addReview = (req, res) => {
    res.render('index', {title: 'from main.js'});
};


module.exports =  {
   homeList,
   locationInfo,
   addReview 
};