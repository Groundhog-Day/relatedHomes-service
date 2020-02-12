const db = require('./index.js');
const mongoose = require('mongoose');

//function takes inputs need for a schema and saves an entry based
// on schema in index.js
const saveHome = (
  listingId, 
  images, 
  homeCategory, 
  bedCount,
  listingTitle, 
  starCount,
  reviewCount,
  pricePerNight ) => {
  // Set up Schema
  const Home = mongoose.model('Home', db.RelatedSchema);
  const newHome = new Home({
    'listingId': listingId, 
    'images': images, 
    'homeCategory': homeCategory, 
    'bedCount': bedCount,
    'listingTitle': listingTitle, 
    'starCount': starCount,
    'reviewCount': reviewCount,
    'pricePerNight': pricePerNight
  })
  // Save entry
  newHome.save((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Saved!');
  })
}

module.exports = saveHome; 