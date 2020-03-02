const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/personalImages', (req, res, next) => {
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
  });

  return router;
}

module.exports = createRouter;
