const Park = require('../models/park');
const Trail = require('../models/trail');
const Review = require('../models/review');

module.exports = {
    index,
    show,
    new: newTrail,
    create
}

async function create(req, res) {
    console.log(req.body)
    const park = await Park.findById(req.body.park)
    console.log(park)
    park.trails.push(req.body)
    try {
        await park.save();
        // ADD await TO RETRIEVE ALL TRAILS
        res.redirect(`/trails/${trail._id}`);
    } catch (err) {
        const parks = await Park.find({});
        console.log(err);
        res.render('trails', { errorMsg: err.message, title: "All Trails", parks});
    }
}


async function newTrail(req, res) {
    const parks = await Park.find({});
    res.render('trails/new', {title: 'Add Trail', errorMsg: '', parks });
}

async function show(req, res) {
    // Fails when .populate('review') is added & no reviews exist
    const trail = await Trail.findById(req.params.id);
    const reviews = await Review.find({ trail: trail}).exec();
    // Add code to calculate average review and pass into res.render
    res.render('trails/show', { title: `${trail.name}'s Reviews`, trail, reviews});
}

async function index(req, res) {
    const parks = await Park.find({})
    // console.log(trails)
    let trails = []
    parks.forEach(async function (p){
        trails.push(await p.populate("trails"))

    })
    console.log(trails)
    res.render('trails/index', { title: 'All Trails', trails });
}