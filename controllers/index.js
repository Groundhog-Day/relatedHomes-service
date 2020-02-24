const db = require('../pg-database/database.js');

module.exports = {
  // Required input is a homeId and zipcode
  // Returns a promise 
  getSimilarHomes: (homeId, state, zipcode) => {
    const queryString = `SELECT homes.home_id, homes.beds, homes.title, homes.category, homes.stars, homes.reviewcount, homes.pricepernight, images.image_url, images.showrank
    FROM homes INNER JOIN images ON homes.home_id = images.home_id 
    WHERE homes.home_id IN
      (SELECT homes.home_id FROM homes WHERE homes.state = $1 AND homes.zip = $2 AND homes.home_id != $3
       ORDER BY homes.stars DESC LIMIT 12
      )`
    const queryValues = [state, zipcode, homeId]
    return db.query(queryString, queryValues)
  }, 

  getHome: (homeId) => {
    const queryString = `Select * from homes WHERE homes.home_id = $1`;
    const queryValues = [homeId];
    return db.query(queryString, queryValues);
  },

  deleteHome: (homeId, userId) => {
    const queryString = `DELETE from homes WHERE homes.home_id = $1 AND home.user_id = $2`
    const queryValues = [homeId, userId];
    return db.query(queryString, queryValues);
  },

  deleteImage: (imageId) => {
    const queryString = `DELETE from images WHERE images.id = $1`
    const queryValues = [imageId];
    return db.query(queryString, queryValues);
  },

  insertHome: (homeObj) => {
    const queryString = `INSERT into homes (beds, title, user_id, category, pricepernight, city, state, zip)
    values ($1, $2, $3, $4, $5, $6, $7, $8)`
    const queryValues = [
      homeObj.beds,
      homeObj.title,
      homeObj.user_id,
      homeObj.category,
      homeObj.pricepernight,
      homeObj.city,
      homeObj.state,
      homeObj.zip,
    ];
    return db.query(queryString, queryValues)
  },

  testGetHome: (homeId) => {
    const queryString = `EXPLAIN ANALYZE Select * from homes WHERE homes.home_id = $1;`
    const queryValues = [homeId];
    return db.query(queryString, queryValues);
  },

  updateHome: (homeId, userId, updateObj) => {
    let queryValues = [homeId, userId];
    // change updateObj to a string
    let updateListString = '';
    let first = true;
    let start = 3; 
    for (const key in updateObj) {
      if (first === true) {
        updateListString += `${key} = $${start}`
        queryValues.push(updateObj[key]);
        start += 1;
        first = false;
      } else {
        updateListString += `, ${key} = $${start}`
        queryValues.push(updateObj[key]);
        start += 1;
      }
    }
    console.log(updateListString, queryValues)
    const queryString = `UPDATE homes SET ${updateListString} WHERE homes.home_id = $1 and homes.user_id = $2`;
    return db.query(queryString, queryValues)
  }

}
// const homeObj = {
//   beds: 1,
//   title: 'insertionTest',
//   category: 'Entire Place',
//   pricepernight: 100,
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94110'
// }

const updateHomeObj = {
  beds: 10,
  title: 'updateTest',
  user_id: 100, 
  category: 'Entire Place',
  pricepernight: 100,
  city: 'San Francisco',
  state: 'CA',
  zip: '94110'
}
module.exports.updateHome(10000002, 54313, updateHomeObj)
  .then((res)=> {console.log(res)})
  .catch(()=>{'stop messing up'})

// module.exports.insertHome(homeObj)
//   .then((data)=>console.log(data))
//   .catch((err)=> console.log(err, 'Error'));

// module.exports.getSimilarHomes(1,'OH','43661')



// module.exports.testGetHome(9997)
//   .then((res)=>console.log(res.rows))
//   .then(()=> {db.closeConnection()})


