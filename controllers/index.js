const Park = require('../models/park')

module.exports = {
  index
}

async function index(req, res) {
  const parks = await Park.find({});
  res.render("index", { title: "MyTrails", mapkey: process.env.MAPBOX_TOKEN, parks });
}
