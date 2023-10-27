const Trail = ('../models/trail');
const Review = ('../models/review');

module.exports = {
    index,
    show,
    create
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body.[key];
    }
    try {
        const review = await Review.create(req.body);
        trail.reviews.push(review._id);
        res.redirect(`/trails/${trail._id}`);
    } catch (err) {
        console.log(err);
        res.render(`/trails/${trail._id}`, { errorMsg: err.message });
    }
}

async function show(req, res) {
    const trail = await Trail.findById(req.params.id).populate('review');
    res.render('trails/show', { title: `${trail.name}'s Reviews`, trail});
}

async function index(req, res) {
    const trails = await Trail.find({});
    res.render('trails/index', { title: 'All Trails', trails });
}