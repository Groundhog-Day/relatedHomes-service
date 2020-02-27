const { Pool, Client } = require('pg');
const parseHomes = require('./parseData.js');
const config = require('../config/pgConfig.js');

const pool = new Pool(config)


// return a promise fulfilled at end of the query
// input is a string to query refactored for pooling is a little wonk
// to do is to refactor query into a single function returning a promise, rather
// than promise callback frankenstein

const query = (queryString, values) => {
  return new Promise ((resolve, reject) => {
    queryNonPromise(queryString, values, (err, result)=> {
      if (err) reject(err);
      resolve(result);
    })
  });
}



const queryNonPromise = (queryString, values, callback) => {
  // console.log('connecting', queryString)
  pool.connect()
  .then((client)=>{
    return client
      .query(queryString, values)
      .then(result => {
        client.release();
        // console.log('function', result.rows);
        callback(null, result.rows)
      })
      .catch((error)=> {
        client.release();
        callback(error, null);
      })
  })
}

// ends connection for after promise is fulfilled
const closeConnection = () => {
  client.end()
}

// client.query(`SELECT homes.beds, homes.title, homes.category, homes.stars, homes.reviewcount, homes.pricepernight, images.image_url, images.showrank
// FROM homes INNER JOIN images ON homes.home_id = images.home_id 
// WHERE homes.home_id IN
//   (SELECT homes.home_id FROM homes WHERE homes.zip = '43661' 
//    AND homes.hom
//    ORDER BY homes.stars DESC LIMIT 12
//   )`, (err, res) => {
//   console.log(err, res.rows)
//   client.end()
// })

// const sample = `SELECT homes.home_id, homes.beds, homes.title, homes.category, homes.stars, homes.reviewcount, homes.pricepernight, images.image_url, images.showrank
// FROM homes INNER JOIN images ON homes.home_id = images.home_id 
// WHERE homes.home_id IN
//   (SELECT homes.home_id FROM homes WHERE homes.zip = '43661' AND homes.home_id != 1
//    ORDER BY homes.stars DESC LIMIT 12
//   )`

const simpleTest = 'SELECT * from homes WHERE homes.home_id = 1';
query(simpleTest)
  .then(result=>{console.log(result)})


module.exports.query = query;

