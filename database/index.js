var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to airbnb database!');
})

var ImageSchema = new Schema({id: Number, image_link: String});

var relatedSchema = new mongoose.Schema({
  id: Number,
  images: [ImageSchema],
  home_category: String,
  bed_count: Number,
  listing_title: String,
  star_count: Number,
  review_count: Number,
  price_per_night: Number
});