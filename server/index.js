/**
 * This file is main file for the back-end, it makes sure that all the routes are being used and also what port to be
 * using.
 *
 * Author: Andrew J Fei
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getImagesRouter = require('./routes/get-images');

// States which port is being used.
const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(getImagesRouter.getPersonalImages)
  .use(getImagesRouter.getEventImages)
;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});



