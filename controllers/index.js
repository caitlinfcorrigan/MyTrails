const Park = require('../models/park')

module.exports = {
  index
}

async function index(req, res) {
  const parks = await Park.find({});
  // console.log(geoData)
  res.render("index", { title: "MyTrails", mapkey: process.env.MAPBOX_TOKEN, parks });
}
