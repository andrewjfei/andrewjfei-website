const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');

const s3 = new aws.S3();

// View all images
router.get('/get-images', (req, res, next) => {
  // // Traditional CAllBACK method
  // s3.listObjects({Bucket: myBucket}, function(err, data) {
  //   if (err) { console.log(err) }
  //   // Retrieve all image filenames and create url array
  //   const baseURL = `https://s3.amazonaws.com/${myBucket}/`;
  //   let urlArr = data.Contents.map(e => baseURL + e.Key);
  //   res.render('album', { data: urlArr});
  // })

  // USING PROMISES, call on the promise method
  console.log('inside request')
  s3.listObjects({ Bucket: 'andrewjfei-website'}).promise()
    .then(data => {
      console.log(data)
      const baseURL = `https://andrewjfei-website.s3.amazonaws.com/`;
      let urlArr = data.Contents.map(e => baseURL + e.Key);
      console.log(urlArr)
      res.send(urlArr);
    })
    .catch(err => console.log(err));

});

module.exports = router;
