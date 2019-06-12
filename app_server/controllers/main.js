const index = (req, res) => {
    res.render('index', {title: 'from main.js'});
};

module.exports =  {
    index
};