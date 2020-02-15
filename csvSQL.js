// Output is a CSV file to seed Database
const fs = require('fs');
const faker = require('faker');
const zipcodes = require('zipcodes');
const categories = ['Entire Place', 'Private Room', 'Shared Room']

const line1 = 'listingId, beds, title, category, stars, reviewCount, pricePerNight, address1, address2, city, state, zip\n';
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
const zipObj = () => zipcodes.random();
//const zip

//userID
const user_id = () => Math.floor(Math.random()*1000000);

let csvText = 'home_id,beds,title,user_id,category,stars,reviewCount,pricePerNight,city,state,zip\n';
for (let i = 1; i <= 1000000; i++) {
  const zip = 94110;
  const city = 'San Francisco'
  const state = 'CA'
  csvText += `${i},${beds()},${title()},${user_id()},${category()},${stars()},${reviewCount()},${price()},${city},${state},${zip}\n`;
}
const writeCsv = fs.createWriteStream('./testCsv.csv');
// write head
writeCsv.write('home_id,beds,title,user_id,category,stars,reviewCount,pricePerNight,city,state,zip\n','utf-8');

function writeTenMillionRows(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      const data = `${id},${username},${avatar}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}


file.write(csvText);
file.end();
// fs.writeFile('./testCsv.csv',csvText, (err)=> {
//   if (err) {
//     console.log('error');
//   } else {
//     console.log('write this!')
//   }
// })

/*
Insert into POSTGRESQL with the following
COPY homes(listingid, beds, title, category, stars, reviewCount, pricePerNight, city, state, zip)
FROM '/Users/robertlopez/Desktop/relatedHomes-service/testCsv.csv' DELIMITER ',' CSV HEADER;
*/