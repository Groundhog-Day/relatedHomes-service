const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'robertlopez',
  host: 'localhost',
  database: 'relatedhomes',
  password: '',
  port: 5432,
})

const client = new Client({
    user: 'robertlopez',
    host: 'localhost',
    database: 'relatedhomes',
    password: '',
    port: 5432,
})
client.connect()

// return a promise fulfilled at end of the query
// input is a string to query
const query = (queryString) => {
  return new Promise((resolve, reject) => {
    client.query(queryString, (err, res) => {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  })
}

client.query(`SELECT homes.beds, homes.title, homes.category, homes.stars, homes.reviewcount, homes.pricepernight, images.image_url, images.showrank
FROM homes INNER JOIN images ON homes.home_id = images.home_id 
WHERE homes.home_id IN
  (SELECT homes.home_id FROM homes WHERE homes.zip = '43661'
   ORDER BY homes.stars DESC LIMIT 12
  )`, (err, res) => {
  console.log(err, res.rows)
  client.end()
})

const sample = `SELECT homes.beds, homes.title, homes.category, homes.stars, homes.reviewcount, homes.pricepernight, images.image_url, images.showrank
FROM homes INNER JOIN images ON homes.home_id = images.home_id 
WHERE homes.home_id IN
  (SELECT homes.home_id FROM homes WHERE homes.zip = '43661'
   ORDER BY homes.stars DESC LIMIT 12
  )`

query(sample)
  .then((res) => {console.log(res.rows)} )
  .catch(()=>{})
