/* eslint-disable no-console */
// const mongoose = require('mongoose');
// const faker = require('faker');
// const fs = require('fs');
// const request = require('request');
// const pictures = require('./homePictures.js');
// const saveHome = require('./save.js')


// mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to airbnb database!');
// });

// const RelatedSchema = new mongoose.Schema({
//   listingId: Number,
//   images: [],
//   homeCategory: String,
//   bedCount: Number,
//   listingTitle: String,
//   starCount: Number,
//   reviewCount: Number,
//   pricePerNight: Number,
// });

// const Home = mongoose.model('Home', RelatedSchema);

// const getMax = (callback) => Home.find((err, home)=> {
//   if (err) callback(err, null);
//   else callback(null, home[0].listingId)}).sort({listingId: -1}).limit(1);


// getMax((err, home) => console.log(err, home));

// // Helper function for getting a random home type
// const getRandomCategory = () => {
//   const categories = ['Entire House', 'Entire Apartment', 'Entire Condominium', 'Entire Cottage', 'Entire Serviced Apartment', 'Tree House', 'Private Home', 'Loft', 'Hotel', 'Townhouse', 'Villa', 'Resort', 'Cabin']
//   let random = Math.floor(Math.random() * Math.floor(categories.length));
//   return categories[random];
// };

// // Helper function for gettin random numbers
// const getRandomInt = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; // maximum is exclusive/minimum is inclusive
// };

// // Helper function to get random set of pictures for database
// const getRandomPictures = () => {
//   const pics = pictures.pictures;
//   const result = [];

//   let numOfPics = getRandomInt(5, 11);

//   for (var i = 0; i < numOfPics; i++) {
//     let randomPic = getRandomInt(0, 104);
//     if (!result.includes(pics[randomPic])) {
//       result.push(pics[randomPic]);
//     } else {
//       i--;
//     }
//   }
//   return result;
// }

// const getRandomStarCount = () => {
//   let randomNum = Math.floor(Math.random() * (6 * 100 - 1 * 100) + 1 * 100) / (1 * 100);
//   if (randomNum > 5) {
//     return 5;
//   }
//   return randomNum;
// }

// // Function to seed data into database
// const seedData = () => {
//   for (let i = 0; i < 100; i++) {
//       const home = {
//         listingId: i,
//         images: getRandomPictures(),
//         homeCategory: getRandomCategory(),
//         bedCount: getRandomInt(1, 11),
//         listingTitle: faker.fake('{{commerce.productAdjective}} {{company.catchPhraseDescriptor}} Home!'),
//         starCount: getRandomStarCount(),
//         reviewCount: getRandomInt(0, 301),
//         pricePerNight: getRandomInt(40, 301),
//       }
//       saveHome(home);
//   }

  
};

// Function to download 100 images
// const downloadImages = () => {
//   for (let i = 1; i < 101; i++) {
//     request(
//       {
//         method: 'GET',
//         uri: 'https://loremflickr.com/720/400/house',
//         encoding: null,
//       },
//       (error, response, body) => {
//         if (error) {
//           console.log(error);
//         }
//         fs.writeFile(`./images/${i}.jpg`, body, (err) => {
//           if (err) {
//             console.log(err);
//           }
//         });
//       },
//     );
//   }
// };

// const getHome = (callback, home) => {
//   Home.findOne({listingId : home}, (err, doc) => {
//     if (err) {
//       callback(err);
//     }
//     callback(null, doc);
//   });
// }

// const getThreeHomes = (callback) => {
//   let random = getRandomInt(0,101);
//   Home.find({}, null, {limit: 6, skip: random}, (err, list) => {
//     if(err) {
//       callback(err);
//     }
//     callback(null, list);
//   })
// }



// module.exports = {
//    getHome,
//    getThreeHomes,
//    seedData,
//    Home,
//    getMax
// };
