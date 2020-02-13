const db = require('./index.js');
const mongoose = require('mongoose');

//function takes inputs on an object need for a schema and saves an entry based
// on schema in index.js
const saveHome = (home, callback = () => {}) => {
  // Set up Schema
  const Home = mongoose.model('Home', db.RelatedSchema);
  const newHome = new Home({
    'listingId': home.listingId, 
    'images': home.images, 
    'homeCategory': home.homeCategory, 
    'bedCount': home.bedCount,
    'listingTitle': home.listingTitle, 
    'starCount': home.starCount,
    'reviewCount': home.reviewCount,
    'pricePerNight': home.pricePerNight
  })
  // Save entry
  newHome.save((err) => {
    if (err) {
      console.log(err);
    }
    callback();
  })
}

module.exports = saveHome; 