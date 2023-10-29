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
    res.render('trails/index', { title: 'All Trails', trails });
}