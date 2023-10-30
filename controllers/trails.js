const Trail = require('../models/trail');
const Review = require('../models/review');

module.exports = {
    index,
    show,
    new: newTrail,
    create
}

async function create(req, res) {
    try {
        const trail = await Trail.create(req.body);
        // Redirect still not working - trail created
        res.redirect(`/trails/${trail._id}`, {title: "Trails"});
    } catch (err) {
        console.log(err);
        res.render('trails/new', { errorMsg: err.message, title: "New Trails" });
    }
}

async function newTrail(req, res) {
    res.render('trails/new', {title: 'Add Trail', errorMsg: '', title: "Trails"});
}

async function show(req, res) {
    // Fails when .populate('review') is added & no reviews exist
    const trail = await Trail.findById(req.params.id);
    const reviews = await Review.find({ trail: trail}).exec();
    // Add code to calculate average review and pass into res.render
    res.render('trails/show', { title: `${trail.name}'s Reviews`, trail, reviews});
}

async function index(req, res) {
    const trails = await Trail.find({});
    const averages = {};
    trails.forEach(async function (t){
        const tReviews = await Review.find({ trail: t._id })
        let rating = 0;
        let count = 0;
        tReviews.forEach(function(r) {
            count++;
            rating += r.rating;
        });
        let tRating = '';
        if (count !== 0){
            tRating = rating/count;
        } else {
            tRating = "None";
        }
        averages[t.id] = tRating;
    });
    // Why isn't averages printing or passing?
    console.log(`average in loop ${averages}`)
    res.render('trails/index', { title: 'All Trails', trails, averages });
}