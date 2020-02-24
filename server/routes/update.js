var express = require('express');
var router = express.Router();

router.patch('home/:listingId', (req, res) => {
  const id = req.params.listingId;
  res.send(`${id} updated`)
})

router.patch('/image/:listingId/:imageId', (req, res) => {
  res.send(200);
})

router.patch('/similiar/:listingId/:similarId'), (req, res) => {
  res.send(200);
}

module.exports = router;