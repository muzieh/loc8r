const homepage = (req, res) => {
    res.render('home', {title: "homepage"})
};

const details = (req, res) => {
    res.render('details', {title: "details"})
};

const addReview = (req, res) => {
    res.render('add_review', {title: "Add Review"})
};



module.exports = {
    homepage,
    details,
    addReview
};