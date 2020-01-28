/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
const request = require('request');
const pictures = require('./homePictures.js');

mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to airbnb database!');
});

const RelatedSchema = new mongoose.Schema({
  id: Number,
  images: [],
  homeCategory: String,
  bedCount: Number,
  listingTitle: String,
  starCount: Number,
  reviewCount: Number,
  pricePerNight: Number,
});

const Home = mongoose.model('Home', RelatedSchema);

// Helper function for getting a random home type
const getRandomCategory = () => {
  const categories = ['Entire House', 'Entire Apartment', 'Entire Condominium', 'Entire Cottage', 'Entire Serviced Apartment', 'Tree House', 'Private Home', 'Loft', 'Hotel', 'Townhouse', 'Villa', 'Resort', 'Cabin']
  let random = Math.floor(Math.random() * Math.floor(categories.length));
  return categories[random];
};

// Helper function for gettin random numbers
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // maximum is exclusive/minimum is inclusive
};

// Helper function to get random set of pictures for database
const getRandomPictures = () => {
  const pics = pictures.pictures;
  const result = [];

  let numOfPics = getRandomInt(1, 11);

  for (var i = 0; i < numOfPics; i++) {
    let randomPic = getRandomInt(0, 104);
    if (!result.includes(pics[randomPic])) {
      result.push(pics[randomPic]);
    } else {
      i--;
    }
  }
  return result;
}

// Function to seed data into database
const seedData = () => {
  for (let i = 0; i < 100; i++) {
    const newHome = new Home({
      _id: mongoose.Types.ObjectId(),
      images: getRandomPictures(),
      homeCategory: getRandomCategory(),
      bedCount: getRandomInt(1, 11),
      listingTitle: faker.fake('{{commerce.productAdjective}} {{company.catchPhraseDescriptor}} Home!'),
      starCount: getRandomInt(1, 6),
      reviewCount: getRandomInt(0, 301),
      pricePerNight: (getRandomInt(40, 301)),
    });

    newHome.save((err) => {
      if (err) {
        console.log(err);
      }
      console.log('Saved!');
    });
  }
};

// Function to download 100 images
const downloadImages = () => {
  for (let i = 1; i < 101; i++) {
    request(
      {
        method: 'GET',
        uri: 'https://loremflickr.com/720/400/house',
        encoding: null,
      },
      (error, response, body) => {
        if (error) {
          console.log(error);
        }
        fs.writeFile(`./images/${i}.jpg`, body, (err) => {
          if (err) {
            console.log(err);
          }
        });
      },
    );
  }
};

const getRandomHome = (callback) => {
  let random = getRandomInt(1, 101);
  Home.findOne().skip(random).exec((err, home) => {
    if (err) {
      callback(err);
    }
    callback(null, home);
  });
}

module.exports = {
  getRandomHome,
};
