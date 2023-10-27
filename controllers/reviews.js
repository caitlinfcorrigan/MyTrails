const User = require('../models/user');
const Review = require('../models/review');

module.exports = {
    index,
    update,
    delete: deleteReview
}

function deleteReview(req, res) {

}

function update(req, res) {

}

async function index(req, res) {
    const currUser = await User.findById(res.locals.user);
    res.render('reviews/index', { title: 'My Reviews'}, currUser)
}