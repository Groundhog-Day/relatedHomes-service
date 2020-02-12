const db = require('./index.js');
const mongoose = require('mongoose');


const saveHome = (
  listingId, 
  images, 
  homeCategory, 
  bedCount,
  listingTitle, 
  starCount,
  reviewCount,
  pricePerNight ) => {

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
  
  newHome.save((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Saved!');
  })
}

// Get largest index

// Increment Item Id 

// Save to Schema

module.exports = saveHome; 