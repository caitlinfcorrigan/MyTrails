const User = require('../models/user');
const Park = require('../models/park')
const Trail = require('../models/trail');
const Review = require('../models/review');

module.exports = {
    index,
    new: newPark,
    create
}

async function create(req, res) {
    // Need to put long/lat into an array and pass as location
    try {
        const park = await Park.create(req.body);
        res.redirect(`parks`);
    } catch (err) {
        console.log(err);
        res.render('parks', { errorMsg: err.message, title: "New Park" });
    }
}

async function newPark(req, res) {
    const park = await Park.findById(req.params.id);
    res.render('parks/new', {title: 'Add Park Address', errorMsg: '' , park});
}

async function index(req, res) {
    const parks = await Park.find({});
    res.render('parks/index', { title: 'All Parks', parks });
}