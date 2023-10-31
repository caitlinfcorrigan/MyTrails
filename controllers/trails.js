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