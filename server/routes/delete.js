var express = require('express');
var router = express.Router();
const controller = require('../../controllers')


router.delete('/home/:id', (req, res) => {
  const id = req.params.id;
  const userId = req.body.userId;
  // console.log(id, userId)
  controller.deleteHome(id, userId)
    .then(res.send(`${id} deleted`))
    .catch(res.send('error saving'))
})

router.delete('/image/:id', (req, res) => {
  const id = req.params.id;
  controller.deleteImage(id)
    .then(()=> {
      res.send(200);
    })
    .catch(()=>{
      res.send(403);
    })
});

// router.delete('/similar/:listingId/:similarId', (req, res) => {
//   res.send(200);
// })

module.exports = router;