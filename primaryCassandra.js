const fs = require('fs');

const writeLine = require('./csvLine.js');


function writeTenMillionTimes(writer, encoding, callback) {
  let i = 1000;
  let id = 0;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const data = writeLine(id);
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