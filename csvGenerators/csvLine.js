
// Output is a CSV line
const fs = require('fs');
const faker = require('faker');
const zipCodes = require('../zipArray.js');
const categories = ['Entire Place', 'Private Room', 'Shared Room']

const numberOfZipCodes = zipCodes.length;


//Generate RandomBeds from 0 - 16
const beds = () => Math.floor(17 * Math.random());
//Generate Random Title
const title = () => faker.lorem.words();
//Generate random Category
const category = () => categories[Math.floor(Math.random() * 3)];
//Stars
const stars = () => (4 + Math.random()).toFixed(1);
//ReviewCount 
const reviewCount = () => Math.floor(Math.random() * 300)
//Generate Random Price
const price = () => Math.floor(50 + (Math.random() * 500));
//Generate Random Zip
const zipObj = () => zipCodes[Math.floor(Math.random() * numberOfZipCodes)];
//const zip

//userID
const user_id = () => Math.floor(Math.random()*1000000);




const writeLine = (id, array) => {
  const zipTotal = zipObj()
  const zip = zipTotal.zip;
  const city = zipTotal.city;
  const state = zipTotal.state;
  if (array) {
    return `${id},${beds()},${title()},${user_id()},${category()},${stars()},${reviewCount()},${price()},${city},${state},${zip},"[${array}]"\n`
  }
  return `${id},${beds()},${title()},${user_id()},${category()},${stars()},${reviewCount()},${price()},${city},${state},${zip}\n`;
}

module.exports = writeLine;


/*
Insert into POSTGRESQL with the following
COPY homes(home_id, beds, title, user_id, category, stars, reviewCount, pricePerNight, city, state, zip)
FROM '/Users/robertlopez/Desktop/relatedHomes-service/primary.csv' DELIMITER ',' CSV HEADER;
*/

/*
Insert into CASSANDRA with the following
COPY relatedhomes.homes_images_by_location(id, beds, title, user_id, category, stars, reviewCount, pricePerNight, city, state, zip, images)
FROM '/Users/robertlopez/Desktop/relatedHomes-service/cassandra.csv' With Header = True;
*/