
// Output is a CSV line
const fs = require('fs');
const faker = require('faker');
const zipCodes = require('./zipArray.js');
const categories = ['Entire Place', 'Private Room', 'Shared Room']

const numberOfZipCodes = zipCodes.length;


//Generate listingId, i
const i = 3;
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




const writeLine = (id) => {
  const zipTotal = zipObj()
  const zip = zipTotal.zip;
  const city = zipTotal.city;
  const state = zipTotal.state;
  return `${id},${beds()},${title()},${user_id()},${category()},${stars()},${reviewCount()},${price()},${city},${state},${zip}\n`;
}

module.exports = writeLine;

// console.log(writeLine(1));
// const writeCsv = fs.createWriteStream('./testCsv.csv');
// // writeCsv.write(csvText);
// // write head
// writeCsv.write('home_id,beds,title,user_id,category,stars,reviewCount,pricePerNight,city,state,zip\n','utf-8');
// const writeData = (writer, encoding, callback) => {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const data = writeLine(id);
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
// // see if we should continue, or wait
// // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
// // had to stop early!
// // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// writeData(10000000, writeCsv, 'utf-8', () => {
//   writeCsv.end();
// })


// file.write(csvText);
// file.end();
// fs.writeFile('./testCsv.csv',csvText, (err)=> {
//   if (err) {
//     console.log('error');
//   } else {
//     console.log('write this!')
//   }
// })

/*
Insert into POSTGRESQL with the following
COPY homes(home_id, beds, title, user_id, category, stars, reviewCount, pricePerNight, city, state, zip)
FROM '/Users/robertlopez/Desktop/relatedHomes-service/primary.csv' DELIMITER ',' CSV HEADER;
*/

/*
Insert into CASSANDRA with the following
COPY relatedhomes.homes_by_location(id, beds, title, user_id, category, stars, reviewCount, pricePerNight, city, state, zip)
FROM '/Users/robertlopez/Desktop/relatedHomes-service/primarySmall.csv' With Header = True;
*/