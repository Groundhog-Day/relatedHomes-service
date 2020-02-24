const images = [
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image1/image.jpg', 
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image2/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image3/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image4/image.jpg',
  'https://relatedhomesrol.s3-us-west-1.amazonaws.com/image5/image.jpg',    
]

const randomImageUrl = () => images[Math.floor(Math.random() * 5)]


const fs = require('fs');

const writeLine = (id, homeId, rank) => `${id}, ${randomImageUrl()}, ${rank}, ${homeId}\n`

function writeFiftyMillionTimes(writer, encoding, callback) {
  let i = 18000000;
  let id = i;
  let homeId = i / 5;
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

const writeFile = fs.createWriteStream('./images1.csv')
const line1 = 'image_id, image_url, showrank, home_id\n';
writeFile.write(line1);

writeFiftyMillionTimes(writeFile, 'utf-8', ()=>{
  writeFile.end()
})