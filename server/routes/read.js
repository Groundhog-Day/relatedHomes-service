var express = require('express');
var router = express.Router();
var controller = require('../../controllers')
var parseSimilar = require('../../pg-database/parseData.js');
const db = require('../../database')

//Legacy route
router.get('/', (req, res) => {
  db.getThreeHomes((err, list) => {
    if (err) {
      res.send(err);
    }
    res.send(list);
  });
});

//Legacy route
router.get('/api/related-homes/:listingId', (req, res) => {
  let home = req.params.listingId;
  db.getHome((err, home) => {
    if (err) {
      res.send(err);
    }
    res.send(home);
  }, home)
});


// new route page loads requests data receives an array
// of listings
router.get('/home/:id/:state/:zip', (req, res) => {
  let id = req.params.id;
  let state = req.params.state;
  let zip = req.params.zip;
  // console.log(id,state, zip)
  controller.getSimilarHomes(id, state, zip)
    .then((data)=> {
      res.send(parseSimilar(data.rows))
    })
    .catch((err)=> {
      console.log(err)
      res.send('error')
    })
})


router.get('/home/:id', (req, res) => {
  let id = req.params.id;
  controller.getHome(id)
    .then((data)=> {
      res.send(data.rows)
    })
    .catch((err)=> {
      console.log(err)
      res.send('error')
    })
})


module.exports = router;