var express = require('express');
var router = express.Router();

const controller = require('../../controllers')
const db = require('../../database/index.js');
const saveHome = require('../../database/save.js');
const conform = require('../helperFunctions/dataConform.js');


router.post('/home/', (req, res) => {
  const data = req.body;
  // console.log(data);
  controller.insertHome(data)
    .then(()=> {
      res.send('Inserted')
    })
    .catch(()=> {
      res.send('insertFailed')
    })
  // Legacy post
  // const data = conform(req.body);
  // console.log(req.body, data)
  // if (data === null) {
  //   res.send('bad data');
  // } else {
  // // console.log(data)
  //   db.getMax((err, number) => {
  //     res.send(JSON.stringify(number + 1));
  //     data.listingId = number + 1;
  //     saveHome(data);
  //   })
});

router.post('/image/', (req, res) => {
  res.send(200);
})

// router.post('/similar/', (req, res) => {
//   res.send(200);
// })

module.exports = router;