const express = require('express');
const router = express.Router();

const upload = require('../services/image-upload');

const singleUpload = upload.single('image');


router.post('/image-upload', (req, res) => {
  console.log(res)
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: error.message}]});
    }

    return res.json({'imageUrl': req.file.location});
  });
});

module.exports = router;
