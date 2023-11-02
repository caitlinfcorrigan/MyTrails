const Park = require('../models/park');
const Review = require('../models/review');

module.exports = {
    index,
    show,
    new: newTrail,
    create
}

async function create(req, res) {
    const park = await Park.findById(req.body.park);
    park.trails.push(req.body);
    try {
        await park.save();
        res.redirect('/trails');
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
    let park = await Park.find({
        trails: { $elemMatch: {_id: req.params.id}}
    })
    const trail = park[0].trails.id(req.params.id)
    // Find the reviews
    // const reviews = Review.trail.id(req.params.id)
    const reviews = await Review.find({trail: req.params.id})
    // Title in Tab renders as Undefined; works on page
    res.render('trails/show', { title: `${trail.name}'s Reviews`, park, trail, reviews});
}

async function index(req, res) {
    // How can you limit the number of parks and trails?
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