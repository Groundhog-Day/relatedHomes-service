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

const randomImageUrl = () => images[Math.floor(Math.random() * images.length)]


const fs = require('fs');


const writeLine = (id, homeId, rank) => `${id}, ${randomImageUrl()}, ${rank}, ${homeId}\n`

function writeFiftyMillionTimes(writer, encoding, callback) {
  let i = 14000000;
  let id = 36000000;
  let homeId = id / 5;
  let rank = 1;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const data = writeLine(id, homeId, rank);
      rank++; 
      if (rank === 6) {
        rank = 1;
        homeId++;
      }
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

const writeFile = fs.createWriteStream('./images3.csv')
const line1 = 'image_id, image_url, showrank, home_id\n';
writeFile.write(line1);

writeFiftyMillionTimes(writeFile, 'utf-8', ()=>{
  writeFile.end()
})