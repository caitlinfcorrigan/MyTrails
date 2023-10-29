const User = require('../models/user');
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
        console.log(req);
        // Create the new review in db
        const review = await Review.create(req.body);
        // Assign the trail's OID to the .trail param - not pushing because it's not an array
        review.trail = 
        // Assign the user's OID to the .user param
        review.user =
        // Get the current trail for the redirect
        const trail = await Trail.findById(req.params.id);
        res.redirect(`/trails/${trail._id}`);
    } catch (err) {
        console.log(err);
        res.render(`/trails/${trail._id}`, { errorMsg: err.message });
    }
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