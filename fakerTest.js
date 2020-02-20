const faker= require('faker');
const zipCodes = require('zipcodes')
const fs = require('fs')

const getZip  = () => zipCodes.random();
const zipArray = []

const image = faker.image.dataUri()
console.log(image)

// const arrayFile = fs.createWriteStream('./zipArray.js');
// for (i = 0; i <= 100000; i++) {
//   zipArray.push(getZip())
// }
// arrayFile.write(JSON.stringify(zipArray));

