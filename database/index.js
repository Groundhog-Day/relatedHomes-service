var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to airbnb database!');
});

var ImageSchema = new Schema({id: Number, imageLink: String});

var RelatedSchema = new mongoose.Schema({
  id: Number,
  images: [ImageSchema],
  homeCategory: String,
  bedCount: Number,
  listingTitle: String,
  starCount: Number,
  reviewCount: Number,
  pricePerNight: Number
});
