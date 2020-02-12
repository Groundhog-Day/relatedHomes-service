const express = require('express');
const app = express();
const port = 4321;
const path = require('path');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

//Verified with Postman

app.get('/getHomes', (req, res) => {
  db.getThreeHomes((err, list) => {
    if (err) {
      res.send(err);
    }
    res.send(list);
  })
})
// Verified with Postman uses listingId

app.get('/api/related-homes/:listingId', (req, res) => {
  let home = req.params.listingId;
  db.getHome((err, home) => {
    if (err) {
      res.send(err);
    }
    res.send(home);
  }, home)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
