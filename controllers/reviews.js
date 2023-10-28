const User = require('../models/user');
const Review = require('../models/review');

module.exports = {
    index,
    update,
    delete: deleteReview
}

function deleteReview(req, res) {
    console.log("deleteReview placeholder")
}

function update(req, res) {
    console.log("update review placeholder");
}

async function index(req, res) {
    const currUser = res.locals.user;
    console.log(currUser)
    res.render('reviews/index', { title: 'My Reviews', currUser})
}