const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // router.post('/personalImages', (req, res, next) => {
  //   console.log('hi')
    // db.query(
    //   'INSERT INTO personalImages (image, imageName, imageLocation, dateCreated) VALUES (?,?,?,?)',
    //   [owner, req.body.name, req.body.description, new Date(req.body.date)],
    //   (error) => {
    //     if (error) {
    //       console.error(error);
    //       res.status(500).json({status: 'error'});
    //     } else {
    //       res.status(200).json({status: 'ok'});
    //     }
    //   }
    // );
  // });

  router.get('/images', (req, res, next) => {
    console.log('Hi')
    db.query(
      'SELECT * FROM personalImages;',
      (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(result);
        }
      }
    )
  })

  return router;
}

module.exports = createRouter;
