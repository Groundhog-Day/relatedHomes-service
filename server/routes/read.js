var express = require('express');
var router = express.Router();
//Legacy route
router.get('getHomes', (req, res) => {
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
router.get('getHome/:listingId', (req, res) => {
  let id = req.params.listingId;
  res.send(`data for ${id}`);
})

module.exports = router;