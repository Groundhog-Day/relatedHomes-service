var express = require('express');
var router = express.Router();

router.delete('/:listingId', (req, res) => {
  const id = req.params.listingId;
  res.send(`${id} deleted`)
})

router.delete('/image/:listingId/:imageId', (req, res) => {
  res.send(200);
})

router.delete('/similar/:listingId/:similarId', (req, res) => {
  res.send(200);
})

module.exports = router;