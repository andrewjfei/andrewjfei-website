const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');
const imageUploadRoutes = require('./routes/image-upload');
const getImagesRoutes = require('./routes/get-images');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rap9361TORS',
  database : 'andrewjfei_website'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connected!");
});

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection))
  .use(imageUploadRoutes)
  .use(getImagesRoutes)
;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
