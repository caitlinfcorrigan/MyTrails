const Review = require('../models/review');

module.exports = {
    index,
    edit,
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
        // Form passes the trail id and name using hidden inputs
        console.log('trying to submit review')
        console.log(req.user)
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

async function deleteReview(req, res) {
    try {
        await Review.deleteOne({_id: req.params.id});
    } catch (e){
        console.log(e.message);
    }
    res.redirect('/reviews');
}

async function update(req, res) {
    console.log(req.body)
    const r = await Review.findById(req.params.id);
    try {
        await Review.findOneAndUpdate(r, {reviewText: req.body.text});
    } catch (e) {
        console.log(e.message);
    }
    res.redirect(`/reviews`);
}

async function edit(req, res) {
    const r = await Review.findById(req.params.id);
    res.render('reviews/edit', {title: `Edit Review for ${r.trailName}`, review: r} );
}

async function index(req, res) {
    const userReviews = await Review.find({ user: res.locals.user}).exec();
    res.render('reviews/index', { title: 'My Reviews', userReviews});
}