const express = require('express');
const app = express();
const port = 4321;
const path = require('path');
const db = require('../database/index.js');
const saveHome = require('../database/save.js');
const conform = require('./helperFunctions/dataConform.js');

// Middleware

app.use(express.json());
app.use(express.urlencoded());

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

app.post('/addHome', (req, res) => {
  const data = conform(req.body);
  console.log(req.body, data)
  if (data === null) {
    res.send('bad data');
  } else {
  // console.log(data)
    db.getMax((err, number) => {
      res.send(JSON.stringify(number + 1));
      data.listingId = number + 1;
      saveHome(data);
    })
  } 

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
