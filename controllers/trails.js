const Trail = require('../models/trail');
const Review = require('../models/review');

module.exports = {
    index,
    show,
    create,
    new: newTrail,
    createTrail
}

async function createTrail(req, res) {
    console.log("trying to createTrail");
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

async function show(req, res) {
    // Fails when .populate('review') is added & no reviews exist
    const trail = await Trail.findById(req.params.id).populate('reviews');
    console.log(trail);
    // Add code to calculate average review and pass into res.render
    res.render('trails/show', { title: `${trail.name}'s Reviews`, trail});
}

async function index(req, res) {
    const trails = await Trail.find({});
    res.render('trails/index', { title: 'All Trails', trails });
}