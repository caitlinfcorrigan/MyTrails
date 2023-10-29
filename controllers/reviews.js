const User = require('../models/user');
const Trail = require('../models/trail');
const Review = require('../models/review');

module.exports = {
    index,
    update,
    delete: deleteReview,
    create
}

// Create new review
async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        // Add user info to review
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        // Create the new review in db
        const newReview = await Review.create(req.body);
        // Redirect back to trail - reviews, trail, and users
        res.redirect(`/trails/${newReview.trail}`);
    } catch (err) {
        console.log(err);
        res.render(`/trails`, { errorMsg: err.message });
    }
}

function deleteReview(req, res) {
    console.log("deleteReview placeholder")
}

function update(req, res) {
    console.log("update review placeholder");
}

async function index(req, res) {
    const userReviews = await Review.find({ user: res.locals.user}).exec();
    res.render('reviews/index', { title: 'My Reviews', userReviews});
}