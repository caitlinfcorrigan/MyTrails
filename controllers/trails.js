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
    // const trail = await Trail.findById(req.params.id);
    // const reviews = await Review.find({ trail: trail}).exec();
    
    // Find the trail's park
    const trail = Park.find({trails: req.params.id})
    console.log(trail.name)
    // Find the reviews

    res.render('trails/show', { title: `${trail.name}'s Reviews`, park, reviews});
}

async function index(req, res) {
    // How can you limit the number of parks or trails?
    const parks = await Park.find({})
    const trailsList = [];
    parks.forEach(async function (p){
        // Push the array of park's trails
        trailsList.push(p.trails)
    })
    // Flatten the array of trails for looping on the page
    const trails= trailsList.flat();
    res.render('trails/index', { title: 'All Trails', trails });
}