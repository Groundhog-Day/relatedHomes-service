const fs = require('fs');

const writeLine = require('./csvGenerators/csvLine.js/index.js');

const images = [
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image1/image.jpg', 
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image2/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image3/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image4/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image5/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image6/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image7/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image8/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image9/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image10/image.jpg',
]
const getImageArray = () => {
  const imageArray = [];
  const noImages = 1+ Math.floor(Math.random()*15)
  for (var i = 0; i < noImages; i++) {
    imageArray.push(images[Math.floor(Math.random()*images.length)])
  }
  return imageArray;
}

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const array = getImageArray();
      const data = writeLine(id, array);
      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

const writeFile = fs.createWriteStream('./cassandra.csv')
const line1 = 'home_id,beds,title,user_id,category,stars,reviewCount,pricePerNight,city,state,zip\n';
writeFile.write(line1);

writeTenMillionTimes(writeFile, 'utf-8', ()=>{
  writeFile.end()
})