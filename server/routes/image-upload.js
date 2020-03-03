const express = require('express');
const router = express.Router();

const { personalUpload, eventsUpload } = require('../services/image-upload');


router.post('/personal/image-upload', (req, res) => {
  console.log(res)
  personalUpload.single('image')(req, res, (error) => {
    if (error) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: error.message}]});
    }

    return res.json({'imageUrl': req.file.location});
  });
});

router.post('/events/image-upload', (req, res) => {
  console.log(res)
  eventsUpload.single('image')(req, res, (error) => {
    if (error) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: error.message}]});
    }

    return res.json({'imageUrl': req.file.location});
  });
});

module.exports = router;
